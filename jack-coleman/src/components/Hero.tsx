import { Canvas } from '@react-three/fiber';
import { OrbitControls, Torus, Text3D, Center } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CustomCursor from './CustomCursor';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const AnimatedTorus = () => {
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      torusRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group>
      <Center position={[0, 0, 0]}>
      <Text3D
  font="/fonts/CeraPro.json"
  size={0.5}
  height={0.05}
  curveSegments={12}
  bevelEnabled
  bevelThickness={0.01}
  bevelSize={0.01}
  bevelOffset={0}
  bevelSegments={5}
>
  360°
  <meshStandardMaterial 
    color="#ffffff"
    metalness={0}          // Kein Metall
    roughness={0.95}       // Sehr matt
    envMapIntensity={0}    // Keine Reflektionen
  />
</Text3D>
      </Center>
      <Torus
        ref={torusRef}
        args={[1.5, 0.15, 32, 100]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.2}
          roughness={0.6}
          envMapIntensity={0.3}
        />
      </Torus>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.7} />
    </group>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/40" />
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay" />
      </div>
      <div className="container mx-auto relative z-10">
        <CustomCursor />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-32">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Jack Coleman - Graz
            </h1>
            <p className="text-4xl text-white mb-8 font-bold">
            Wir konzipieren einzigartige Werbe- und Eventerlebnisse.
            </p>
            <Link
              to="/contact"
              className="btn"
            >
              Jetzt Kontakt aufnehmen
            </Link>
          </motion.div>

          {/* 3D Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square">
              <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.8} />
                <pointLight position={[10, 10, 10]} intensity={0.6} />
                <spotLight
                  position={[-10, -10, -10]}
                  angle={0.15}
                  penumbra={1}
                  intensity={0.6}
                />
                <AnimatedTorus />
                <OrbitControls
                  enableZoom={false}
                  autoRotate
                  autoRotateSpeed={0.5}
                />
              </Canvas>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 