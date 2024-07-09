"use client";

import TopBar from "@/components/topbar";
import ServiceCard from "@/components/serviceCard";
import { LuShovel } from "react-icons/lu";
import { FaPersonShelter } from "react-icons/fa6";
import { LuHelpingHand } from "react-icons/lu";
import { IoHomeSharp } from "react-icons/io5";



import { MdOutlineCleaningServices } from "react-icons/md";
import { MdOutlineElectricalServices } from "react-icons/md";
import { MdOutlinePlumbing } from "react-icons/md";
import { FaBabyCarriage } from "react-icons/fa";

const cardData = [
  {
    Icon: FaPersonShelter,
    title: "House Sitting",
    description: "Short description of service and other details",
    price: "30",
  },
  {
    Icon: LuShovel,
    title: "Gardening",
    description: "Short description of service and other details",
    price: "40",
  },
  {
    Icon: MdOutlineCleaningServices,
    title: "Cleaning",
    description: "Short description of service and other details",
    price: "20",
  },
  {
    Icon: MdOutlineElectricalServices,
    title: "Electrician Wiring",
    description: "Short description of service and other details",
    price: "100",
  },
  {
    Icon: MdOutlinePlumbing,
    title: "Plumbing",
    description: "Short description of service and other details",
    price: "120",
  },
  {
    Icon: FaBabyCarriage,
    title: "Baby Sitting",
    description: "Short description of service and other details",
    price: "30",
  },
];

const Services = () => {
  return (
    <>
      <TopBar active="services" />
      <div className="py-6">
        {/* <h2 className="text-center pb-8 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
          OUR SERVICES
        </h2> */}
        <div>
          <h2 className="text-center py-4 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
            GENERAL SERVICES
          </h2>
          <div className="flex gap-4 px-8 justify-center">
            <ServiceCard
              Icon={IoHomeSharp}
              title="Property Portal"
              description={`Looking to buy, sell or rent your property? We can help!\n\nClick here to find out more!`}
              href="#"
            />
            <ServiceCard
              Icon={LuHelpingHand}
              title="Borrowing Items"
              description={`Explore our lending library and discover the joy of borrowing! Share in the community spirit and find something special for your next adventure.`}
            />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center py-6 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
          HOUSEHOLD SERVICES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center px-4 pb-6 justify-items-center">
          {cardData.map((service, index) => (
            <ServiceCard
              key={index}
              Icon={service.Icon}
              imgSrc={service.imgSrc}
              title={service.title}
              description={service.description}
              price={service.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
