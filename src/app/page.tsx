import { url } from "inspector";
import React from "react";
let  mainBackground=`/hero/new-background.jpg`;
const HeroSection = () => {
  return (
    <>
      <div 
      className="relative h-[85vh]"
       >
        <div className="h-full bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-20"
        style={{ backgroundImage:`url(${mainBackground})`,
        backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center',}}
        >
          <div className="flex h-full items-center justify-left">
            <div className="max-w-max max-w-10xl sm:text-left text-center ">
              <h1 className="mb-5 text-6xl font-bold text-white " >
                <span
                 style={{
                  // backgroundColor:'black',
                  // opacity:'0.85',
                  // padding:'10px 10px',
                  // textAlign:'left',
                  display:'inline-block'}}>
                Pioneering Technology
                </span>
              </h1>
              {/* <p className="mb-9 text-lg font-light text-white  md:w-[60%] lg:w-[45%] xl:w-[40%]"
               style={{backgroundColor:'black',
                    // width:'45%',
                // maxWidth:'950px',
                opacity:'0.8',padding:'10px 15px'}}>
                
                Committed to pushing the boundaries of innovation in the digital
                landscape, we strive to revolutionize industries and empower
                businesses with cutting-edge technological solutions.
              </p> */}
              <button className="rounded-lg bg-black px-6 py-2 text-white transition-colors duration-300 hover:bg-gray-800">
              <a href="https://www.thetabtech.com/who-we-are"> Learn More </a>
              </button>
               
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
