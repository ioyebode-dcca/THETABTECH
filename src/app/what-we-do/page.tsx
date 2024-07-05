import React from "react";
import { Cloud, Network, LifeBuoy, UserCheck } from "lucide-react";

const WhatWeDoPage = () => {
  return (
    <div>
      <div className="relative h-96">
        {/* <img
          src="/background-image.jpg"
          alt="Background"
          className="h-full w-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-400 opacity-75"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="text-4xl font-bold">What we do</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 font-light lg:px-48">
        <p className="mb-8   lg:px-32">
          At the forefront of innovation, theTabTech boasts esteemed
          partnerships with leading technology, software, and service providers.
          This strategic positioning enables us to outpace competitors,
          delivering unparalleled solutions tailored to meet diverse business
          objectives. Through collaborative efforts across industries, we offer
          clients ready-made or customized solutions designed to drive success.
          Our longstanding partnerships ensure clients receive steadfast support
          and resources.
        </p>

        <div className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 ">
          <div className="flex w-10/12 flex-col items-center text-center">
            <Network size={48} className="mb-4 text-red-400" />
            <h3 className="mb-2 text-lg font-medium">CIO Advisory Services</h3>
          </div>
          <div className="flex w-10/12 flex-col items-center text-center">
            <Cloud size={48} className="mb-4 text-red-400" />
            <h3 className="mb-2 text-lg font-medium">
              Cloud Computing, DevOps & Automation
            </h3>
          </div>
          <div className="flex w-10/12 flex-col items-center justify-center text-center">
            <LifeBuoy size={48} className="mb-4 text-red-400" />
            <h3 className="mb-2 text-lg font-medium">
              Health IT solutions to improve healthcare quality and safety
            </h3>
          </div>
          <div className="flex w-10/12 flex-col items-center text-center">
            <UserCheck size={48} className="mb-4 text-red-400" />
            <h3 className="mb-2 text-lg font-medium">
              Digital health subject matter expertise and technical support
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoPage;
