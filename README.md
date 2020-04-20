# Organizer README

Both the front end and back end are housed in the to-do-it folder.

# Front End

This Organizer front end was used building React, Redux, React-Router-DOM, and Axios.

All files are located under **to-do-it > to-do-it-app**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). *See below for more information*

# Back End

The backend was created using Rails --api.

# Installation

```bash
git clone git@github.com:oglesbyanthony88/to-do-it.git
```

Open 2 terminal window and cd into the to-do-it folder.

In window one cd into to-do-it-api then run

```bash
rails s
```

In window 2 cd into to-do-it-app then run

```bash
npm start
``` 

You should recieve this message:

```bash
? Something is already running on port 3000. Probably:
  puma 3.12.4 (tcp://localhost:3000) [to-do-it-api] (pid 16531)
  in /home/anthony/Desktop/to-do-it/to-do-it-api

Would you like to run the app on another port instead? (Y/n)
```

Enter Yes and a new browser window will open.

Explore!

# Usage

This is a very minimalistic Organizer. there are three catagories.

*Grocery List* *To Do List* *Notes*

Each has the ability of CRUDing new items, with the exception of Notes. There is currently no Update for Notes. The purpose and idea of this app is to have one convienient place to house the important lists of your life. Like the planners you used to get in grade school.

# Stretch Goals

Remove Grocery and To Do lists and have a create list function. This will allow users freedom to have more than two lists.

Add a view Notes page with the ability to make edits to these notes.

# Contributing

This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

# Licence

The gem is available as open source under the terms of the MIT License.

# Code of Conduct

Everyone interacting in the Evergoal project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the code of conduct.

# Create React App

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
