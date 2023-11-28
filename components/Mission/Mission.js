import React from 'react';

export default ({
    mission_name,
    mission_id,
    manufacturers,
    payload_ids,
    wikipedia,
    website,
    twitter,
    description
}) => {
  

  return (
    <div
      className='p-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-x-4'
    >
      <span>Mission name</span>
      <span>Rocket name</span>

      <span>Launch date</span>
      <span>Launch site</span>

      <span>Success or not</span>

    </div>
  );
};
