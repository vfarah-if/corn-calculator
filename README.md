# Introduction

This is an enboarding project designed as a way of working with team to teach basics of solving a problem, introducing React to the team as well as other ways solving communication.

The project was not done as Typescript for the reason that the onboarding team had mixed skills, non-technical to developers who had never touched React. This project was a simple way of introducing developers to create react app, Jest testing, tdd through JS, extended to storybooking which was a next UI way of TDDing and visualising UI coding. This is work in progress and can be continued

A demo of working application can be found at [https://vfarah-if.github.io/corn-calculator/](https://vfarah-if.github.io/corn-calculator/).

# Problem to solve

"A man went on a trip with a fox, a goose and a sack of corn. He came upon a stream which he had to cross and found a tiny boat to use to cross the stream. He could only take himself and one other - **the fox, the goose, or the corn - one at a time**. He could not leave the fox alone with the goose or the goose alone with the corn. How does he get all safely over the stream?"

The above riddle is probably the origin of what we did, however our context was altered to make it more interesting and to prevent people googling the answer. Our scenario was that this is an app needed by a talking fox, no lies it was like speaking to a fox from Beatrix Potter series, who was the customer, wanting to undergo a journey to sell his corn at a market. The fox wanted a mobile app to:

1. Inform the cost of going to the market
2. Incurred a cost no matter if something or nothing was taken across the river
3. Base cost of any item is 25P
4. Could only cross with 1 thing at a time
5. The items for sale was geese or corn
6. The corn would be at risk if the the geese were left alone with the corn
7. So information like the amount of trips permissible and the cost as well as if it was possible and some kind if informative message based on the very specific scenarios

# Environment

The application is generated from create react app using the `npx create-react-app` command.

## Custom Script Commands

### `yarn deploy`

Deploy build to git for a demo of the working application. This has been created because the initial deployment needed to host the demo on a mobile app required some kind of deployment, and so git seemed a likely candidate. Remember to `yarn build` the application before doing a *deploy*.

### `yarn coverage`

Runs `yarn test` just once and outputs code coverage reports to a coverage folder. All defaults set, this is a very good way of understanding what has been testsed and what has been excluded.

### `yarn storybook`

Generates a storybook web application to begin developing storybook scenarios, which is a great way of creating style guides and visual ways of initially creating UI scenarios. In this current example the storybook scenarios where used to extended to tests and a snapshot way of testing UI behaviour. 

## Available Scripts for React Application

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
