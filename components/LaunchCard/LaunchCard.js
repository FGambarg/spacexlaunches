import React from 'react';

export default ({
  missionName,
  rocketName,
  site,
  success,
  unixDate,
}) => (
  <div
    className='pt-4 pb-4 max-w-sm bg-white border-2 border-black rounded-xl shadow-lg flex flex-col items-center mb-8 w-1/5 basis-1/5 mx-2'
  >
    <span className='text-center text-xl mb-1'>{ missionName }</span>
    <span className='text-center text-base text-slate-800'>{ rocketName }</span>

    <span className='mt-4 text-center text-sm text-slate-600 mb-1'>Launch</span>
    <span className='text-center'>{ new Date(unixDate * 1000).toLocaleDateString('default') }</span>
    <span className='text-center text-sm'>{ site || 'Site not available' }</span>

    <span className='mt-4 text-center'>
      {
          success == null ? 'Success not available'
            : success ? 'Success' : 'Failure'
        }
    </span>
  </div>
);
