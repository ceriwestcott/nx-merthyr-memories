import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LocationsApi } from '@merthyr-memories/api';
import { EntryData } from '@merthyr-memories/utils';
import { LocationHeader, EntryCard } from '@nx-merthyr-memories/ui';
export const LocationSpecificPage = () => {
  const { id } = useParams();
  const [location, setLocation] = useState<EntryData | null>(null);

  useEffect(() => {
    if (id) {
      LocationsApi.getArea(id).then((location) => {
        setLocation(location);
      });
    }
  }, [id]);

  if (!location) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="text-2xl font-semibold text-gray-700 animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <LocationHeader name={location.name} description={location.description} />

      {/* Entries Section */}
      <div className="max-w-4xl mx-auto space-y-8">
        {location.entries.map((entry: any) => (
          <EntryCard entry={entry} />
        ))}
      </div>
    </div>
  );
};

export default LocationSpecificPage;
