import React from 'react';
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import ReactLogo from './ReactLogo';



const Development = () => {
    return (

        <Canvas>
            <Stage environment="city" intensity={0.2} >
                <ReactLogo  />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate/>
        </Canvas>

    );
};

export default Development;