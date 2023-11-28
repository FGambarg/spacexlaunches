import React from 'react';
import { useRouter } from 'next/router';

export default ({
  missionName,
  rocketName,
  site,
  success,
  unixDate,
}) => {
  const router = useRouter();

  return (
    <div
      className='p-4 max-w-sm bg-white rounded-xl shadow-lg flex flex-col items-center mb-8 w-1/5 basis-1/5 mx-2'
      onClick={() => router.push('/4')} 
    >
      <span>{ missionName }</span>
      <span>{ rocketName }</span>

      <span className='mt-4'>Launch</span>
      
      <span>{ new Date(unixDate * 1000).toLocaleDateString('default') }</span>
      <span>{ site || 'Site not available' }</span>

      <span className='mt-4'>{ success || 'Success not available' }</span>
    </div>
  );
};
