import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import { LoadingIndicator, Logo } from '../../components';

const LAUNCH_QUERY = gql`
  query LaunchQuery($launchId: ID!) {
    launch(id: $launchId) {
      ...LaunchCoreFields
      details
      rocket {
        rocket {
          __typename
          id
          boosters
          country
          mass {
            kg
          }
        }
      }
    }
  }
`;

export default function () {
  const router = useRouter();

  const { data, loading } = useQuery(
    LAUNCH_QUERY,
    {
      variables: { launchId: router.query.id },
    },
  );

  const launch = data?.launch;

  return (
    <div className='flex items-center min-h-screen flex-col p-8'>
      <div className='mb-8 flex items-center w-full bg-slate-100 rounded-xl border-2 border-solid border-black h-12'>
        <Logo />
      </div>

      {
        loading

          ? <LoadingIndicator />

          : (
            <div className='p-4 bg-white border-2 border-black rounded-xl shadow-lg flex flex-col items-center w-96 mx-2'>
              <span className='text-center text-xl mb-1'>{ launch.mission_name }</span>
              <span className='text-center text-base text-slate-800'>{ launch.rocket.rocket_name }</span>

              <span className='mt-4 text-center text-sm text-slate-600 mb-1'>Details</span>
              <span className='text-center text-sm'>{ launch.details || 'Launch details not available' }</span>

              <span className='mt-4 text-center text-sm text-slate-600 mb-1'>Launch</span>
              <span className='text-center'>{ new Date(launch.launch_date_unix * 1000).toLocaleDateString('default') }</span>
              <span className='text-center text-sm'>{ (launch.launch_site && launch.launch_site.site_name) || 'Site not available' }</span>

              <span className='mt-4 text-center'>
                {
                launch.launch_success == null ? 'Success not available'
                  : launch.launch_success ? 'Success' : 'Failure'
              }
              </span>

              {
              launch.rocket.rocket && (
                <>
                  <div className='flex items-center justify-center w-full mt-4 mb-1'>
                    <span className='text-center text-sm text-slate-600 mr-2'>Rocket</span>

                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' />
                    </svg>
                  </div>

                  <span className='text-center'>{ launch.rocket.rocket.rocket_name }</span>
                  <span className='text-center text-sm'>{ launch.rocket.rocket.country }</span>
                  <span className='text-center text-sm'>
                    { launch.rocket.rocket.boosters }
                    {' '}
                    Boosters
                  </span>
                  <span className='text-center text-sm'>
                    { launch.rocket.rocket.mass.kg }
                    {' '}
                    kg
                  </span>
                </>
              )
            }
            </div>
          )
      }

      <button
        className='p-4 bg-white border-2 border-violet-800 cursor-pointer mt-8 rounded-xl shadow-lg flex items-center justify-center mt-1 h-16 w-36 hover:border-black active:bg-slate-200'
        disabled={loading}
        onClick={() => router.back()}
        type='button'
      >
        <span className='text-xl text-violet-800'>Back</span>
      </button>
    </div>
  );
};
