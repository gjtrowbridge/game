# Front-End Project Starter

The purpose of this repository is to give myself a starting point for creating new front-end repos.
I wanted a fast, simple way to get myself up-and-running with Webpack, ES6, SCSS, React, Redux, etc.

There are plenty of great tools already that do this (like [create-react-app](https://github.com/facebookincubator/create-react-app)).

The reason I'm building my own, and the only advantages that my tool will have over other tools, is:

* It's a good excuse for me to get more experience with Webpack.
* I can tweak the configuration of this repo to fit my exact needs.
* This repo will only include what I think I need for my projects (fewer moving parts).
* I'll understand all of the "parts" of this repo, and can comment it to my heart's content.

Obviously, anyone else is free to use this, but you may get better mileage with one of the more widely-used tools.

## Usage / Commands

* `npm run build`
    * Compiles the JavaScript, CSS, etc, and outputs the result to dist/bundle.js
* `npm run watch`
    * Does the same as `npm run build`, but will watch files and update automatically if there are changes
* `npm run webpack-dev-server`
    * Very similar to `npm run watch`, but serves the results at http://localhost:8080/webpack-dev-server/
    * Note that the link above will auto-update whenever you make changes to your app.
    * Also note that this makes changes in-memory.
        * In other words, **you will not see the changes outside of the dev website unless you run `npm run build`**
    * http://localhost:8080/webpack-dev-server/ will also tell you if you have any lint errors or warnings.
    * In my opinion, this is best/fastest when you are doing ongoing development.
    
## This repo currently supports
* ES6
* React / JSX
* ESLint errors
* Sourcemaps (allows you to see any errors/log messages as if they were coming from JSX directly, instead of from bundle.js)
* SCSS compilation
* Importing SCSS modules inline in your JavaScript code! (See js/App.jsx for an example)

### webpack-dev-server in action
* The sourcemaps point to the .jsx file (not bundle.js)
* ESLint warning shows up at the top of the page
* The SCSS file is required inline in App.jsx, and everything just works!
![Image of webpack-dev-server in action](https://cloud.githubusercontent.com/assets/931171/21301185/114b7b74-c560-11e6-8489-8eb8a977af44.png)

### ESLint in action
![Image of built-in ESLint checking in action](https://cloud.githubusercontent.com/assets/931171/21301186/128dc316-c560-11e6-8fb9-0bdb5943c27e.png)

## Other notes
* Webpack is awesome! I can't believe I didn't explore it sooner.
