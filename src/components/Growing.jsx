import { useCallback } from "react"
import Particles from "react-particles"
// install tsparticles package also for this
import { loadFull } from "tsparticles"
// install tsparticles-slim package also for this
// import { loadSlim } from "tsparticles-slim"

const Growing = () => {
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

      const particlesOptions = {
        background:{
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 60,
  emitters: {
    size: {
      width: 100,
      height: 0
    },
    position: {
      x: 50,
      y: 100
    },
    rate: {
      delay: 0.1,
      quantity: 2
    }
  },
  particles: {
    number: {
      value: 0,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 1
    },
    size: {
      value: { min: 0.1, max: 20 },
      animation: {
        enable: true,
        speed: 5,
        sync: true,
        startValue: "min",
        destroy: "max"
      }
    },
    move: {
      enable: true,
      speed: 5,
      direction: "top",
      outModes: "destroy"
    }
  },
      }
    
      return (
        <>
          <Particles
           id="tsparticles" 
           init={pariclesInit}
           loaded={particlesLoaded}
           options={particlesOptions}
           />
    
           
        </>
      )
};

export default Growing;