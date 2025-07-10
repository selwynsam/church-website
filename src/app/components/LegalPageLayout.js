// app/components/LegalPageLayout.js
import React from "react";

const LegalPageLayout = ({ title, children }) => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
            {title}
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPageLayout;
