import { gql } from '@apollo/client';

export default gql`
  fragment LaunchCoreFields on Launch {
    __typename
    id
    launch_date_unix
    launch_site {
      site_name
    }
    launch_success
    mission_name
  }
`;
