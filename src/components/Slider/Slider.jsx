import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles"
import backgroundImage from '../../images/background.jpg'

const Slider = () => {
  console.log("Image url: ",backgroundImage)
    const particlesInit = useCallback( async engine => {
        console.log(engine)
        await loadFull(engine);
    }, [])

    const particlesLoaded = useCallback( async container => {
        console.log(container)
    }, [])

    const particlesOptions = {
        fpsLimit: 60,
        particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 5
              },
              image: {
                src: "images/github.svg",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 0.7,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 100,
              random: true,
              anim: {
                enable: true,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 1,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10
                }
              },
              onClick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                lineLinked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 150,
                duration: 2,
                opacity: 1,
                speed: 3
              },
              repulse: {
                distance: 200
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          backgroundMask: {
            enable: true,
            cover: {
              color: {
                value: "#000"
              },
              // image: "../../assets/background.jpg",
              // scale: 1,
              // repeat: "no-repeat",
            }
          },
          retina_detect: true
    }
    return(
        <div className="relative" style={{ width:'100%', height: '100%'}}>
            <img 
            src={backgroundImage}
            alt="background"
            className="absolute top-0 left-0 w-[100%] h-[100%] z-0 object-cover"

            />
           <Particles 
           id="tsparticles"
           init={particlesInit}
           loaded={particlesLoaded}
           options={particlesOptions}
           className="z-10"
           />
        </div>
    )
}

export default Slider;