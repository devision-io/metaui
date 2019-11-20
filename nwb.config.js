var path = require('path');

// https://dev.to/ayabongaqwabi/how-to-build-a-ui-component-library-with-nwb-styled-components-and-storybook-3g3e
let SRC_DIR = path.resolve('src');
module.exports = {
  type: 'react-component',
  webpack: {
    config(config) {
      config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx'];
      config.module.rules.push({
        'test': /\.tsx?$/,
        'loader': 'awesome-typescript-loader',
      }, {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      });

      return config;
    },
  },
  npm: {
    esModules: true,
    umd: {
      global: 'MetaUI',
      externals: {
        react: 'React'
      }
    }
  }
};
