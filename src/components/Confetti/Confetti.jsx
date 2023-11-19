import React, {useCallback} from 'react';
import Particles from 'react-particles';
import { loadConfettiPreset } from 'tsparticles-preset-confetti';

const Confetti = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine)
        await loadConfettiPreset(engine);
        // await engine.load("tsparticles", {
        //     particles: {
        //         color: {
        //             value: ["#0000ff", "#00ff00"],
        //         },
        //     },
        //     preset: "confetti",
        // })
    }, [])
    const particlesLoaded = useCallback( async container =>{
        console.log(container);
    })
    const particlesOptions = {
        particles: {
            color: {
                value: [ "#0000ff", "#00ff00"],
            },
            startCount: 50,
            position: {
                x:50,
                y:50,
            },
            size: {
                width:0,
                height: 0,
            },
            rate: {
                delay: 0,
                quantity:0,
            },
            life: {
                duration: 0.1,
                count:1,
            },
        },
        preset: "confetti",
        background: {
            color: {
                value: "#000000",
            },
        },
       }
    return (
        <Particles 
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
        />
    );
};


export default Confetti;