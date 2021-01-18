# Introduction

This is an enboarding project designed as a way of working with team to teach basics of solving a problem, introducing React to the team as well as other ways solving communication.

The project was not done as Typescript for the reason that the onboarding team had mixed skills, non-technical to developers who had never touched React. This project was a simple way of introducing developers to create react app, Jest testing, tdd through JS, extended to storybooking which was a next UI way of TDDing and visualising UI coding. This is work in progress and can be continued

A demo of working application can be found at [https://vfarah-if.github.io/corn-calculator/](https://vfarah-if.github.io/corn-calculator/).

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
