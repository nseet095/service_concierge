import { Card } from "flowbite-react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"; // Example for star icons
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ name, rating, review }) => {
  return (
    <Card className="p-4 shadow-lg rounded-lg border border-gray-200 dark:border-gray-800 h-full flex flex-col justify-start">
      <div className="flex items-center mb-2 pr-4 gap-4">
        <div className="flex flex-col justify-center w-full">
          <div className="text-2xl text-gray-400 mr-2">
            <FaQuoteLeft />
          </div>
          <div className="flex items-center mb-2">
            <div className="text-xl mr-2 text-yellow-500">
              {rating >= 1 ? (
                <BsStarFill />
              ) : rating >= 0.5 ? (
                <BsStarHalf />
              ) : (
                <BsStar />
              )}
            </div>
            <div className="text-xl mr-2 text-yellow-500">
              {rating >= 2 ? (
                <BsStarFill />
              ) : rating >= 1.5 ? (
                <BsStarHalf />
              ) : (
                <BsStar />
              )}
            </div>
            <div className="text-xl mr-2 text-yellow-500">
              {rating >= 3 ? (
                <BsStarFill />
              ) : rating >= 2.5 ? (
                <BsStarHalf />
              ) : (
                <BsStar />
              )}
            </div>
            <div className="text-xl mr-2 text-yellow-500">
              {rating >= 4 ? (
                <BsStarFill />
              ) : rating >= 3.5 ? (
                <BsStarHalf />
              ) : (
                <BsStar />
              )}
            </div>
            <div className="text-xl mr-2 text-yellow-500">
              {rating >= 5 ? (
                <BsStarFill />
              ) : rating >= 4.5 ? (
                <BsStarHalf />
              ) : (
                <BsStar />
              )}
            </div>
          </div>
          <p className="text-gray-800 dark:text-gray-200 font-semibold mb-2">
            {name}
          </p>
          <p className="text-gray-700 dark:text-gray-300">{review}</p>
        </div>
      </div>
    </Card>
  );
};

export default ReviewCard;
