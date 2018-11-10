# Bidding

## Requirements
You only need node.js pre-installed and you’re good to go.


## Dependencies

The dependencies from package.json are:

Webpack itself:
* "webpack"
* "webpack-cli"

Css and Scss (Sass):
* "css-loader"
* "style-loader"
* "sass-loader"
* "node-sass"

Image loaders:
* "file-loader"
* "url-loader"

React itself:
* "react"
* "react-dom"
* "redux"

React loaders:
* "babel-loader"
* "babel-preset-env"
* "babel-preset-react"
* "babel-core"

Hot reloading:
* webpack-hot-middleware
* react-hot-loader

```
npm install
```

Build the current application (will bundle all js to server/bundle.js) with command

```
npm run dev
```

This will create a directory node_modules with webpack in it.
