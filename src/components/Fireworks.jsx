import React,{useCallback} from 'react';
import Particles from "react-particles";
import { loadFireworksPreset } from 'tsparticles-preset-fireworks';

const Fireworks = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine)
        await loadFireworksPreset(engine);
    }, [])
    const particlesLoaded = useCallback( async container =>{
        console.log(container);
    })
    const particlesOptions = {
        preset: "fireworks",
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



export default Fireworks;