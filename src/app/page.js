"use client"

import Image from "next/image";
import { Carousel } from "flowbite-react";
import { Card } from "flowbite-react";

import { GiVacuumCleaner, GiCroissant } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { FaPersonShelter } from "react-icons/fa6";
import { LuHelpingHand } from "react-icons/lu";

import TopBar from "@/components/topbar";
import Title from "@/components/title";
import ItemCard from "@/components/itemCard";
import GuestReviewsCarousel from "@/components/reviewCarousel";

const sampleReviews = [
  {
    name: "John Doe",
    rating: 4.5,
    review:
      "Great experience! The service was excellent and staff was very friendly.",
  },
  {
    name: "Jane Smith",
    rating: 5,
    review:
      "Absolutely fantastic! I would highly recommend this place to anyone.",
  },
  {
    name: "Joshua Tan",
    rating: 3.5,
    review:
      "Acceptable service. Slow to respond though.",
  },
  {
    name: "Johnathan Doe",
    rating: 4,
    review:
      "Good experience! Helpful staff.",
  },
  {
    name: "Joanne Lim",
    rating: 4,
    review:
      "Absolutely fantastic! I would highly recommend this place to anyone.",
  },
  {
    name: "Sally Tan",
    rating: 3.5,
    review:
      "Good.",
  },
];

const Home = () => {
  return (
    <>
      <TopBar active="home" />
      <div className="relative text-center">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel
            pauseOnHover
            slideInterval={3000}
            indicators={false}
            leftControl="&nbsp;"
            rightControl="&nbsp;"
          >
            <Image
              className="blur-sm hover:blur-none"
              src="/carousel/1.jpg"
              alt="placeholder 1"
              width={800}
              height={800}
            />
            <Image
              className="blur-sm hover:blur-none"
              src="/carousel/2.jpg"
              alt="placeholder 2"
              width={800}
              height={800}
            />
          </Carousel>
        </div>
        <Title title="Only @" subtitle="Some witty quote" />
      </div>
      <div className="py-6">
        <h5 className="text-center pb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          OUR SERVICES
        </h5>
        <div className="py-3 px-5">
          <div className="grid-cols-3 justify-center sm:grid-cols-1 md:flex">
            <div className="max-w-xs mx-auto">
              <ItemCard
                Icon={GiVacuumCleaner}
                title="Cleaning"
                description="Short description of service here. Some additional details as well."
              />
              <ItemCard
                Icon={GiCroissant}
                title="Breakfast"
                description="Short description of service here. Some additional details as well."
              />
            </div>
            <div className="max-w-xs mx-auto">
              <ItemCard
                Icon={FaTools}
                title="Repairs"
                description="Short description of service here. Some additional details as well."
              />
              <ItemCard
                Icon={IoHomeSharp}
                title="Real Estate Sales"
                description="Short description of service here. Some additional details as well."
              />
            </div>
            <div className="max-w-xs mx-auto">
              <ItemCard
                Icon={FaPersonShelter}
                title="House Sitting Services"
                description="Short description of service here. Some additional details as well."
              />
              <ItemCard
                Icon={LuHelpingHand}
                title="Borrowing Items"
                description="Short description of service here. Some additional details as well."
              />
            </div>
          </div>
        </div>
        <div className="py-6">
          <h5 className="text-center pb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            GUEST REVIEWS
          </h5>
          {/* <div className="h-2/5 sm:h-64 xl:h-80 2xl:h-96"> */}
          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 max-w-4xl mx-auto">
            <GuestReviewsCarousel reviews={sampleReviews} />
          </div>
        </div>
        <div className="py-6">
        <h5 className="text-center pb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            OUR LOCATIONS
          </h5>
        </div>
      </div>
    </>
  );
};

export default Home;
