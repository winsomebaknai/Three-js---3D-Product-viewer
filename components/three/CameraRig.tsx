'use client';

import { OrbitControls } from "@react-three/drei";
import { useRef, useImperativeHandle, forwardRef } from "react";
import type { OrbitControls as OrbitControlsType } from "three-stdlib";

interface CameraRigProps {
    autoRotate?: boolean;
    autoRotateSpeed?: number;
}

export const CameraRig = forwardRef<
    { reset: ()=> void },
    CameraRigProps
>(({ autoRotate = false, autoRotateSpeed = 0.5 }, ref) => {
    const controlsRef = useRef<OrbitControlsType>(null);

    useImperativeHandle(ref, () => ({
        reset: () =>{
            if (controlsRef.current){
                controlsRef.current.reset();
            }
        },
    }));

    return(
        <OrbitControls
        ref = {controlsRef}
        enableDamping
        dampingFactor = {0.05}

        minDistance ={2}
        maxDistance={15}

        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 6}

        enablePan={true}
        panSpeed={0.5}

        zoomSpeed={1}

        touches={{
            ONE: 2,
            TWO: 1,
        }}
        target = {[0, 0, 0]}
        />
    );
});

CameraRig.displayName = 'CameraRig';