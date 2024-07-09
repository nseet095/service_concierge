"use client";

import { useState } from "react";

import { LuShovel } from "react-icons/lu";
import { FaPersonShelter } from "react-icons/fa6";
import { LuHelpingHand } from "react-icons/lu";
import { IoHomeSharp } from "react-icons/io5";
import { MdCable, MdOutlinePlumbing, MdOutlineCleaningServices, MdOutlineElectricalServices, MdOutlineIron } from "react-icons/md";
import { FaBabyCarriage } from "react-icons/fa";
import { BsLadder } from "react-icons/bs";
import { GiBatteries, GiGardeningShears } from "react-icons/gi";
import { PiSprayBottle } from "react-icons/pi";

import { Modal } from "flowbite-react";

import { lato } from "../fonts";
import TopBar from "@/components/topbar";
import ServiceCard from "@/components/serviceCard";

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

const borrowItems = [
  {
    Icon: BsLadder,
    title: "Ladder",
    description: "Short description of service and other details",
  },
  {
    Icon: MdOutlineIron,
    title: "Ladder",
    description: "Short description of service and other details",
  },
  {
    Icon: GiGardeningShears,
    title: "Gardening Tools",
    description: "Short description of service and other details",
  },
  {
    Icon: PiSprayBottle,
    title: "Cleaning supplies",
    description: "Short description of service and other details",
  },
  {
    Icon: MdCable,
    title: "Charging Cables",
    description: "Short description of service and other details",
  },
  {
    Icon: GiBatteries,
    title: "Batteries",
    description: "Short description of service and other details",
  },
]


const Services = () => {
  const [openModal, setOpenModal] = useState(false);

  const modalPopup = (event) => {
    event.preventDefault();
    setOpenModal(true);
  };

  return (
    <>
      <TopBar active="community" />
      <Modal show={openModal} onClose={() => setOpenModal(false)} size="7xl">
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div className="flex flex-row gap-4 flex-wrap w-full justify-center">
            {borrowItems.map((item, index) => (
              <ServiceCard key={index}
              Icon={item.Icon}
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.description}
              />
            ))}
          </div>
        </Modal.Body>
      </Modal>

      <div className="py-6">
        {/* <h2 className="text-center pb-8 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
          OUR SERVICES
        </h2> */}
        <div>
          <h2 className={`${lato.className} text-center py-4 text-4xl font-medium tracking-tight text-gray-900 dark:text-white`}>
            GENERAL SERVICES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center px-4 pb-6 justify-items-center">
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
              href="#"
              onClick={modalPopup}
            />
          </div>
        </div>
      </div>
      <div>
        <h2 className={`${lato.className} text-center py-6 text-4xl font-medium tracking-tight text-gray-900 dark:text-white`}>
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
