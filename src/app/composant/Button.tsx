import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      className={`bg-emerald-950 gap-4 text-white rounded-xl px-4 py-2 border-2 border-emerald-950 transition-all duration-200 hover:bg-green-200 hover:text-emerald-950 hover:border-green-500 hover:shadow-lg ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;