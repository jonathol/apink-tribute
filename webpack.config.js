module.exports = {
  entry: "./frontend/index.jsx",
  output: {
    filename: "./bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: [/\.json$/],
        loader: "json-loader"
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["*", ".js",".jsx"]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
