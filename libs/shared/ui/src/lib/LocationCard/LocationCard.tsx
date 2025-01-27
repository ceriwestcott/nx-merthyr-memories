import React from 'react';
import { Location } from '@merthyr-memories/utils';

export const LocationCard = ({
  location,
  onClick,
}: {
  location: Location;
  onClick: (id: string) => void;
}) => (
  <div
    onClick={() => onClick(location.id)}
    className="group relative h-64 rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
  >
    {/* Background Image */}
    <img
      src={location.imageUrl}
      alt={location.name}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

    {/* Content */}
    <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
      <div>
        <h2 className="text-2xl font-bold mb-2 transform group-hover:translate-y-2 transition-transform">
          {location.name}
        </h2>
        <div className="w-12 h-1 bg-white rounded-full transform transition-all duration-300 group-hover:w-16"></div>
      </div>
      <div className="flex items-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Click to explore
        <svg
          className="w-4 h-4 ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    </div>
  </div>
);

export default LocationCard;
