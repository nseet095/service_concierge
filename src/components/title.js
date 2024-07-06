"use client";

const Title = ({ title, subtitle }) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 pointer-events-none">
      <h2 className="drop-shadow-md text-4xl sm:text-3xl xl:text-6xl 2xl:text-8xl min-h-1 font-bold">
        {title}
      </h2>
      <p className="drop-shadow-sm mt-2 text-2xl sm:text-xl xl:text-3xl 2xl:text-4xl min-h-1">
        {subtitle}
      </p>
    </div>
  );
};

export default Title;
