module.exports = {
  type: 'react-component',
  webpack: {
    extractCSS: {
      filename: '[name].css'
    }
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
