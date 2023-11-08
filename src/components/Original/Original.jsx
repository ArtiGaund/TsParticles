import { useCallback } from "react"
import Particles from "react-particles"
// install tsparticles package also for this
import { loadFull } from "tsparticles"
// install tsparticles-slim package also for this
// import { loadSlim } from "tsparticles-slim"

const Original = () => {
    const pariclesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here,adding custom shapes or presets 
        // this load the tsparticles package bundle, its the easiest method for getting everything ready starting from v2
        // you can add only the features you need reducing the bundle size
        await loadFull(engine);
        // await loadSlim(engine);
      }, [])
    
      const particlesLoaded = useCallback(async container => {
        await console.log(container)
      }, [])
    
      return (
        <>
          <Particles
           id="tsparticles" 
           init={pariclesInit}
           loaded={particlesLoaded}
           options={{
            background:{
              color: {
                value: "#0d47a1",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color:{
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outMode:{
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "cicle",
              },
              size: {
                value: {
                  min:1,
                  max: 5,
                },
              },
              detectRetina: true,
            }
           }}
           />
    
           
        </>
      )
};

export default Original;