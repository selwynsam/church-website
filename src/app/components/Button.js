// app/components/Button.js
"use client";

const Button = ({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
  target = "_self",
}) => {
  const baseClasses =
    "font-medium px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center";
  const variants = {
    primary: "bg-primary hover:bg-primary/90 text-white",
    secondary: "bg-white border border-gray-300 hover:bg-gray-50 text-gray-700",
  };
  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
