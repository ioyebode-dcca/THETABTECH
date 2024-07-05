import React from "react";

const WhoWeArePage = () => {
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
          <h1 className="text-4xl font-bold">Our Culture</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12  lg:px-48">
        <p className="mb-8 px-6   lg:px-32">
        At TheTabTech, we are dedicated to assembling top-tier professionals within our field,
         ensuring we remain the foremost experts for both our clients and team members. 
         Our culture is intentionally non-hierarchical, fostering an environment of accessible
          leadership, abundant professional development opportunities, ingrained mentoring,
           and pathways for personal growth and leadership.
        
        </p>
        <p  className="mb-8 px-6   lg:px-32">
        We prioritize creating an exceptional work environment, recognizing that our clients’ success 
        is intricately tied to the success of our employees. Our approach to employee evaluations is 
        straightforward; in determining compensation and advancement,
         we adhere to two equally essential principles:
         <br/>
         <br/>
        <ol className="mb-6 px-6   lg:px-19 list-decimal">
          <li>
          Creating significant value and impact for clients. 
          </li>
          <li>
          Achieving success through collaboration and camaraderie.
          </li>
        </ol>
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Israel Oyebode</h2>
            <p>
              Israel is the Founder and CEO of TheTabTech, he is a recognized
              thought leader with extensive experience in delivering high
              performance, cost effective solutions. Israel holds BSc in Cybersecurity
              and Masters in Cloud Computing from University of Maryland Global
              campus.He helps clients actualize their missions through  subject 
              matter expertise, leadership, and quality deliverables.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeArePage;
