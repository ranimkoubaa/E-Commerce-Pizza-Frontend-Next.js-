'use client'

/*import React, { useEffect, useState } from 'react';

const Banner = () => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/pizzas'); // Assuming this is the correct endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setData(data);
        setStatus('success');
      } catch (error) {
        console.error('Error fetching data:', error);
        setStatus('error');
      }
    };

    fetchData();

    // Clean up function
    return () => {
      // Any cleanup code if needed
    };
  }, []);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error fetching data</div>;
  }

  return (
    <section className="bg-primary bg-pattern lg:min-h-[768px] pt-16 lg:pt-16">
      <div className="container mx-auto min-h-[768px] flex items-center justify-center">
        
      </div>
    </section>
  );
}

export default Banner;*/
'use client'

import Image from 'next/image'
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from 'react-parallax-mouse'

const Banner = () => {
  return (
    <section className="bg-primary bg-pattern lg:min-h-[768px] pt-16 lg:pt-16">
      <div className="container  mx-auto min-h-[768px] flex items-center justify-center ">
        <MouseParallaxContainer
          globalFactorX={0.4}
          globalFactorY={0.3}
          resetOnLeave
          className="w-full flex flex-col lg:flex-row justify-between items-center px-10 "
        >
          {/* text */}
          <MouseParallaxChild factorX={0.1} factorY={0.2}>
            <div className="flex flex-col lg:flex-row items-center text-center lg:text-left flex-1 px-2 text-white drop-shadow-md  w-[600px] ">
              <div className="flex-1">
                <div className="font-bangers text-[32px] text-white uppercase tracking-[0.03em]">
                  Best pizza in town
                </div>
                <h1 className="text-6xl lg:text-8xl font-bangers text-white">
                  Pizza perfection <br /> in every bite
                </h1>
              </div>
            </div>
          </MouseParallaxChild>
          {/* images */}
          <MouseParallaxChild factorX={0.2} factorY={0.3} className="relative">
            {/* pizza image */}
            <div className="flex flex-col lg:flex-row items-center text-center lg:text-left flex-1 px-6 ">
              <div className="flex-1 flex justify-end max-w-sm lg:max-w-max">
                <Image
                  src={'/pizza-banner.png'}
                  width={550}
                  height={558}
                  alt=""
                  priority={1}
                />
              </div>
            </div>
            {/* chilli image 1 */}
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.3}
              className="absolute top-6 left-4 hidden xl:flex"
            >
              <Image
                src={'/chilli-1.png'}
                width={160}
                height={84}
                alt=""
                priority={1}
              />
            </MouseParallaxChild>
            {/* chilli image 2 */}
            <MouseParallaxChild
              factorX={0.4}
              factorY={0.4}
              className="absolute top-16 -left-4 hidden xl:flex"
            >
              <Image
                src={'/chilli-2.png'}
                width={130}
                height={84}
                alt=""
                priority={1}
              />
            </MouseParallaxChild>
            {/* chilli img 3 */}
            <MouseParallaxChild
              factorX={0.6}
              factorY={0.6}
              className="absolute top-80 -left-24 hidden xl:flex"
            >
              <Image
                src={'/chilli-2.png'}
                width={84}
                height={72}
                alt=""
                priority={1}
              />
            </MouseParallaxChild>
          </MouseParallaxChild>
          {/* garlic 1 */}
          <MouseParallaxChild
            factorX={0.3}
            factorY={0.6}
            className="absolute top-[22rem] left-[41rem] hidden xl:flex"
          >
            <Image
              src={'/garlic-2.png'}
              width={100}
              height={72}
              alt=""
              priority={1}
            />
          </MouseParallaxChild>
          {/* garlic 2 */}
          <MouseParallaxChild
            factorX={0.4}
            factorY={1}
            className="absolute top-96 left-[38rem] hidden xl:flex"
          >
            <Image
              src={'/garlic-3.png'}
              width={100}
              height={72}
              alt=""
              priority={1}
            />
          </MouseParallaxChild>
          {/* leaves */}
          <MouseParallaxChild
            factorX={0.6}
            factorY={0.6}
            className="absolute top-96 left-[47rem] hidden xl:flex"
          >
            <Image
              src={'/leaves.png'}
              width={180}
              height={72}
              alt=""
              priority={1}
            />
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </section>
  )
}

export default Banner
