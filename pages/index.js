import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';

import { ClientOnly, LaunchCard } from '../components';

// TODO: Verify and clean query
const QUERY = gql`
  query LaunchesQuery($offset: Int) {
    launches(limit: 4, offset: $offset) {
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
  const { data, loading: isLoading, error } = useQuery(QUERY);

  if (isLoading) {
    return <h2><a href="#loading" aria-hidden="true" class="aal_anchor" id="loading"><svg aria-hidden="true" class="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Loading...</h2>;
  };

  if (error) {
    console.error(error);
    return null;
  };

  return (
    <div>
      <Head>
        <title>SpaceX Launches</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ClientOnly>
        <main className="flex items-center justify-center flex-col min-h-screen">
          {
            data.launches.map(launch => (
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

          <div
            className='p-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 cursor-pointer'
            onClick={() => {}}
          >
            <span className='text-xl font-bold'>Load More</span>
          </div>
        </main>
      </ClientOnly>
    </div>
  );
};
