"use client"

import { useState } from "react";
import { Carousel } from "flowbite-react";

const carouselStyle = {
  root: {
    base: "relative h-full w-full",
    leftControl:
      "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl:
      "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
  },
  indicators: {
    active: {
      off: "bg-gray-600 hover:bg-gray-400 dark:bg-gray-400 dark:hover:bg-gray-500",
      on: "bg-gray-300 dark:bg-gray-700",
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  item: {
    base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: {
      off: "w-full flex-shrink-0 transform cursor-default snap-center",
      on: "w-full flex-shrink-0 transform cursor-grab snap-center",
    },
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-800/30 dark:group-hover:bg-white/50 dark:group-focus:outline-none dark:group-focus:ring-4 group-focus:ring-white dark:bg-white/30 group-hover:bg-gray-800/60 group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-gray-800 dark:text-white sm:h-6 sm:w-6",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
    snap: "snap-x",
  },
};

const LocationCarousel = ({ locations }) => {
  const [openModal, setOpenModal] = useState(false);
  
  return (
    <Carousel
      slide={false}
      theme={carouselStyle}
    >
      {locations.map((location, index) => {
        return (
          <div
            key={index}
            className="flex-1 h-full items-center justify-center "
          >
            <img
              alt={location.devName}
              src={location.imgSrc}
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                minWidth:"50%",
                width: "auto",
                height: "70%",
              }}
            />
            <a href="/" onClick={(event) => {
              event.preventDefault();
              console.log('hello');
            }}>
              <h5 className="px-28 pt-4 text-xl font-normal tracking-tight text-gray-900 dark:text-white">
                Only @ {location.devName}
              </h5>
              <div className="px-28">
              <i className="text-center text-base font-light tracking-tight text-gray-900 dark:text-white">
                {location.addrOne}
              </i>
              </div>
              <div className="px-28">
              <i className="text-center text-base font-light tracking-tight text-gray-900 dark:text-white">
                {location.addrTwo}
              </i>
              </div>
            </a>
          </div>
        );
      })}
    </Carousel>
  );
};

export default LocationCarousel;
