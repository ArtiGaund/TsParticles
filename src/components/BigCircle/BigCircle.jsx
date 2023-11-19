import React, {useCallback } from 'react';
import Particles from 'react-particles';
import { loadBigCirclesPreset } from 'tsparticles-preset-big-circles';

const BigCircle = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine)
        await loadBigCirclesPreset(engine);
    }, [])
    const particlesLoaded = useCallback( async container =>{
        console.log(container);
    })
    const particlesOptions = {
        preset: "bigCircles",
        // particles: {
        //     color: {
        //         value: [ "#0000ff", "#00ff00" ],
        //     },
        // }
       }
    return (
        <Particles 
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
        />
    );
};


export default BigCircle;