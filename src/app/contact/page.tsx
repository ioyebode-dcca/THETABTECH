import React from "react";

export default function contact() {
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
          <h1 className="text-4xl font-bold">Contact Us</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 font-light lg:px-48">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold">Get in Touch</h2>
          <p className="mb-8 text-lg">
            Have a question or want to discuss a potential project? Feel free to
            reach out to us at the email address below, and we ll be happy to
            assist you.
          </p>
          <p className="mb-4 text-2xl font-bold">
            <a
              href="mailto:info@theTabTech.com"
              className="text-blue-500 underline"
            >
              info@theTabTech.com
            </a>
          </p>
          <p className="text-lg">
            We ll do our best to respond to your inquiry as soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
}
