# Webpack 4 Boilerplate Markup

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

```
npm install
```
This will create a directory node_modules with webpack in it.

For developement, run

```
npm run dev
```

It will serve bundle from memory.
For physical bundle.js file, run 
```
npm run build:dev
```
 or 
 ```
 npm run build:prod
 ```

To configure output place, change webpack.congfig at
```
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
}
```


