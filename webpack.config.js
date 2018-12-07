const webpack = require("webpack");

module.exports = {
  entry: './assets/js/app.js',
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  watch: true,
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      },
      {
        test: /\.scss/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }
        ]
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      }
    ]
  },
  node: {
   fs: "empty"
}
};
