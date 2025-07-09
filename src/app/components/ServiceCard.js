// app/components/ServiceCard.js
import Icon from "./Icon";

const ServiceCard = ({ icon, title, description, time }) => (
  <div className="rounded bg-white p-8 shadow-md transition-shadow hover:shadow-lg">
    <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
      <Icon name={icon} className="ri-xl text-primary" />
    </div>
    <h3 className="mb-2 text-center text-2xl font-semibold text-gray-800">
      {title}
    </h3>
    <p className="mb-4 text-center text-gray-600">{description}</p>
    <p className="text-primary text-center text-xl font-bold">{time}</p>
  </div>
);

export default ServiceCard;
