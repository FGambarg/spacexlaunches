import React from 'react';

export default ({
  date,
  missionName,
  rocketName,
  site,
  success,
}) => {
  
  return (
    <div
      className='p-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-x-4'
    >
      <span>{ missionName }</span>
      <span>{ rocketName }</span>

      <span>{ date }</span>
      <span>{ site }</span>

      <span>{ success }</span>
    </div>
  );
};
