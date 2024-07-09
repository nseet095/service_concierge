import { Card } from 'flowbite-react'; // Assuming Card component is imported from flowbite-react
import Image from 'next/image'; // Assuming you are using Next.js Image component for images

const DevelopmentCard = ({ devInfo }) => {
  const { devName, imgSrc, addrOne, addrTwo } = devInfo;

  return (
    <Card className="max-w-sm h-1*100 flex flex-col justify-end">
      <div className="flex-grow flex justify-center items-center overflow-hidden">
        <Image src={imgSrc} alt={devName} width={200} height={200} className='object-cover'/>
      </div>
      <div className="p-4">
        <h5 className="pt-4 text-xl font-normal tracking-tight text-gray-900 dark:text-white">
          Only @ {devName}
        </h5>
        <p className="text-base font-light tracking-tight text-gray-900 dark:text-white">
          {addrOne}
        </p>
        <p className="text-base font-light tracking-tight text-gray-900 dark:text-white">
          {addrTwo}
        </p>
      </div>
    </Card>
  );
};

export default DevelopmentCard;