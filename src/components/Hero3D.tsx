
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls, Stars, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

const FloatingGeometry = ({ position, color, shape = 'box' }: { position: [number, number, number], color: string, shape?: 'box' | 'sphere' }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      {shape === 'sphere' ? (
        <Sphere ref={meshRef} position={position} args={[0.5, 32, 32]}>
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </Sphere>
      ) : (
        <Box ref={meshRef} position={position} args={[1, 1, 1]}>
          <meshStandardMaterial color={color} metalness={0.6} roughness={0.3} />
        </Box>
      )}
    </Float>
  );
};

const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#f59e0b" size={0.02} />
    </points>
  );
};

const Scene3D = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#f59e0b" />
      
      <Stars radius={50} depth={50} count={1000} factor={2} saturation={0} fade />
      <ParticleField />
      
      <FloatingGeometry position={[-4, 2, -2]} color="#8b5cf6" shape="sphere" />
      <FloatingGeometry position={[4, -1, -3]} color="#f59e0b" shape="box" />
      <FloatingGeometry position={[-2, -3, -1]} color="#06b6d4" shape="sphere" />
      <FloatingGeometry position={[3, 3, -4]} color="#10b981" shape="box" />
      <FloatingGeometry position={[0, -2, -5]} color="#f97316" shape="sphere" />
      
      <Text
        position={[0, 0, -2]}
        fontSize={1.5}
        maxWidth={10}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="/fonts/inter-bold.woff"
        anchorX="center"
        anchorY="middle"
      >
        RICK LUPO
        <meshStandardMaterial color="white" metalness={0.1} roughness={0.1} />
      </Text>
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

export const Hero3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene3D />
      </Canvas>
    </div>
  );
};
