## Requirements
Node 18+

## Start the project
npm install
npm run dev

## Stack
- [NextJS](https://nextjs.org/)
- [Apollo GraphQL](https://www.apollographql.com/)
- [TailwindCSS](https://tailwindcss.com/)

## Notes
- The GraphQL used in the exercise seems to implement limit and offset in a weird (not usual) manner. I think in general you set an offset that should be the index of the item to start retrieving elements from, and then a limit that represents the total amount of elements we want to retrieve. Using this API, trying to retrieve something with (offset: 4, limit: 4) does not retrieve anything (even when there are more elements in the dataset). It's necessary, in order to fix it, to ask with (offset: 4, limit: 8), which retrieves the 4 items we want. It’s possible to verify this issue in the GraphQL Explorer that you sent with the exercise. In fact, I went and read their code, and it actually seems like they have a bug here (https://github.com/apollographql/spacex/blob/8c6f66b39be4968958283522da7460eb67fdbfc9/src/limit-offset-service.ts#L12). I think they are using slice() incorrectly (they should sum both the offset and the limit as the second argument of slice() in order to fix it).
- Added Lint for a more consistent code style and clarity.
