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
- When using NextJS (which is very popular at the moment), the structure of pages and components is closely related to the way routing is done (which actually simplifies and standardizes it a lot), so the framework defines a lot of it. Of course, I definitely agree with the structure proposed by the framework (otherwise, I wouldn't use it).
- I created an environment file with the URL with the only purpose of showing one way of managing different configurations for different environments (even when there are no environments and we only use one URL). In a real situation, with multiple environments and the project deployed in a cloud provider, one secure and good way of doing it is, for example, setting environment variables in the service configuration with the cloud provider.
- I added a second page with more details about each launch only as an excuse to show the structure with more than one page, router use, and GraphQL fragments.
- Added Lint for a more consistent code style and clarity. It runs automatically on build (errors make the build fail, warnings don't). This should be enough to make sure the lint passes on pushes to a repository (with the proper integration with Github Actions/CircleCI).
- NextJS has a default 404 page, but I implemented a simple one just to show how it should be done. NextJS makes this page static automatically so that it doesn't generate unnecessary load.
- I assumed, looking at the mock, that a illustrative photo/picture was expected at the top of the page.
- I tried the webapp on mobile and it seems to adapt well to lower resolutions.
