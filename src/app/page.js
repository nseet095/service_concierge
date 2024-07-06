import Image from "next/image";
import { Carousel, Card } from "flowbite-react";
import TopBar from "@/components/topbar";
import Title from "@/components/title";

const Home = () => {
  return (
    <>
      <TopBar active="home" />
      <div className="relative h-2/3 sm:h-64 xl:h-80 2xl:h-96 min-h-8">
        <Carousel
          pauseOnHover
          slideInterval={3000}
          className=""
        >
        {/* TODO: Change to use nextjs Image element */}
          <img className="blur-sm hover:blur-none" src="/carousel/1.jpg" alt="placeholder 1" />
          <img className="blur-sm hover:blur-none" src="/carousel/2.jpg" alt="placeholder 2" />
        </Carousel>
        <Title title="Service Concierge" subtitle="Some witty quote" />
      </div>
      <article className="flex flex-col justify-center items-center text-center bg-inherit">
        <h2 className="text-4xl font-extrabold text-black dark:text-white">OUR SERVICES</h2>
       
      </article>
    </>
  );
};

export default Home
