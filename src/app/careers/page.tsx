import React from "react";

const CareersPage = () => {
  return (
    <div>
      <div className="relative h-96">
        {/* <img
          src="/background.png"
          alt="Background"
          className="h-full w-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-400 opacity-75"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Careers</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 font-light lg:px-48">
        <p className="mb-8 px-6  lg:px-32">
          At least, at TheTabTech, we are striving to grab the top professionals
          in the category that we are dealing with and to remain the key expert
          to not only our customers, but also to our team members.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Our Culture</h2>
            <p className="mb-4">
              At TheTabTech, we are dedicated to assembling top-tier
              professionals within our field, ensuring that we remain the
              foremost experts not only for our clients but also for our team
              members. Our culture is intentionally non-hierarchical, fostering
              an environment of accessibility to leadership, abundant
              professional development opportunities, ingrained mentoring, and
              avenues for personal growth and leadership. We prioritize creating
              an exceptional work environment, recognizing that the success of
              our clients is intricately tied to the success of our employees.
              Our approach to employee evaluations is straightforward; in
              determining compensation and advancement, we adhere to two equally
              essential principles: (1) Creating significant value and impact
              for clients; (2) Achieving success through collaboration and
              camaraderie.
            </p>
            <p>
              If you are a problem-solver who thrives on intellectual challenge,
              we invite you to consider theTabTech.
            </p>
            <p className="mt-4">
              To apply please send a copy of your resume to{" "}
              <a
                href="mailto:careers@theTabTech.com"
                className="text-blue-500 underline"
              >
                careers@TheTabTech.com
              </a>
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Current Positions</h2>
            <ul className="list-disc pl-6">
              <li className="mb-2">AWS Cloud Architect</li>
              <li className="mb-2">DevOps Engineer</li>
              <li>Clinical Informatics SME</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
