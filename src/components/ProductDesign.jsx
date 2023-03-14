import React from 'react';
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';


const ProductDesign = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.2} >
            </Stage>
            <OrbitControls enableZoom={false}/>
        </Canvas>
    );
};

export default ProductDesign;