import React from "react";

function Payment() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center">
      <h1 className="text-5xl font-bold text-red-500 drop-shadow-lg">
        💳 Payment Page
      </h1>
      <p className="text-lg mt-3 text-gray-400">
        This feature is currently under development.
      </p>
      <div className="flex text-4xl font-bold mt-4 space-x-2 animate-pulse">
        <span className="animate-bounce">.</span>
        <span className="animate-bounce delay-150">.</span>
        <span className="animate-bounce delay-300">.</span>
      </div>
    </div>
  );
}

export default Payment;
