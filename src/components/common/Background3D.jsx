import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { useTheme } from '../../context/ThemeContext';

const ParticleField = ({ color, ...props }) => {
  const ref = useRef();
  
  // Generate 5000 random points within a sphere of radius 1.5
  const sphere = useMemo(() => {
    const count = 5000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 1.5;
      
      const sinPhi = Math.sin(phi);
      
      positions[i * 3] = r * sinPhi * Math.cos(theta);
      positions[i * 3 + 1] = r * sinPhi * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    // Rotation animation
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    
    // Slight mouse follow effect
    const mouseX = state.mouse.x * 0.1;
    const mouseY = state.mouse.y * 0.1;
    ref.current.position.x += (mouseX - ref.current.position.x) * 0.05;
    ref.current.position.y += (mouseY - ref.current.position.y) * 0.05;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={color}
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Background3D = () => {
  const { theme } = useTheme();
  
  const bgColor = theme === 'dark' ? '#121212' : '#f7f9fc';
  const pointColor = theme === 'dark' ? '#ffdb70' : '#d97706';

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none',
      background: bgColor,
      transition: 'background 0.5s ease'
    }}>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ParticleField color={pointColor} />
      </Canvas>
    </div>
  );
};

export default Background3D;
