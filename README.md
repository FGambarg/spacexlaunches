## Requirements
- Node 18+

## Start the project
- npm install
- npm run dev

## Stack
- [NextJS](https://nextjs.org/)
- [Apollo GraphQL](https://www.apollographql.com/)
- [TailwindCSS](https://tailwindcss.com/)

## Notes
- The GraphQL service used in the exercise seems to implement limit and offset in a weird (not usual) manner. I think in general you set an offset that should be the index of the item to start retrieving elements from, and then a limit that represents the total amount of elements we want to retrieve. Using this API, trying to retrieve something with (offset: 4, limit: 4) does not retrieve anything (even when there are more elements in the dataset). It's necessary, in order to fix it, to ask with (offset: 4, limit: 8), which retrieves the 4 items we want. It’s possible to verify this issue in the GraphQL Explorer that you sent with the exercise. In fact, I went and read their code, and it actually seems like they have a bug here (https://github.com/apollographql/spacex/blob/8c6f66b39be4968958283522da7460eb67fdbfc9/src/limit-offset-service.ts#L12). I think they are using slice() incorrectly (they should sum both the offset and the limit as the second argument of slice() in order to fix it).
- I couldn't find results with the Explorer where Launch Site and Success were populated. In all cases both return null. Of course, I may be making a mistake. I'm still retrieving it and showing the correct label anyways.
- Added Lint for a more consistent code style and clarity. It runs automatically on build (errors make the build fail, warnings don't). This should be enough to make sure the lint passes on pushes to a repository (with the proper integration with Github Actions/CircleCI).
- NextJS has a default 404 page, but I implemented a simple one just to show how it should be done. NextJS makes this page static automatically so that it doesn't generate unnecessary load.
- I tried the webapp on mobile and it seems to adapt well to lower resolutions.
