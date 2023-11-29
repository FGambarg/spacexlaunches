import React from 'react';
import { useRouter } from 'next/router';

export default function () {
  const router = useRouter();

  return (
    <button onClick={() => router.push('/')} type='submit'>
      <span className='font-thin text-lg ml-4'>SpaceX</span>
      <span className='font-bold text-lg ml-2'>Launches</span>
    </button>
  );
};
