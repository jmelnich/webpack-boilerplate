# Webpack 4 Boilerplate Client Side

## Requirements
You only need node.js pre-installed and you’re good to go.

## Basic Configurations

### Dev Dependencies

The development dependencies from package.json are:

Webpack itself:
* "webpack", "webpack-cli"
* "html-webpack-plugin"

Serving and reloading:
* "webpack-dev-server"

Style loaders:
* "style-loader", "css-loader"
* "node-sass", "sass-loader"

Image loaders:
* "file-loader"
* "url-loader"

ES6 loaders:
* "babel-loader"
* "babel-core"
* "babel-preset-env" (already added to .babelrc)

## Additional configurations
### Dependencies for React

Dev dependencies (loaders):
* "babel-preset-react" (add to .babelrc)
In case of any advanced usage of Ecmascript, please install the last stage 4 preset:
* "babel-preset-stage-4" (add to .babelrc)

Hot reloading:
* "react-hot-loader"

React itself:
* "react", "react-dom"
* "react-router-dom" - router
* "redux", "redux-thunk"

Common the box solutions can be:
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
