// app/components/Icon.js
const Icon = ({ name, className = "" }) => (
  <i className={`ri-${name} ${className}`}></i>
);

export default Icon;
