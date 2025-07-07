import React from "react";


export default function Page() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="flex flex-col items-center">
        <h1 className="text-7xl font-extrabold text-blue-800 mb-2 transition-all duration-700 animate-fade-in">
          Portfolio
        </h1>
        <span className="text-xl text-blue-600 font-light tracking-wide animate-fade-in-slow">
          Bilal Drabo
        </span>
      </div>
    </main>
  );
}