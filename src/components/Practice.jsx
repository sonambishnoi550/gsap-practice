import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Practice = () => {
  const codeSnippet = `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maxime beatae et soluta recusandae minus, ratione quis blanditiis ad deleniti voluptatibus animi vitae iusto necessitatibus nisi quidem eos! Ullam similique sint quisquam beatae delectus porro quaerat minus! Cum praesentium neque iure soluta doloribus dignissimos reprehenderit ipsum temporibus dolorum, numquam eveniet illum natus, sunt quibusdam accusamus!`

  useEffect(() => {
    gsap.fromTo(
      ".card-one",
      { opacity: 0, y: 100, scale: 0.5, rotate: -10 },
      { opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ".card-one",
          start: 'top 80%',
          end: 'top 60%',
          scrub: true,
          markers: false,
        }, });
    gsap.fromTo(
      ".card-two",
      { opacity: 0, x: -100, scale: 0.5, rotate: 10 },
      { opacity: 1,
        x: 0,
        scale: 1,
        rotate: 0,
        duration: 2.7,
        delay: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: ".card-two",
          start: 'top 80%',
          end: 'top 60%',
          scrub: true,
          markers: false,
        },});
    gsap.fromTo(
      ".card-three",
      { opacity: 0, y: 100, scale: 0.5, rotate: 15 },
      { opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 3.3,
        delay:1.5,
        ease: 'elastic.out(1, 0.75)',
        scrollTrigger: {
          trigger: ".card-three",
          start: 'top 80%',
          end: 'top 60%',
          scrub: true,
          markers: false,
        },});
    gsap.fromTo(
      ".card-four",
      { opacity: 0, x: 100, scale: 0.5, rotate: -15 },
      { opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 3.6,
        delay: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ".card-four",
          start: 'top 80%',
          end: 'top 60%',
          scrub: true,
          markers: false,
        },});
  }, []);

  return (
    <div className='bg-cover bg-img bg-no-repeat bg-center min-h-screen flex justify-center items-center relative'>
      <div className='absolute md:right-[13%] md:top-[13%] top-[2%] right-[2%] md:max-w-[200px] max-w-[100px] card-one'>
        <img src="https://drpeppercaprod.wpengine.com/wp-content/uploads/2022/03/image9-300x400-1.jpg" alt='card-one' />
      </div>
      <div className='absolute md:left-[14%] left-[10%] md:top-[16%] top-[2%] md:max-w-[200px] max-w-[100px] card-two'>
        <img src="https://drpeppercaprod.wpengine.com/wp-content/uploads/2022/03/image10-300x400-1.jpg" alt='card-two' />
      </div>
      <div className='absolute right-[10%] xl:bottom-[15%] md:bottom-[1%] bottom-[3%] md:max-w-[200px] max-w-[100px] card-three'>
        <img src="https://drpeppercaprod.wpengine.com/wp-content/uploads/2022/03/image5-300x400-1.jpg" alt='card-three' />
      </div>
      <div className='absolute left-[10%] xl:bottom-[15%] md:bottom-[1%] bottom-[3%] md:max-w-[200px] max-w-[100px] card-four'>
        <img src="https://drpeppercaprod.wpengine.com/wp-content/uploads/2022/03/image2-300x400-1.jpg" alt='card-four' />
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
          Read the docs &rarr; </button>
      </div>
    </div>
  );
};

export default Practice;
