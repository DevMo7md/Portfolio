import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function useScreenTexture() {
  return useMemo(() => {
    const width = 2048;
    const height = 1280;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    // Background gradient
    const gradient = ctx.createLinearGradient(7, 5, width, height);
    gradient.addColorStop(0, "#0a0f1cff");
    gradient.addColorStop(1, "#161f2cff");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Title
    ctx.font = "bold 72px 'Fira Code', monospace";
    ctx.fillStyle = "#00f3ff";
    ctx.fillText("Mohammed Younis", 80, 120);

    ctx.font = "48px 'Fira Code', monospace";
    ctx.fillStyle = "#50fa7b";
    ctx.fillText("Full Stack Developer | Backend Developer", 80, 200);

    // Code snippet
    const code = [
      "class Portfolio:",
      "    def __init__(self, name, role):",
      "        self.name = name",
      "        self.role = role",
      "",
      "    def show(self):",
      '        print(f"{self.name} - {self.role}")',
      "",
      "portfolio = Portfolio('Mohammed Younis', 'Full Stack Developer')",
      "portfolio.show()",
    ];

    let y = 300;
    code.forEach((line) => {
      if (line.trim().startsWith("class") || line.trim().startsWith("def")) {
        ctx.fillStyle = "#00f3ff";
      } else if (line.includes("print")) {
        ctx.fillStyle = "#ffb86c";
      } else if (line.includes("=")) {
        ctx.fillStyle = "#50fa7b";
      } else {
        ctx.fillStyle = "#e2e8f0";
      }
      ctx.font = "42px 'Fira Code', monospace";
      ctx.fillText(line, 80, y);
      y += 60;
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 16;
    texture.needsUpdate = true;
    return texture;
  }, []);
}

// Helper function to create a texture with a letter
function createKeyTexture(letter) {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  // Background key color
  ctx.fillStyle = "#b9b9b9";
  ctx.fillRect(0, 0, size, size);

  // Draw letter
  ctx.font = "bold 90px 'Fira Code', monospace";
  ctx.fillStyle = "#222";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(letter, size / 2, size / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

// Keyboard layout rows
const keys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";"],
  ["Z", "X", "C", "V", "B", "N", "M", ",", ".", "/"],
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"],
];

function Laptop() {
  const screenTexture = useScreenTexture();
  const trackpadRef = useRef();
  const [clicked, setClicked] = useState(false);

  // Trackpad click animation
  useFrame(() => {
    if (trackpadRef.current) {
      trackpadRef.current.position.y = clicked ? 0.005 : 0.01;
    }
  });

  return (
    <group scale={[1, 1, 1]}>
      {/* Base */}
      <mesh position={[0, -0.05, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.2, 0.08, 1.5]} />
        <meshStandardMaterial
          color="#4b4b4b"
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>

      {/* Keyboard */}
      {keys.map((row, rowIndex) =>
        row.map((key, colIndex) => {
          const texture = createKeyTexture(key);
          return (
            <mesh
              key={`key-${rowIndex}-${colIndex}`}
              position={[-0.88 + colIndex * 0.2, 0.015, -0.4 + rowIndex * 0.16]}
              castShadow
            >
              <boxGeometry args={[0.17, 0.02, 0.12]} />
              <meshStandardMaterial
                map={texture}
                roughness={0.6}
                metalness={0.1}
              />
            </mesh>
          );
        })
      )}

      {/* Trackpad */}
      <mesh
        ref={trackpadRef}
        position={[0, 0.01, 0.55]}
        onPointerDown={() => setClicked(true)}
        onPointerUp={() => setClicked(false)}
      >
        <boxGeometry args={[0.5, 0.005, 0.3]} />
        <meshStandardMaterial
          color="#7a7a7a"
          roughness={0.35}
          metalness={0.5}
        />
      </mesh>

      {/* Hinge */}
      <mesh position={[0, 0.4, -0.74]}>
        <cylinderGeometry args={[0.05, 0.05, 1.2, 32]} />
        <meshStandardMaterial
          color="#666666"
          metalness={0.9}
          roughness={0.15}
        />
      </mesh>

      {/* Screen */}
      <group position={[0, 1.1, -0.75]} rotation={[Math.PI / 2.8, 0, 0]}>
        {/* Frame */}
        <mesh>
          <boxGeometry args={[2.8, 0.05, 1.5]} />
          <meshStandardMaterial color="#606060" metalness={1} roughness={0.2} />
        </mesh>

        {/* Display */}
        <mesh position={[0, 0.028, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[2.75, 1.45]} />
          <meshBasicMaterial map={screenTexture} toneMapped={false} />
        </mesh>

        {/* Glass overlay */}
        <mesh position={[0, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[2.75, 1.45]} />
          <meshPhysicalMaterial
            transparent
            opacity={0.15}
            reflectivity={0.9}
            clearcoat={1}
            clearcoatRoughness={0}
          />
        </mesh>
      </group>
    </group>
  );
}

export default function ThreeLaptop() {
  return (
    <Canvas
      style={{ height: 700, width: "100%" }}
      shadows
      camera={{ position: [3, 2, 4], fov: 45 }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <Suspense fallback={null}>
        <Laptop />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.05}
          minPolarAngle={Math.PI / 3.5}
        />
      </Suspense>
    </Canvas>
  );
}
