import { Card } from "flowbite-react";
import TopBar from "@/components/topbar";
import { lato } from "../fonts";

const AboutPage = () => {
  return (
    <>
      <TopBar active="about" />
      <div className="py-6 flex-auto w-11/12 mx-auto">
        <Card className="w-80 md:w-full mx-auto">
          <h5 className={`${lato.className} text-center text-2xl font-normal tracking-tight text-gray-900 dark:text-white`}>
            ABOUT US
          </h5>
          <p className="text-center font-normal text-gray-700 dark:text-gray-400">
            Only @ is dedicated to providing comprehensive real estate
            management services tailored to meet the unique needs of each
            property.
            <br />
            <br />
            Our team is committed to ensuring the highest standards of care and
            maintenance for all properties under our management.
          </p>
        </Card>
      </div>
    </>
  );
};

export default AboutPage