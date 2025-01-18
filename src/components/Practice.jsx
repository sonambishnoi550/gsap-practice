import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Practice = () => {
  const codeSnippet = `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maxime beatae et soluta recusandae minus, ratione quis blanditiis ad deleniti voluptatibus animi vitae iusto necessitatibus nisi quidem eos! Ullam similique sint quisquam beatae delectus porro quaerat minus! Cum praesentium neque iure soluta doloribus dignissimos reprehenderit ipsum temporibus dolorum, numquam eveniet illum natus, sunt quibusdam accusamus!`
  useEffect(() => {
    gsap.utils.toArray(".card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100, scale: 0.5 },
        {
          opacity: 1,
          y: 0,
          scale: 1, 
          duration: 2000, 
          ease: 'power3.out',
          stagger: 0.4,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 60%',
            scrub: true,
            markers: false, 
          },
        }
      );
    });
  }, []);

  return (
    <div className='bg-cover bg-img bg-no-repeat bg-center min-h-screen flex justify-center items-center relative'>
      <div className='absolute right-[13%] top-[13%] max-w-[200px] card'>
        <img src="https://drpeppercaprod.wpengine.com/wp-content/uploads/2022/03/image9-300x400-1.jpg" alt='' />
      </div>
      <div className='absolute left-[14%] top-[16%] max-w-[200px] card'>
        <img src="https://drpeppercaprod.wpengine.com/wp-content/uploads/2022/03/image10-300x400-1.jpg" alt='' />
      </div>
      <div className='absolute right-[10%] bottom-[15%] max-w-[200px] card'>
        <img src="https://drpeppercaprod.wpengine.com/wp-content/uploads/2022/03/image5-300x400-1.jpg" alt='' />
      </div>
      <div className='absolute left-[13%] bottom-[10%] max-w-[200px] card'>
        <img src="https://drpeppercaprod.wpengine.com/wp-content/uploads/2022/03/image2-300x400-1.jpg" alt='' />
      </div>
      <div className="container relative z-10 text-center px-6 py-10">
        <h1 className='text-white text-5xl sm:text-7xl font-semibold mb-6'>
          Lorem, ipsum dolor.
        </h1>
          <div className=" w-full max-w-[650px] mx-auto relative text-white">
                <Typewriter
                  words={[codeSnippet]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={25}
                  delaySpeed={3000}
                />
        </div>
        <button className="bg-teal-500 text-white mt-6 py-3 px-6 font-semibold rounded-md shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          Read the docs &rarr;
        </button>
      </div>
    </div>
  );
};

export default Practice;
