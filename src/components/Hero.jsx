import React from 'react';
import Navbar from './Navbar';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Hero = () => {
    return (
        <div className='heroSection'>
            <Navbar />
            <div className='containerHero'>
                <div className='left'>
                    <h1 className='title'>
                        Think, Make, Solve
                    </h1>
                    <div className='whatwedo'>
                        <img className='imgHeroLeft' src="./img/line.png" alt="" />
                        <div className='subtitle'>
                            What we Do
                        </div>
                    </div>
                    <div className='desc'>
                        we enjoy creating delightful, human-centered digital experiences.
                    </div>
                    <button className='buttonHeroLeft'>learn more</button>
                </div>
                <div className='right'>
                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} autoRotate />
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <Sphere args={[1, 100, 200]} scale={1.15}>
                            <MeshDistortMaterial color="#381f4a" attach="material" distort={0.5} speed={2} />
                        </Sphere>
                    </Canvas>
                    <img className='imgHeroRight' src="./img/kiruaHero.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;