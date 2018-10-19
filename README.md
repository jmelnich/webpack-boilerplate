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
webpack
webpack-cli

If you a happy with the package.json file, run 
```
npm install
```

Build the current application (will bundle all js to server/bundle.js) with command

```
npm run start
```

This will create a directory node_modules with webpack in it.
