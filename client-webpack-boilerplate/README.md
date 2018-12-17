# Webpack 4 Boilerplate Client Side

## Requirements
You only need node.js pre-installed and you’re good to go.


## Dev Dependencies

The development dependencies from package.json are:

Webpack itself:
* "webpack", "webpack-cli"
* "html-webpack-plugin"
* "webpack-dev-middleware"
* "webpack-dev-server"

Style loaders:
* "style-loader", "css-loader"
* "node-sass", "sass-loader"

Image loaders:
* "file-loader"
* "url-loader"

React loaders:
* "babel-loader"
* "babel-preset-env", "babel-preset-react", "babel-preset-stage-0"
* "babel-core"

Hot reloading:
* "webpack-hot-middleware"
* "react-hot-loader"

## Dependencies
React itself:
* "react", "react-dom"
* "react-router-dom" - router
* "redux", "redux-thunk"

In the box solutions:
* "bootstrap", "reactstrap", "availity-reactstrap-validation"
* "axios"


```
npm install
```

Build the current application (will bundle all js to server/bundle.js) with command

```
npm run dev
```

This will create a directory node_modules with webpack in it.
