import React from 'react';
import { Entry } from '@merthyr-memories/utils';

interface EntryCardProps {
  entry: Entry;
}

export const EntryCard = ({ entry }: EntryCardProps) => {
  return (
    <div
      key={entry.id}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
    >
      {/* Image Section - Full Width and Proportional */}
      <div className="w-full aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={entry.imageUrl}
          alt={entry.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1">
        {/* Event Name and Date */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900">{entry.name}</h3>
          <p className="text-sm text-gray-500 mt-1">Event Date: {entry.date}</p>
        </div>

        {/* Grid Layout for Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Description */}
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-1">
              Description
            </h4>
            <p className="text-gray-600">{entry.description}</p>
          </div>

          {/* People Involved */}
          <div>
            <h4 className="text-lg font-semibold text-gray-700 mb-1">
              People Involved
            </h4>
            <ul className="list-disc list-inside text-gray-600">
              {entry.people.map((person, index) => (
                <li key={index}>{person}</li>
              ))}
            </ul>
          </div>

          {/* Location Details */}
          <div className="sm:col-span-2">
            <h4 className="text-lg font-semibold text-gray-700 mb-1">
              Location
            </h4>
            <p className="text-gray-600">{entry.location.streetName}</p>
            <p className="text-sm text-gray-500">
              Coordinates: {entry.location.coordinates.lat},{' '}
              {entry.location.coordinates.lon}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryCard;
