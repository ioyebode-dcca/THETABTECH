import React from "react";

const CultureAndVisionPage = () => {
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
          <h1 className="text-4xl font-bold">Culture & Vision</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 font-light lg:px-48">
        {/* <p className="mb-8 px-6 text-xl font-extralight lg:px-32">
          theTabTech, derived from the Latin word consiliarum, means trusted
          advisor; a core value that is central to our business model.
        </p> */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Our Vision</h2>
            <p className="mb-4">
              At the core of our mission, we aspire to emerge as the premier
              provider of trusted technology services within our network, driven
              by collaboration and forward-thinking innovation. Our aim extends
              beyond meeting expectations; we strive to exceed them, fostering a
              culture of excellence that fuels success.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Our Core Values</h2>
            <ul className="list-disc pl-6">
              <li className="mb-2">
                Delivering tangible value and transformative outcomes for our
                clients.
              </li>
              <li className="mb-2">
                Pursuing meaningful innovation, crafting solutions that redefine
                industry standards.
              </li>
              <li className="mb-2">
                Cultivating success through collaborative teamwork and mutual
                support.
              </li>
              <li>
                Embracing a culture of perpetual learning, where every challenge
                is an opportunity for growth and development.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultureAndVisionPage;
