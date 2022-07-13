import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full  bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>  
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Kuldeep, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building excellent web applications and programming that improves
              the lives of those around me. I am 3rd year student of National institute of Technology Raipur (India). From past 3 years, i am learning web development i have learnet many thing which i am showing in this protfolio.  </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
