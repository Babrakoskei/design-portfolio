import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Babra, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>As every job is a self-portrait of the person who does it, Babra likes to autograph her’s with excellence. Babra is an innovative mind seeking to solve real-time problems using technology. She has a diverse pool of skills in User Experience and User Interface Design, UX Research, Front-end Development and Technical writing among others. Babra is particularly drawn to designing solutions that have the interest of the community at the core. She believes that technology is a powerful tool that if properly harnessed can stimulate change. She is looking to leverage a career in tech, especially in fast-paced environments, as she wants to expand her skillset and nurture her creativity.
             </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
