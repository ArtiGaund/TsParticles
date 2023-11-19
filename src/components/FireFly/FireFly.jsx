import React, { useCallback } from 'react';
// import { render } from 'react-dom';
import Particles from 'react-particles';
// import { Container } from 'tsparticles-engine';
import { loadFireflyPreset } from 'tsparticles-preset-firefly';


const FireFly = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine)
        await loadFireflyPreset(engine);
    }, [])
    const particlesLoaded = useCallback( async container =>{
        console.log(container);
    })
   
    return (
        <Particles 
        options={{
            preset: "firefly",
            background: {
                color: {
                    value: "#000000",
                },
            },
            fpsLimit: 60,
            interactivity:{
                // events: {
                //     onClick:{
                //         enable:true,
                //         mode: "push",
                //     },
                //     onHover:{
                //         enable: true,
                //         mode: "repulse",
                //         parallax: {
                //             enable: false,
                //             force: 60,
                //             smooth: 10,
                //         },
                //     },
                //     resize: true,
                // },
                // modes: {
                //     push: {
                //         quantity: 4,
                //     },
                //     repulse:{
                //         distance: 200,
                //         duration: 0.4,
                //     },
                // },
                particles:{
                    color: "#ffffff",
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "out",
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number:{
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity:{
                        animation: {
                            enable: true,
                            speed: 0.05,
                            sync: true,
                            startValue: "max",
                            count: 1,
                            destroy: "min",
                        },
                        value:{
                            min: 0,
                            max: 0.5,
                        },
                        shape: {
                            type: "cicle",
                        },
                        size:{
                            value:{
                                min: 1,
                                max: 5,
                            },
                        },
                    },
                }
            }
        }}
        init={particlesInit}
        loaded={particlesLoaded}
        />
    );
};


export default FireFly;