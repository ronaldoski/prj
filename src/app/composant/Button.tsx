import React from 'react';

interface ButtonProps {
  label: string; // Texte du bouton
  onClick?: () => void; // Fonction appelée lors du clic
  className?: string; // Classes CSS supplémentaires
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      className={`bg-emerald-950 gap-4 text-white rounded-xl px-4 py-2 hover: bg-green-700${className}`}
      onClick={onClick}
    >
      {label} 
    </button>
  );
};

export default Button;