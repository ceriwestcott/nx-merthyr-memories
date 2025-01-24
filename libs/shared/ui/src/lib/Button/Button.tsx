import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ label, onClick, disabled, variant }: ButtonProps) => {
  const baseClasses = 'px-4 py-2 rounded-md';
  const variantClasses =
    variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-white';
  return (
    <button
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
