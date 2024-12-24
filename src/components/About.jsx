import React, {useState} from 'react'
import Globe from 'react-globe.gl'
import Button from './Button'
// import {Canvas} from "@react-three/fiber"
// import {OrbitControls} from "@react-three/drei"


const About = () => {
    const [hasCopied, setHasCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(
        'andargachweewawey@gmail.com');

        setHasCopied(true);

        setTimeout(()=> {
            setHasCopied(false);

        },2000)
  }
  return (
    <section className="c-space my-20" id='about'>
      <div
        className="grid xl:grid-cols-3 xl:grid-rows-6
 md:grid-cols-2 grid-cols-1 gap-5 h-full"
      >
        <div className=" col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit
             object-contain"
            />
            <div>
              <p className="grid-headtext">I'm Andargachew</p>
              <p className="grid-subtext">
                With a passion for web development, I bring a unique blend of
                creativity and technical expertise to the world of software
                development.
              </p>
            </div>
          </div>
        </div>
        <div className=" col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain "
            />
            <div>
              <p className="grid-headtext">Teck Stack</p>
              <p className="grid-subtext">
                I specialize in Javascript/Typescript with a focus on React and
                Next.js ecosystems.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4 ">
          <div className="grid-container">
            <div
              className="rounded-3xl w-full sm:h-[326px] h-fit flex 
            justify-center items-center"
            >
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                showLand
                OrbitControls
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
              
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most time zones
              </p>
              <p className="grid-subtext">
                {' '}
                I'm based in Ethiopia, with remote work available.
              </p>
              <Button name="Contact Me" isBeam containerClass=" w-full mt-5" />
            </div>
          </div>
        </div>
        <div
          className="xl:col-span-2
        xl:row-span-3"
        >
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3" 
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and buiding things code, Coding isn't
                just my profession, it's my passion.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container ">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="e-full md:h-[126px]
                sm:h-[276px] h-fit objet-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Cotact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={ hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} 
                alt="copy" />
                <p className='lg:text-xl md:text-xl font-mrdium 
                text-gray_gradient text-white'>
                  andargachweewawey@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
