import { MapPin } from 'lucide-react';
import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'error';
  icon?: React.ReactNode;
}

export const Button = ({
  label,
  onClick,
  disabled,
  variant,
  icon,
}: ButtonProps) => {
  const baseClasses =
    'px-8 py-3 rounded-md rounded-lg font-semibold items-center justify-center';
  const variantClasses =
    variant === 'primary'
      ? 'bg-blue-600 text-white'
      : 'bg-white text-gray-800 hover:bg-gray-100';
  return (
    <button
      className={`${baseClasses} ${variantClasses} hover:bg-blue-700 transition-colors inline-flex items-center justify-center`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {label}
    </button>
  );
};
