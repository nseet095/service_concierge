import { Card } from "flowbite-react";

const ServiceCard = ({ imgSrc, Icon, title, description, price, href }) => {
  console.log(Icon);
  return (
    <Card className="max-w-sm" href={href ? href : undefined} imgSrc={imgSrc ? imgSrc : undefined}>
    {Icon && <Icon size={200} className="text-gray-400 dark:text-gray-400 self-center py-2"/>}
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      {description.split("\n").map((line, key) => (
        <i
          key={key}
          className="font-normal text-gray-400 dark:text-gray-400"
        >
          {line}
        </i>
      ))}
      {price && <p className="font-normal text-gray-400 dark:text-gray-400">${price}</p>}
    </Card>
    
  );
};

export default ServiceCard;
