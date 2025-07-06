import React from 'react';

type CardProps = {
  title: string;
  content: string;
  button?: { label: string; onClick: () => void };
};

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-lg mx-auto">
        <h2 className="text-xl font-bold mb-1">{title}</h2>
        <p className="text-gray-700 mb-2">{content}</p>
      </div>
    </div>
  );
};

export default Card;