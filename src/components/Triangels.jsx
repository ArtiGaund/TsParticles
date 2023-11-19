import React,{useCallback} from 'react';
import Particles from "react-particles";
import { loadTrianglesPreset } from 'tsparticles-preset-triangles';

const Triangels = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine)
        await loadTrianglesPreset(engine);
    }, [])
    const particlesLoaded = useCallback( async container =>{
        console.log(container);
    })
    const particlesOptions = {
        preset: "triangles",
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



export default Triangels;