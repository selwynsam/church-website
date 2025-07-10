// app/components/ServiceCard.js
import Icon from "./Icon";

const ServiceCard = ({ icon, title, description, time }) => (
  <div className="rounded bg-white p-8 shadow-md transition-shadow hover:shadow-lg">
    <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
      <Icon name={icon} className="ri-xl text-primary" />
    </div>
    <h3 className="mb-2 text-center text-xl font-semibold text-gray-800 md:text-2xl">
      {title}
    </h3>
    <p className="mb-4 text-center text-sm text-gray-600 md:text-base">
      {description}
    </p>
    <p className="text-primary text-center text-lg font-bold md:text-xl">
      {time}
    </p>
  </div>
);

export default ServiceCard;
