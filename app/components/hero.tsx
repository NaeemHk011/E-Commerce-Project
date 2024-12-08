import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section>
      <div className="px-8 py-12">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="w-full md:w-[60%] h-auto md:h-[580px] bg-[#2A254B] text-white px-4 md:px-12 py-6 md:py-12 flex flex-col justify-between">
            <div>
              <h1 className="text-xl md:text-3xl md:text-left font-semibold leading-tight">
                The furniture brand for the future with <br /> the timeless designs
              </h1>
              <div className="flex justify-center md:justify-start mt-6">
                <button className="w-[170px] h-[56px] bg-transparent text-white border border-gray-600 font-bold">
                  View collection
                </button>
              </div>
            </div>
            <div className="my-4 md:my-0">
              <p className="text-sm md:text-base md:text-left">
                A new era in eco-friendly furniture with Avion, the French luxury retail brand with...
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[40%] h-auto md:h-[580px] mt-8 md:mt-0">
            <Image
              src={'/images/chair.png'}
              alt="Furniture Image"
              layout="responsive"
              objectFit="cover"
              width={600}
              height={590}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
