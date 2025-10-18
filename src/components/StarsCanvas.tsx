"use client";
import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// List of random JavaScript snippets
const codeSnippets: string[] = [
  'console.log("Building something awesome...");',
  'const greet = (name: string): string => `Hello, ${name}!`;',
  'const isPalindrome = (str) => str === str.split("").reverse().join("");',
  'useEffect(() => { fetchData(); }, []);',
  'const [count, setCount] = useState(0);',
  'app.get("/api", (req, res) => res.send("Hello API"));',
  'function binarySearch(arr, target) { /* ... */ }',
  '<button onClick={handleClick}>Click Me</button>;',
  'const user = await prisma.user.findUnique({ where: { id } });',
  'try { await doSomething(); } catch (err) { console.error(err); }',
  'type User = { id: number; name: string; email: string };',
  'for (let char of "Code") console.log(char);',
];

type TypedLine = {
  fullText: string;
  text: string;
  position: { x: string; y: string };
  charIndex: number;
};

// Stars Background
function Stars() {
  const ref = useRef<THREE.Points>(null);
  const particles = useRef<Float32Array>(
    new Float32Array(1000 * 3).map(() => (Math.random() - 0.5) * 10)
  );

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0005;
    }
  });

  return (
    <>
      <Points ref={ref} positions={particles.current} frustumCulled={false}>
        <PointMaterial size={0.04} color="#66ccff" opacity={0.5} depthWrite={false} transparent />
      </Points>
      <mesh position={[0, 0, -10]}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial color="#800080" opacity={0.2} transparent depthWrite={false} />
      </mesh>
    </>
  );
}

// Typing Code Component
export function TypingCode() {
  const [lines, setLines] = useState<TypedLine[]>([]);
  const [usedPositions, setUsedPositions] = useState<{ x: number; y: number }[]>([]);

  const generateUniquePosition = (): { x: string; y: string } => {
    let attempts = 0;
    while (attempts < 100) {
      const x = Math.floor(Math.random() * 80) + 10;
      const y = Math.floor(Math.random() * 80) + 10;
      const overlap = usedPositions.some(
        (pos) => Math.abs(pos.x - x) < 10 && Math.abs(pos.y - y) < 5
      );
      if (!overlap) {
        setUsedPositions((prev) => [...prev, { x, y }]);
        return { x: `${x}vw`, y: `${y}vh` };
      }
      attempts++;
    }
    return { x: "50vw", y: "50vh" }; // fallback position
  };

  // Add new line when last one is finished typing
  useEffect(() => {
    if (
      lines.length === 0 ||
      lines[lines.length - 1].charIndex === lines[lines.length - 1].fullText.length
    ) {
      const nextSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      const position = generateUniquePosition();
      setLines((prev) => [
        ...prev,
        {
          fullText: nextSnippet,
          text: "",
          charIndex: 0,
          position,
        },
      ]);
    }
  }, [lines]);

  // Typing animation effect per line
  useEffect(() => {
    const typingSpeed = 25;

    const lastLineIndex = lines.length - 1;
    if (lastLineIndex < 0) return;

    const lastLine = lines[lastLineIndex];
    if (lastLine.charIndex >= lastLine.fullText.length) return;

    const timeout = setTimeout(() => {
      setLines((prev) => {
        const updated = [...prev];
        const line = { ...updated[lastLineIndex] };
        line.charIndex += 1;
        line.text = line.fullText.slice(0, line.charIndex);
        updated[lastLineIndex] = line;
        return updated;
      });
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [lines]);

  return (
    <div className=" pointer-events-none text-[#0fb438] font-mono text-lg">
      {lines.map((line, idx) => (
        <div
          key={idx}
          className="whitespace-pre"
          style={{
            position: "relative",
            left: line.position.x,
            top: line.position.y,
            transition: "all 0.3s ease",
            backgroundColor: "transparent",
            opacity: 0.4,
          }}
        >
          {line.text}
        </div>
      ))}
    </div>
  );
}

// Main Component
export default function StarsCanvas() {
  return (
    <div className="relative w-screen bg-black">

      {/* <Canvas camera={{ position: [0, 0, 1] }} className=" ">
        <Stars />
        <OrbitControls enableZoom={false} />
      </Canvas> */}
      <TypingCode />
    </div>
  );
}
