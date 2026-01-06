'use client';
export function Lighting(){
    return (
        <>
        <ambientLight intensity={0.4} />
        <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        />
        <directionalLight
        position={[-3, 2, -3]}
        intensity={0.3}
      />
        </>
    );
}


/*  JSX Property Errors: Usually caused by missing @types/three or the TypeScript engine not recognizing the "dash-shorthand" (shadow-camera-left). Often solved by restarting the TS server or explicitly typing the component. */