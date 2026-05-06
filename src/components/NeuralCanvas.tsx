import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

function NeuralCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.2;
      meshRef.current.rotation.x = time * 0.1;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = -time * 0.3;
      wireframeRef.current.rotation.z = time * 0.15;
    }
  });

  return (
    <group>
      {/* Inner Core */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={meshRef} args={[1, 64, 64]}>
          <MeshDistortMaterial
            color="#00f2ff"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
            emissive="#00f2ff"
            emissiveIntensity={0.5}
          />
        </Sphere>
      </Float>

      {/* Outer Wireframe */}
      <Sphere ref={wireframeRef} args={[1.4, 32, 32]}>
        <meshStandardMaterial
          color="#bc13fe"
          wireframe
          transparent
          opacity={0.3}
          emissive="#bc13fe"
          emissiveIntensity={0.8}
        />
      </Sphere>

      {/* Floating Particles Around */}
      {[...Array(20)].map((_, i) => (
        <Float key={i} speed={1} rotationIntensity={2} floatIntensity={1}>
           <mesh position={[
             (Math.random() - 0.5) * 4,
             (Math.random() - 0.5) * 4,
             (Math.random() - 0.5) * 4
           ]}>
             <sphereGeometry args={[0.02, 8, 8]} />
             <meshStandardMaterial color="#00f2ff" emissive="#00f2ff" emissiveIntensity={2} />
           </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function NeuralCanvas() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f2ff" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#bc13fe" />
        <NeuralCore />
      </Canvas>
    </div>
  );
}
