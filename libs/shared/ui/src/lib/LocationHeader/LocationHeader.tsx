import React from 'react';
import { LocationHeaderProps } from './LocationHeaderProps';

export const LocationHeader = ({ name, description }: LocationHeaderProps) => {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{name}</h1>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  );
};
