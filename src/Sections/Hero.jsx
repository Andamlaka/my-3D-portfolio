import React, { Suspense, useTransition } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../Constants/index'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import Cube from '../components/cube'
import Rings from '../components/Rings'
import HeroCamera from '../components/HeroCamera'

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: '404px' })
  const isMobile = useMediaQuery({ maxWidth: '787px' })
  const isTablet = useMediaQuery({ maxWidth: '1024px' })

  const sizes = calculateSizes(isSmall, isMobile, isTablet)

  // Use React's useTransition hook for smooth state transitions
  const [isPending, startTransition] = useTransition()

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-3xl font-medium text-white text-center font-generalsans">
          Hi, I am Andargachew <span className="waving-hand">✋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building web apps</p>
      </div>

      <div className="w-full h-full mt-28 absolute inset-0">
        {/* Canvas for 3D scene */}
        <Canvas className="w-full h-full">
          {/* Suspense for all asynchronous operations */}
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera>
              {/* Suspense for HackerRoom */}
              <Suspense fallback={<CanvasLoader />}>
                <HackerRoom
                  position={sizes.deskPosition}
                  rotation={[0, -Math.PI, 0]}
                  scale={sizes.deskScale}
                />
              </Suspense>
            </HeroCamera>

            {/* Suspense for Target */}
            <Suspense fallback={<CanvasLoader />}>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </Suspense>

            <ambientLight intensity={1} />
            <directionalLight intensity={0.5} position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Hero
