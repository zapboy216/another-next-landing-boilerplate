// src/components/SimpleComponent.tsx

import React from 'react';

const SimpleComponent = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="mt-10 text-center text-4xl font-bold">Hello World</h1>
      <p className="mt-4 text-center">
        This is a simple component for testing scrolling.
      </p>
      <div className="mt-10 h-screen bg-blue-200">Additional Content</div>
    </div>
  );
};

export default SimpleComponent;
