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

The output is a configuration of where webpack should output your bundle. It defaults to the  './dist/main.js' file.

```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  }
};
```