import { useState } from 'react';
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

export default () => {
  const [limit, setLimit] = useState(LAUNCHES_TO_SHOW);

  const { data, loading, error, fetchMore } = useQuery(
    LAUNCHES_QUERY,
    {
      variables: { offset: 0, limit },
      notifyOnNetworkStatusChange: true,
    },
  );

  if (error) {
    console.error(error);
    // TODO: Handle error in a better UX way.
    return null;
  };

  return (
    <div>
      <ClientOnly>
        <main className='flex items-center min-h-screen flex-col'>
          <span>SpaceX</span>

          <span>Launches</span>

          <div className='flex flex-wrap justify-center'>
            {
              data && data.launches.map(launch => (
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

            { loading && <LoadingIndicator /> }
          </div>

          <div
            className={loading ? 'p-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center cursor-pointer mt-8 cursor-not-allowed' : 'p-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center cursor-pointer mt-8'}
            disabled={loading}
            onClick={() => {
              fetchMore({ variables: { offset: data.launches.length, limit: data.launches.length + LAUNCHES_TO_SHOW } })
                .then(() => setLimit(limit + LAUNCHES_TO_SHOW));
            }}
          >
            <span className='text-xl font-bold'>Load More</span>
          </div>
        </main>
      </ClientOnly>
    </div>
  );
};
