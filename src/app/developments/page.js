import { lato } from "../fonts";

import TopBar from "@/components/topbar";
import DevelopmentCard from "@/components/developmentCard";

const devList = [
  {
    imgSrc: "/developments/the_interlace.jpg",
    devName: "The Interlace",
    addrOne: "The Interlace",
    addrTwo: "180 Depot Road, Singapore 109684"
  },
  {
    imgSrc: "/developments/the_sail.jpg",
    devName: "The Sail",
    addrOne: "The Sail",
    addrTwo: "Marina Boulevard, Singapore 018985"
  },
  {
    imgSrc: "/developments/mandarin_gardens.jpg",
    devName: "Mandarin Gardens",
    addrOne: "Mandarin Gardens",
    addrTwo: "5 Siglap Rd, Singapore 448908"
  },
  {
    imgSrc: "/developments/dleedon.jpg",
    devName: "D'Leedon",
    addrOne: "D'Leedon",
    addrTwo: "7 Leedon Heights, Singapore 267953"
  },
  {
    imgSrc: "/developments/the_interlace.jpg",
    devName: "The Interlace",
    addrOne: "The Interlace",
    addrTwo: "180 Depot Road, Singapore 109684"
  },
  {
    imgSrc: "/developments/the_sail.jpg",
    devName: "The Sail",
    addrOne: "The Sail",
    addrTwo: "Marina Boulevard, Singapore 018985"
  },
  {
    imgSrc: "/developments/mandarin_gardens.jpg",
    devName: "Mandarin Gardens",
    addrOne: "Mandarin Gardens",
    addrTwo: "5 Siglap Rd, Singapore 448908"
  },
  {
    imgSrc: "/developments/dleedon.jpg",
    devName: "D'Leedon",
    addrOne: "D'Leedon",
    addrTwo: "7 Leedon Heights, Singapore 267953"
  },
  {
    imgSrc: "/developments/the_interlace.jpg",
    devName: "The Interlace",
    addrOne: "The Interlace",
    addrTwo: "180 Depot Road, Singapore 109684"
  },
  {
    imgSrc: "/developments/the_sail.jpg",
    devName: "The Sail",
    addrOne: "The Sail",
    addrTwo: "Marina Boulevard, Singapore 018985"
  },
  {
    imgSrc: "/developments/mandarin_gardens.jpg",
    devName: "Mandarin Gardens",
    addrOne: "Mandarin Gardens",
    addrTwo: "5 Siglap Rd, Singapore 448908"
  },
  {
    imgSrc: "/developments/dleedon.jpg",
    devName: "D'Leedon",
    addrOne: "D'Leedon",
    addrTwo: "7 Leedon Heights, Singapore 267953"
  },
  {
    imgSrc: "/developments/the_interlace.jpg",
    devName: "The Interlace",
    addrOne: "The Interlace",
    addrTwo: "180 Depot Road, Singapore 109684"
  },
  {
    imgSrc: "/developments/the_sail.jpg",
    devName: "The Sail",
    addrOne: "The Sail",
    addrTwo: "Marina Boulevard, Singapore 018985"
  },
  {
    imgSrc: "/developments/mandarin_gardens.jpg",
    devName: "Mandarin Gardens",
    addrOne: "Mandarin Gardens",
    addrTwo: "5 Siglap Rd, Singapore 448908"
  },
  {
    imgSrc: "/developments/dleedon.jpg",
    devName: "D'Leedon",
    addrOne: "D'Leedon",
    addrTwo: "7 Leedon Heights, Singapore 267953"
  },
]

const Developments = () => {
  return (
    <>
    <TopBar active="developments" />
    <h2 className={`${lato.className} text-center py-4 text-4xl font-medium tracking-tight text-gray-900 dark:text-white`}>
            DEVELOPMENTS
          </h2>

    <div className="flex flex-wrap justify-center gap-4 py-6">
    {devList.map((location, index) => (
        <DevelopmentCard key={index} devInfo={location} />
    ))}
    </div>
    </>
  );
};

export default Developments