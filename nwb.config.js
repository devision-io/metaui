var path = require('path');

// https://dev.to/ayabongaqwabi/how-to-build-a-ui-component-library-with-nwb-styled-components-and-storybook-3g3e
let SRC_DIR = path.resolve('src');
module.exports = {
  type: 'react-component',
  // webpack: {
  //   extractCSS: {
  //     filename: '[name].css'
  //   }
  // },
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
