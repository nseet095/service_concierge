const ItemCard = ({ Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center pb-2">
      <Icon size={100} className="text-gray-400 dark:text-gray-800" />
      <p className="pt-3 text-center font-medium text-gray-800 dark:text-gray-400">
        {title}
      </p>
      <i className="text-center font-extralight text-gray-700 dark:text-gray-500">
        {description}
      </i>
    </div>
  );
};

export default ItemCard;
