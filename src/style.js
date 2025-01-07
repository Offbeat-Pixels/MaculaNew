const styles = {
  paddingX: "sm:px-16 px-6", // Large screens: 16px padding; Small screens: 6px padding
  paddingY: "sm:py-16 py-6", // Large screens: 16px padding; Small screens: 6px padding
  padding: "sm:px-16 px-6 sm:py-16 py-10", // Combined padding for both axes

  BannerHeadText:
    "font-normal text-[#67883B] lg:text-[9rem] md:text-[6rem] sm:text-[4rem] xs:text-[3rem] lg:leading-[0.8em] leading-[1em]", // Fixed text sizes and leading

  BannerSubText:
    "font-normal text-[#000000] lg:text-[2rem] md:text-[1.75rem] sm:text-[1.5rem] xs:text-[1rem] lg:leading-[1em] leading-[1.2em]", // Fixed text size units and added fallback leading

  sectionHeadText:
    "text-[#000000] lg:text-[3rem] md:text-[3rem] sm:text-[2.5rem] text-[2rem] lg:leading-[1.2em] leading-[1.5em]", // Improved readability for all screen sizes

  sectionSubText:
    "sm:text-[18px] text-[1rem] text-secondary uppercase tracking-wider", // Retained the original format with improved clarity

  PageSubHeading:
    "font-normal text-[#67883B] lg:text-[4rem] md:text-[3rem] sm:text-[2.5rem] xs:text-[2rem] lg:leading-[1em] leading-[1.2em]", // Consistent text sizes and leading
};

export { styles };
