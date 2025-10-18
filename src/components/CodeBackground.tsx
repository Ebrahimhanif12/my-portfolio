'use client'

import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { useCallback } from 'react'

const CodeBackground = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: { value: "#000" } },
        particles: {
          number: { value: 80 },
          color: { value: "#00ff99" },
          shape: {
            type: "char",
            character: {
              value: ['{', '}', 'if', 'else', 'int', 'main', '=>', '<>', 'const'],
              font: "monospace",
              style: "",
              weight: "400"
            },
          },
          opacity: {
            value: 0.08,
            random: true,
          },
          size: {
            value: 14,
            random: true,
          },
          move: {
            direction: "bottom",
            outModes: { default: "out" },
            speed: 1,
          },
        },
      }}
    />
  )
}

export default CodeBackground
