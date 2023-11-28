import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <button className='font-thin text-lg' onClick={() => router.push('/')} type='submit'>
        SpaceX Launches
      </button>

      <h1 className='font-bold mt-2 text-xl'>404 | Page Not Found</h1>
    </div>
  );
};
