import { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import { ClientOnly, LaunchCard, LoadingIndicator } from '../components';

const LAUNCHES_TO_SHOW = 4;

// TODO: Verify and clean query.
// TODO: Move query to separate file?
const LAUNCHES_QUERY = gql`
  query LaunchesQuery($offset: Int!, $limit: Int!) {
    launches(offset: $offset, limit: $limit, order: "launch_date_utc") {
      id
      details
      launch_date_utc
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
    <div>
      <ClientOnly>
        <main className='flex items-center min-h-screen flex-col p-8'>
          <div className='mb-8 w-full'>
            <div className='flex justify-between'>
              <span>SpaceX</span>
              <span>Launches</span>
            </div>

            <img
              alt=''
              className='object-cover w-full h-64 object-top'
              src='https://www.datocms-assets.com/18383/1575231552-spacexbanner.jpg?auto=compress&dpr=2&fm=jpg&w=1000'
            />
          </div>

          <div className='flex flex-wrap justify-center'>
            {
              launches && launches.map(launch => (
                <LaunchCard
                  key={launch.id}
                  date={launch.launch_date_utc}
                  missionName={launch.mission_name}
                  rocketName={launch.rocket.rocket_name}
                  site={launch.launch_site && launch.launch_site.site_name}
                  success={launch.launch_success}
                />
              ))
            }
          </div>

          <button
            className={loading ? 'p-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center cursor-pointer mt-8 cursor-not-allowed' : 'p-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center cursor-pointer mt-8'}
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
                : <span className='text-xl font-bold'>Load More</span>
            }
          </button>
        </main>
      </ClientOnly>
    </div>
  );
};
