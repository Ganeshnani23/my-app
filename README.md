# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# React Components - LoginComponent & AllUsersComponent
This repository contains two React components: `LoginComponent` and `AllUsersComponent`. Both components interact with external APIs to manage user authentication and data retrieval.

## dependencies:
react-router-dom
axios
font awesome for icon (arrow buttons)
bootstrap for colors

## LoginComponent
### Description
The `LoginComponent` is a login form that allows users to authenticate using their email and password. The component communicates with the `reqres.in` API to verify the credentials and retrieve a token upon successful login. Upon successful authentication, the user is redirected to the dashboard.

## State Management
LoginComponent uses React's useState to manage form inputs, error handling, and password visibility.

## Form Handling: 
The form is submitted to reqres.in API for authentication. If successful, it receives a token and redirects to the dashboard.

## Password Toggle: 
The visibility of the password field can be toggled between password and text.

## Error Handling: 
If the login fails (wrong credentials), an error message is displayed, and an alert box is pop up.


## AllUserComponent
### Description
The AllUserComponent component that displays a list of users fetched from an API. It supports paginated user data, viewing, editing, and deleting users. The component also allows updating a user's information through a modal form.

## functions and state Management
## Fetching Users: 
The useEffect hook fetches the list of users from the API (https://reqres.in/api/users?page=${pageNum}) whenever the page number (pageNum) changes,
Stores the list of users fetched from the API in userData.

## Pagination:
Users can navigate through pages using the left and right arrow buttons. The current page is updated using the setPageNumber function.

## User Edit:
The handleEdit function is called when the "Edit" button is clicked on a user. It populates the update form with the current user details.
The form allows the user to update their first name, last name, and email, on submitting the form, the handleUpdateSubmit function makes a PUT request to update the user data on the server and then updates the user list on the frontend.

## Delete User:
Clicking on the "Delete" button sends a DELETE request to remove the user from the API, and the frontend user list is updated accordingly.


## API's

## Fetches a list of users for the given page number.
GET: https://reqres.in/api/users?page=${pageNum}

## Updates the details of the user with the given userId.
PUT: https://reqres.in/api/users/${userId}


## Deletes the user with the given userId.
DELETE: https://reqres.in/api/users/${userId}


## styling:
appllied own styles by creating module.css file in seperate component and used bootstrap colors for buttons
