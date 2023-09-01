// Experience.tsx
import React from 'react';
import { motion } from 'framer-motion-3d';
import { Environment, OrbitControls, Stage } from '@react-three/drei';
import { useSnapshot } from 'valtio';
import state from '@/store';
import { Model } from './Model';


const IntroScene: React.FC = () => {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
      <motion.group
        initial={{
          y: 0,
        }}
        animate={{
          y: 1,
        }}
      >
        <Model />
      </motion.group>
    </>
  );
};

const MainScene: React.FC = () => {
  const snap = useSnapshot(state);

  return (
    <>
      <OrbitControls enableZoom={false} />
      <Stage intensity={0.5} environment={snap.dark ? 'dawn' : 'city'} adjustCamera={false}>
      <motion.group
                  scale={[0.6, 0.6, 0.6]}
                  initial={{
                    rotateY:0
                  }}
                  animate={{
                    rotateY:Math.PI
                  }}
                  transition={{
                    duration: 2,
                    delay:1
                  }}
                >
          <Model />
          </motion.group>
      </Stage>
      <OrbitControls autoRotate autoRotateSpeed={0.05} enableZoom={false} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
      <Environment background preset={snap.dark ? 'dawn' : 'city'} blur={0.8} />
    </>
  );
};

const Experience: React.FC = () => {
  const snap = useSnapshot(state);

  return (
    <>
      {snap.intro ? <IntroScene /> : <MainScene />}
      {/* Additional components or UI elements can be added here */}
    </>
  );
};

export default Experience;