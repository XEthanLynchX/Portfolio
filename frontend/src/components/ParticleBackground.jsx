import React, { useCallback, useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticleBackground = () => {
  const [loaded, setLoaded] = useState(false);
  
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
    setLoaded(true);
  }, []);

  useEffect(() => {
    // Force a re-render after component mounts
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0" style={{ 
      overflow: 'visible',
      height: '100%',
      width: '100%'
    }}>
      <Particles
        className="absolute inset-0"
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          background: {
            color: {
              value: "transparent",
            },
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
                parallax: { 
                  enable: false
                }
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 8,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#0066FF", "#00A3FF", "#4776E6", "#5a7ecf", "#3053a4"],
            },
            links: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1.2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 80,
            },
            opacity: {
              value: 0.35,
              random: true,
              anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.2,
                sync: false
              }
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 2, max: 6 },
            },
          },
          detectRetina: true,
        }}
      />
      {!loaded && <div className="absolute inset-0 flex items-center justify-center text-blue-500">Loading particles...</div>}
    </div>
  );
};

export default ParticleBackground; 