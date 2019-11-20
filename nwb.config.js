module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'MetaUI',
      externals: {
        react: 'React'
      }
    }
  }
}
