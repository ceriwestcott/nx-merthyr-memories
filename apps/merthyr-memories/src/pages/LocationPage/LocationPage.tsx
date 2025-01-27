import React, { useEffect, useState } from 'react';
import { LocationCard } from '@nx-merthyr-memories/ui';
import { LocationsApi } from '@merthyr-memories/api';
import { Location } from '@merthyr-memories/utils';
import { useNavigate } from 'react-router-dom';
export function LocationPage() {
  const [locations, setLocations] = useState<Location[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    LocationsApi.getAll().then((locations) => {
      setLocations(locations);
      console.log(locations);
    });
  }, []);

  const handleLocationClick = (id: string) => {
    console.log(id);
    navigate(`/location/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Areas of Merthyr Tydfil
        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore the historic neighborhoods and distinctive areas of our town
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {locations.map((location) => (
          <LocationCard
            key={location._id}
            location={location}
            onClick={() => handleLocationClick(location.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default LocationPage;
