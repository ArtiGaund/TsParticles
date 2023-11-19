import React,{useCallback} from 'react';
import Particles from "react-particles";
import { loadSnowPreset } from 'tsparticles-preset-snow';

const Snow = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine)
        await loadSnowPreset(engine);
    }, [])
    const particlesLoaded = useCallback( async container =>{
        console.log(container);
    })
    const particlesOptions = {
        preset: "snow",
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


export default Snow;