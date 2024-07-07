import { Carousel } from "flowbite-react";
import ReviewCard from "@/components/reviewCard";

const GuestReviewsCarousel = ({ reviews }) => {
  // Render each review as an individual slide
  const slides = reviews.map((review, index) => (
    <div key={index} className="flex justify-center">
      <div className="max-w-md w-full p-4">
        <ReviewCard {...review} />
      </div>
    </div>
  ));

  return (
    <Carousel
      pauseOnHover
      slideInterval={3000}
      className="content-evenly"
      indicators={false}
      leftControl="&nbsp;"
      rightControl="&nbsp;"
    >
      {slides}
    </Carousel>
  );
};

export default GuestReviewsCarousel;
