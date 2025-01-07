import React from "react";
import { ArrowUpRight } from "lucide-react";
import { whyImg } from "../../assets";
import { styles } from "../../style";
import { Transition } from "../ui/Transition";

function About() {
  return (
    <section className="px-4 md:px-14 bg-why-pattern bg-cover bg-no-repeat bg-center">
      <h3
        className={`${styles.sectionHeadText} text-center pt-5 motion-preset-slide-down-lg motion-duration-1000 motion-delay-300`}
      >
        About Us
      </h3>
      <div className="grid md:grid-cols-2 gap-6 items-center py-10">
        {/* Left side - Image */}
        <div className="relative">
          <div className="aspect-square max-w-full md:max-w-2xl mx-auto">
            <img
              src={whyImg}
              alt="Macula Consulting"
              className="object-cover w-full h-auto rounded-lg "
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="space-y-6 px-4 md:px-0">
          <h2 className="text-3xl md:text-4xl text-gray-900 font-semibold">
            Vision & <span className="text-[#588157] italic">Mission</span>
          </h2>

          <p className="text-gray-600 leading-relaxed md:pr-14 text-justify motion-preset-slide-up-lg">
            We specialize in providing practical advice and hands-on support to
            businesses like yours. Our team has years of experience in various
            industries and brings together skills in strategy, operations,
            finance, and more. We believe that every business has the potential
            to thrive with the right tools and guidance.
            We specialize in providing practical advice and hands-on support to
            businesses like yours. Our team has years of experience in various
            industries and brings together skills in strategy, operations,
            finance, and more. We believe that every business has the potential
            to thrive with the right tools and guidance.
            We specialize in providing practical advice and hands-on support to
            businesses like yours. Our team has years of experience in various
            industries and brings together skills in strategy, operations,
            finance, and more. We believe that every business has the potential
            to thrive with the right tools and guidance.
            We specialize in providing practical advice and hands-on support to
            businesses like yours. Our team has years of experience in various
            industries and brings together skills in strategy, operations,
            finance, and more. We believe that every business has the potential
            to thrive with the right tools and guidance.
            We specialize in providing practical advice and hands-on support to
            businesses like yours. Our team has years of experience in various
            industries and brings together skills in strategy, operations,
            finance, and more. We believe that every business has the potential
            to thrive with the right tools and guidance.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Transition(About);
