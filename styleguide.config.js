module.exports = {
  webpackConfig: {
    module: {
      rules: [
        // Vue loader
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: "vue-loader"
        }
        // Babel loader, will use your project’s .babelrc
        // {
        //   test: /\.js?$/,
        //   exclude: /node_modules/,
        //   loader: "babel-loader"
        // },
        // {
        //   test: /\.css$/,
        //   loader: "style-loader!css-loader"
        // }
      ]
    }
  }
};
