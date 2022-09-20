import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import Strapi from '../assets/strapi.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Next from '../assets/next.png';
import Download from '../assets/download.png';
import XD from '../assets/XD.png';
import AI from '../assets/AI.png';
import Sketch from '../assets/sketch.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Sketch} alt="HTML icon" />
                  <p className='my-4'>SKETCH</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Download} alt="HTML icon" />
                  <p className='my-4'>FIGMA</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={XD} alt="HTML icon" />
                  <p className='my-4'>ADOBE XD</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={AI} alt="HTML icon" />
                  <p className='my-4'>ADOBE ILLUSTRATOR</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
              <p className='my-4'>GITHUB</p>
              </div>
 <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={Next} alt="HTML icon" />
    <p className='my-4'>NEXT JS</p>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={Strapi} alt="HTML icon" />
    <p className='my-4'>STRAPI</p>
</div>
<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
    <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
    <p className='my-4'>TAILWIND CSS</p>
</div>


          </div>
      </div>
    </div>
  );
};

export default Skills;
