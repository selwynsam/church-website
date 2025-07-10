// app/components/FormField.js
"use client";

const FormField = ({
  label,
  type = "text",
  id,
  placeholder,
  rows,
  required = false,
  value,
  onChange,
  error,
}) => (
  <div className="mb-4">
    <label htmlFor={id} className="mb-2 block text-gray-700">
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={id}
        rows={rows}
        className={`focus:border-primary w-full rounded border px-4 py-2 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    ) : (
      <input
        type={type}
        id={id}
        className={`focus:border-primary w-full rounded border px-4 py-2 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    )}
  </div>
);

export default FormField;
