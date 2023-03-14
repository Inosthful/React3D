import React from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Cube from './Cube';

const Who = () => {
    return (
        <div className='whoSection'>
            <div className='containerWho'>
                <div className='leftWho'>
                    <Canvas camera={{fov:25, position:[5,5,5]}}>
                        <OrbitControls enableZoom={false} autoRotate />
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <Cube />
                    </Canvas>
                </div>
                <div className='rightWho'>
                    <h1 className='titleWho'>
                        Think outside the square space
                    </h1>
                    <div className='whatwedoWho'>
                        <img className='imgHeroLeft' src="./img/line.png" alt="" />
                        <div className='subtitleWho'>
                            Who we are
                        </div>
                    </div>
                    <div className='descWho'>
                        a creative group of designer and developers with a passion for the arts.
                    </div>
                    <button className='buttonHeroLeftWho'>See our works</button>
                </div>
            </div>
        </div>
    );
};

export default Who;