import { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import { LaunchCard, LoadingIndicator, Logo } from '../components';

const LAUNCHES_TO_SHOW = 4;

const LAUNCHES_QUERY = gql`
  query LaunchesQuery($offset: Int!, $limit: Int!) {
    launches(offset: $offset, limit: $limit) {
      __typename
      id
      launch_date_unix
      launch_site {
        site_name
      }
      launch_success
      mission_name
      rocket {
        rocket_name
      }
    }
  }
`;

export default function () {
  const [launches, setLaunches] = useState(null);
  const [limit, setLimit] = useState(LAUNCHES_TO_SHOW);

  const { data, loading, fetchMore } = useQuery(
    LAUNCHES_QUERY,
    {
      variables: { offset: 0, limit },
      notifyOnNetworkStatusChange: true,
    },
  );

  useEffect(() => {
    if (data) {
      setLaunches(data.launches);
    };
  }, [data]);

  return (
    <main className='flex items-center min-h-screen flex-col p-8'>
      <div className='mb-8 w-full bg-slate-100 rounded-xl pt-2 border-2 border-solid border-black'>
        <div className='pb-2'>
          <Logo />
        </div>

        <img
          alt=''
          className='object-cover w-full h-52 object-top rounded-b-lg'
          src='https://www.datocms-assets.com/18383/1575231552-spacexbanner.jpg?auto=compress&dpr=2&fm=jpg&w=1000'
        />
      </div>

      <div className='flex flex-wrap justify-center w-full'>
        {
          launches && launches.map(launch => (
            <LaunchCard
              id={launch.id}
              key={launch.id}
              missionName={launch.mission_name}
              rocketName={launch.rocket.rocket_name}
              site={launch.launch_site && launch.launch_site.site_name}
              success={launch.launch_success}
              unixDate={launch.launch_date_unix}
            />
          ))
        }
      </div>

      <button
        className={`p-4 bg-white border-2 border-violet-800 rounded-xl shadow-lg flex items-center justify-center mt-1 h-16 w-36 hover:border-black cursor-pointer ${loading ? ' cursor-not-allowed' : ' active:bg-slate-200'}`}
        disabled={loading}
        onClick={() => {
          fetchMore({
            variables: { offset: launches.length, limit: launches.length + LAUNCHES_TO_SHOW },
          })
            .then(() => setLimit(limit + LAUNCHES_TO_SHOW));
        }}
        type='button'
      >
        {
          loading
            ? <LoadingIndicator />
            : <span className='text-xl text-violet-800'>Load More</span>
        }
      </button>
    </main>
  );
};
