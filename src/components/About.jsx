import Globe from 'react-globe.gl'

const About = () => {
  return (
    <section className="c-space my-20">
      <div
        className="grid xl:grid-cols-3 xl:grid-rows-6
 md:grid-cols-2 grid-cols-1 gap-5 h-full"
      >
        <div className="col-sapn-1 xl-row-span-3">
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
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="gris-2"
              className="w-full sm:w-[276px] h-fit object-contain "
            />
            <div>
              <p className="grid-headtext">Teck Stack"</p>
              <p className="grid-subtext">
                {' '}
                I specialize in Javascript/Typescript with a focus on React and
                Next.js ecosystems.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl-row-sapn-4 ">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
