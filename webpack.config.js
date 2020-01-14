const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './examples/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './examples/index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    useLocalIp: true,
    open: true,
    quiet: true,
    progress: true,
    compress: true,
    port: 9000,
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
