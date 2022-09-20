import React from 'react';
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';
import Paylend from '../assets/paylend.png';
import Brandlogs from '../assets/brandlogs.png';
import Churpy from '../assets/churpyproduct.png';
import Booking from '../assets/booking.png';
import Churpyweb from '../assets/churpylogo.png';
import Law from '../assets/law.jpg';



const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Brandlogs})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Figma Design
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.figma.com/proto/tdM4xy8NTjVhTFf4M61tKK/MY-WORK?node-id=1%3A705&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A705' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                  <p>A social e-commerce and gifting platform</p>
                </a>
          
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Paylend})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
              Next JS Website
              </span>
              <div className='pt-8 text-center'>
                <a href='https://beta.paylend.africa/'target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                  <p>Developed this website using Next.js and Strapi headless CMS </p>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Churpy})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Adobe XD Design
              </span>
              <div className='pt-8 text-center'>
                <a href='https://xd.adobe.com/view/e1f2267a-6b04-4f3c-8b73-e552b1e3d72d-b4a1/?fullscreen'target= '_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <p>Web design for Churpy's(Fintech company) dashboard</p>
        
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Booking})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Figma Design
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.figma.com/proto/Etu6CUXz1liTdP0vkpEccn/MICASA-Hotel-Booking-App?node-id=0%3A418&scaling=scale-down&page-id=0%3A1&starting-point-node-id=0%3A418' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                  <p>Hotel booking app design(E-commerce)</p>
                </a>
      
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Churpyweb})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Figma Design
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.figma.com/proto/26MSvEZcRT6UjYj2bxo4v3/Churpy-web-re-vamp?node-id=305%3A7&scaling=min-zoom&page-id=12%3A2'target= '_blank'>

                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                  <p>Churpy website revamp</p>
                </a>
                
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Law})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Figma Design
              </span>
              <div className='pt-8 text-center'>
              <a href='https://www.figma.com/proto/lRwpW7K4tsEIhKG5WvAqzw/High-fi-design?node-id=207%3A497&scaling=scale-down&page-id=201%3A345&starting-point-node-id=207%3A497'target= '_blank'>

                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <p>A tax research web design. It has been designed for tax lawyers who have difficulty accessing tax decesions</p>
          
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
