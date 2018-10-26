# Webpack 4 Boilerplate

## Requirements
You only need node.js pre-installed and you’re good to go.

## Configuration

### Entry

Webpack needs an entry point that indicates which module webpack should use to begin the module bundling. The default is client dir.
You can configure it in webpack.config.js file.

```
module.exports = {
  entry: './client/index.js'
};
```

If you use any imports in the index.js file, webpack will handle them.

### Output

The output is a configuration of where webpack should output your bundle. In my case, it defaults to the  './server/bundle.js' file.

```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'server'),
    filename: 'bundle.js'
  }
};
```

## Deployment

The dependancies from package.json are:

Webpack itself:
* "webpack"
* "webpack-cli"

Css and Scss (Sass):
* "css-loader"
* "style-loader"
* "sass-loader"
* "node-sass"

Image loaders and fonts(ttf, woff etc):
* "file-loader"
* "url-loader"

React itself:
* "react"
* "react-dom"

React loaders:
* "babel-loader"
* "babel-preset-env"
* "babel-preset-react"

Server side:
* "express"
* "babel-cli"
* "babel-core"
* "nodemon"
* webpack-dev-middleware

Hot reloading:
* webpack-hot-middleware
* react-hot-loader


### Dependancies explanation
Webpack and webpack-cli are needed by default.
#### CSS:
In order to serve css code to the browser, we need 'style-loader'.
Also, we need 'css-loader' that interprets imported css files.

#### SCSS:
'sass-loader' handle sass/scss files in your project
'node-sass' is needed to natively compile .scss files to css

#### Image loaders:
Want to use any images for your background in your css? No problem, you just need to configure 'url-loader' and have
'file-loader' to handle huge files.
The 'url-loader' will transform your images into base64 URIs.
Option 5000:
If your images are big though, it might be beneficial to include them as separate files so that the browser might fetch them in parallel.

This is why the url-loader has the limit property (see in webpack.config file). It is a size (in bytes) that will determine that the file is too big to serve it as a base64 URI. Instead, the file-loader will be used that will just copy your files.

#### Babel:
Allows using the latest versions of JavaScript and transpile files to ordinary JavaScript.
For that, we need loader - 'babel-loader' and preset (babel-preset-env)

#### Server side:
For server, we will be using express. To transpile server, we need to have babel-node that comes with 'babel-core' package. We use nodemon to restart server any time we change something on server side.
Package "webpack-dev-middleware" serves the files emitted from webpack from memory, so we don't actually have bundle.js file.

If you a happy with the package.json file, run
```
npm install
```

Build the current application (will bundle all js to server/bundle.js) with command

```
npm run start
```

This will create a directory node_modules with webpack in it.
