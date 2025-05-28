const ShinyText = ({ text, disabled = false, speed = 5, className = "" }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-[#cfcfcf] bg-clip-text inline-block ${
        !disabled && "animate-shine"
      } ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255, 255, 255, 0) 35%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 65%)",
        backgroundSize: "250% 100%",
        WebkitBackgroundClip: "text",
        animationDuration: animationDuration || "1.5s",
        animationTimingFunction: "ease-in-out",
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
