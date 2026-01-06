'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { Lighting } from './Lighting';
import { ProductModel } from './ProductModel';
import { CameraRig } from './CameraRig';
import type { Product } from '@/lib/products';

interface SceneProps {
  product: Product;
  autoRotate: boolean;
  onCameraReset?: () => void;
}

export function Scene({ product, autoRotate }: SceneProps) {
  
  const cameraRef = useRef<{ reset: () => void }>(null);

   const handleResetCamera = () => {
    cameraRef.current?.reset();
  };

  return (
    <div className="w-full h-full">
      <Canvas
      camera={{
          position: [0, 1, 6],  
          fov: 45,               
          near: 0.1,            
          far: 1000,             
        }}
        shadows
         gl={{
          antialias: true,
          alpha: true,           
          powerPreference: 'high-performance', 
        }}
        style={{
          background: 'linear-gradient(to bottom, #f0f0f0, #ffffff)',
        }}
      >
        <Lighting />
        <CameraRig 
          ref={cameraRef}
          autoRotate={autoRotate}
          autoRotateSpeed={0.5}
        />

        <Suspense fallback={null}>
          <ProductModel product={product} />
        </Suspense>

         <mesh
          rotation={[-Math.PI / 2, 0, 0]}  
          position={[0, -1, 0]}             
          receiveShadow                     
        >

        <planeGeometry args={[20, 20]} />

        <shadowMaterial 
            opacity={0.3}      // Shadow darkness (0-1)
            color="#000000"    // Shadow color
          />
        </mesh>
        </Canvas>
    </div>
  );
}

      