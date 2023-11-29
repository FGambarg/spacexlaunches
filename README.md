## Requirements
- Node 18+

## Start the project for Development
- npm install
- npm run dev

## Start the project for Production
- npm install
- npm build
- npm run start

## Stack
- [NextJS](https://nextjs.org/)
- [Apollo GraphQL](https://www.apollographql.com/)
- [TailwindCSS](https://tailwindcss.com/)

## Notes
- I used _Apollo GraphQL_ because it's a very standard library to use for _GraphQL_, and because I have previous production/work experience with it.
- I used _NextJS_ because it's the framework I've been using lately to start my React projects, and it has become pretty common to use in the React ecosystem. It provides several features that become useful as a project grows (like SSR for example), several integrations and support with popular libraries. And it's opinionated about certain things, in a good way. (just to clarify, I don't fall in love with any libraries, I'm always open to different alternatives)
- I used _TailwindCSS_ for styling because it has become popular lately and it made a lot of sense for a project this size (and for bigger projects, too; I understand it's used by companies of all sizes). I didn't have a lot of experience with it, and I kinda liked it after using it for this project.
- The _GraphQL_ service used in the exercise seems to implement limit and offset in a weird (not usual) manner. I think in general you set an offset that should be the index of the item to start retrieving elements from, and then a _limit_ that represents the total amount of elements we want to retrieve. Using this API, trying to retrieve something with (_offset_: 4, _limit_: 4) does not retrieve anything (even when there are more elements in the dataset). It's necessary, in order to fix it, to ask with (_offset_: 4, _limit_: 8), which retrieves the 4 items we want. It’s possible to verify this issue in the _GraphQL Explorer_ that you sent with the exercise. In fact, I went and read their code, and it actually seems like they have a bug here (https://github.com/apollographql/spacex/blob/8c6f66b39be4968958283522da7460eb67fdbfc9/src/limit-offset-service.ts#L12). I think they are using slice() incorrectly (they should sum both the offset and the limit as the second argument of slice() in order to fix it).
- I couldn't find results with the _Explorer_ where Launch Site and Success were populated. In all cases both return null. Of course, I may be making a mistake. I'm still retrieving it and showing the correct label anyways.
- When using _NextJS_ (which is very popular at the moment), the structure of pages and components is closely related to the way routing is done (which actually simplifies and standardizes it a lot), so the framework defines a lot of it. Of course, I definitely agree with the structure proposed by the framework (otherwise, I wouldn't use it).
- I created an environment file with the URL with the only purpose of showing one way of managing different configurations for different environments (even when there are no environments and we only use one URL). In a real situation, with multiple environments and the project deployed in a cloud provider, one secure and good way of doing it is, for example, setting environment variables in the service configuration with the cloud provider.
- I added a second page with more details about each launch only as an excuse to show the structure with more than one page, router use, and _GraphQL_ fragments.
- In a bigger project, or with more time, I would 100% use some kind of package or workspace configuration in order to be able to import elements from, for example, the _components_ or _env_ folder without having to use relative imports.
- Added Lint for a more consistent code style and clarity. It runs automatically on build (errors make the build fail, warnings don't). This should be enough to make sure the lint passes on pushes to a repository (with the proper integration with _Github Actions_ or _CircleCI_).
- _NextJS_ has a default 404 page, but I implemented a simple one just to show how it should be done. _NextJS_ makes this page static automatically so that it doesn't generate unnecessary load.
- I assumed, looking at the mock, that a illustrative photo/picture was expected at the top of the page.
- I tried the webapp on mobile and it seems to adapt well to lower resolutions.
