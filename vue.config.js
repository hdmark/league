module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    inline: true,
    host: '0.0.0.0',
    port: 3000,
    public: 'lvmgmtllc.com',
  },

  configureWebpack: {
    module: {
      rules: [
        // fixes https://github.com/graphql/graphql-js/issues/1272
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto',
          loader: "babel-loader",
          exclude: /node_modules/,
          query: {
            babelrc: false,
            presets: [["es2015", { modules: false }], "vue", "stage-3"],
          }
        },
      ],
    }

    ,
    optimization: {
      minimize: false, // <---- disables uglify.
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: { chunks: 'all' },
      // minimizer: [new UglifyJsPlugin()] if you want to customize it.
    },
  },
};
