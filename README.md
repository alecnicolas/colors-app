# Colors App
## Description
*Note*: This application was created as a take-home submission for an interview process in 2023.

This application fetches all the named color swatches for the Saturation and Lightness percentages supplied by the user as per the HSL value from [the color api](https://www.thecolorapi.com).

#### Running the app
This was built using `create-react-app` so you can just run `npm start` in the project directory to run the app locally. You can read more about it [here](#create-react-app-readme).

## Summary
This application makes 360 fetches (I know 😬) to the color api's color endpoint since we need to supply a hue value (0-359) to grab a named color for a given saturation and lightness. Because we need to fetch _every_ possible color, we have to input every possible hue value to ensure that we don't miss anything.

One of the interesting things the color API does is that it will find the nearest match to the color you're requesting if that value isn't a named color. Because of this, there are duplicate colors being returned and I filtered those out by assigning each color object to a key/value map using the color name as the key.

Of course, making all of these calls isn't ideal and you can feel it with the load times. One of the other options I considered to reduce how often I hit the color API was to wait for the first promise to fulfill, grab the hue value from the returned HSL, increment one up from that, and use that hue for the next call so we could skip _some_ of the redundancy. However since every promise would resolve synchronously, this would be significantly slower than the implementation I have currently.

Bonus: I added a feature that would allow the user to copy the rgb value from whichever color they clicked on.

## Create React App Readme
This is the leftover readme from the `create-react-app` boilerplate

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
