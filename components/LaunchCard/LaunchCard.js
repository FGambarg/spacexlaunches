import React from 'react';

export default function ({
  date,
  missionName,
  rocketName,
  site,
  success,
}) {
  return (
    <div className='p-4 max-w-sm bg-white rounded-xl shadow-lg flex flex-col items-center mb-4 w-1/5 basis-1/5 mx-2'>
      <span>{ missionName }</span>
      <span>{ rocketName }</span>

      <span>{ date }</span>
      <span>{ site }</span>

      <span>{ success }</span>
    </div>
  );
};
