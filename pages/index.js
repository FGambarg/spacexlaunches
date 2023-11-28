import Head from 'next/head';

import { Mission } from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>SpaceX Launches</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className="flex items-center justify-center flex-col min-h-screen">
        <Mission />

        <div
          className='p-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 cursor-pointer'
          onClick={() => {}}
        >
          <span className='text-xl font-bold'>Load More</span>
        </div>
      </main>
    </div>
  );
}
