import React, { useState, useEffect } from 'react';
import { myProjects } from '../Constants/index';

const Projects = () => {
    const projectCount = myProjects.length;
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  
    const currentProject = myProjects[selectedProjectIndex];
  
    const handleNavigation = (direction) => {
      setSelectedProjectIndex((prevIndex) => {
        const newIndex =
          direction === 'previous'
            ? prevIndex === 0
              ? projectCount - 1
              : prevIndex - 1
            : prevIndex === projectCount - 1
            ? 0
            : prevIndex + 1;
  
        console.log('New Project Index:', newIndex); // Log the new index
        return newIndex;
      });
    };
  
    useEffect(() => {
      console.log('Current Project:', currentProject); // Log the current project
    }, [selectedProjectIndex]); // Log when the index changes
  
    return (
      <section className="c-space my-20">
        <p className="head-text">My Work</p>
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-2 gap-5 w-full">
          <div className="relative flex flex-col gap-5 sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
            <div className="absolute top-0 right-0 w-full h-full">
              <img
                src={currentProject.spotlight}
                alt="spotlight"
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
                alt="logo"
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
                {currentProject.tags.map((tag, index) => (
                  <div key={index} className="tech-logo">
                    <img src={tag.path} alt={tag.name} />
                  </div>
                ))}
              </div>
              <a
                className="flex items-center gap-2 cursor-pointer text-white-600"
                href={currentProject.href}
                target="blank"
                rel="noreferrer"
              >
                <p>Check Live Site</p>
                <img src="assets/arrow-up.png" className="w-3 h-3" alt="arrow" />
              </a>
            </div>
            <div className="flex justify-between items-center mt-7">
              <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                <img src="/assets/left-arrow.png" alt="left-arrow" className="w-4 h-4" />
              </button>
              <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                <img src="/assets/right-arrow.png" alt="right-arrow" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  