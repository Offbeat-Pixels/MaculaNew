import React from "react";
import { styles } from "../../style";

const Career = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="bg-[#ffffff] text-black py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-center pt-5 ${styles.sectionHeadText}`}>
            Join Our Team
          </h1>
          <p className="text-lg">
            Be a part of a team that values innovation, collaboration, and
            growth.
          </p>
        </div>
      </header>

      {/* Open Positions Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Open Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Job Card Example */}
          {[
            {
              title: "Frontend Developer",
              location: "Remote",
              type: "Full-Time",
            },
            {
              title: "Backend Developer",
              location: "New York, USA",
              type: "Part-Time",
            },
            {
              title: "UI/UX Designer",
              location: "San Francisco, USA",
              type: "Full-Time",
            },
          ].map((job, index) => (
            <div
              key={index}
              className="bg-white shadow-lg stroke-slate-200 border rounded-lg p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-600">{job.location}</p>
              <p className="text-gray-600">{job.type}</p>
              <button className="mt-4 bg-[#8dbc50] text-white font-bold px-4 py-2 rounded-lg hover:bg-[#638834]">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Innovative Culture",
                description:
                  "Work with cutting-edge technologies and creative minds.",
              },
              {
                title: "Flexible Environment",
                description:
                  "Enjoy work-life balance with our remote-friendly policies.",
              },
              {
                title: "Career Growth",
                description: "Access resources to grow your career and skills.",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="bg-gray-100 text-black py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
          <p>
            Contact us at{" "}
            <a href="mailto:careers@example.com" className="underline">
              careers@example.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Career;
