import React,{useCallback} from 'react';
import Particles from "react-particles";
import { loadLinksPreset } from 'tsparticles-preset-links';

const Links = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine)
        await loadLinksPreset(engine);
    }, [])
    const particlesLoaded = useCallback( async container =>{
        console.log(container);
    })
    const particlesOptions = {
        preset: "links",
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



export default Links;