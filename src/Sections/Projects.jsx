import React, { Suspense, useState } from 'react';
import { myProjects } from '../constants/index.js';
import {Canvas} from "@react-three/fiber";
import {Center, OrbitControls} from "@react-three/drei";
import DemoComputer from '../components/DemoComputer.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalProjects = myProjects.length;

  // Handle "Next" button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % totalProjects;
      console.log("Next Project Index:", newIndex); // Debugging log
      return newIndex;
    });
  };

  // Handle "Previous" button click
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? totalProjects - 1 : prevIndex - 1;
      console.log("Previous Project Index:", newIndex); // Debugging log
      return newIndex;
    });
  };

  const currentProject = myProjects[currentIndex];

  // Debugging log for current project
  console.log("Current Project:", currentProject);

  return (
    <section className="c-space my-20">
      <p className="head-text">My Work</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-2 gap-5 w-full">
        <div className="relative flex flex-col gap-5 sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0 w-full h-full">
            <img
              src={currentProject.spotlight || "/assets/default-spotlight.png"} // Fallback image
              alt={currentProject.title}
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              className="w-10 h-10 shadow-small"
              alt={`${currentProject.title} logo`}
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag) => (
                <div key={tag.id} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>Check Live Site</p>
              <img
                src="/assets/arrow-up.png"
                className="w-3 h-3"
                alt="arrow up"
              />
            </a>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={handlePrevious}>
              <img
                src="/assets/left-arrow.png"
                alt="left arrow"
                className="w-4 h-4 cursor-pointer"
              />
            </button>
            <button className="arrow-btn" onClick={handleNext}>
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
     <Canvas>
     <ambientLight intensity={Math.PI/2} />
     <directionalLight position={[10, 10, 5 ]} />
     <Center>
      <Suspense fallback={<CanvasLoader />}>
      <group scale={2}
      position={[0,-3,0]}
        rotation={[0, -1, 0]}   >
        <DemoComputer texture={currentProject.texture}/>
      </group>
      </Suspense>
     </Center>
    <OrbitControls maxPolarAngle={Math.PI/2} 
    enableZoom={false}/>
     </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
