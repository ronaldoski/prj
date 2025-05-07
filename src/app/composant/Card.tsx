import React from 'react';

type CardProps = {
  title: string; // Titre de la carte
  content: string; // Contenu de la carte
  button?: { label: string; onClick: () => void };
};

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="flex items-center justify-center min-h-screen flex-1/3">
      <div className="bg-white shadow-md rounded-lg p-4 max-w-sm mx-auto">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{content}</p>
      </div>
    </div>
  );
};

export default Card;