// app/components/ContactInfo.js
import Icon from "./Icon";

const ContactInfo = ({ icon, title, children }) => (
  <div className="mb-6 flex items-start">
    <div className="text-primary mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center">
      <Icon name={icon} className="ri-lg" />
    </div>
    <div>
      <h4 className="mb-1 font-semibold text-gray-800">{title}</h4>
      <div className="text-gray-600">{children}</div>
    </div>
  </div>
);

export default ContactInfo;
