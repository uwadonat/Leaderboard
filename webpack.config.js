const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    leaderBoardLayour: './src/leaderboardlayout.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
            {
                loader: "style-loader"
            },
            {
                loader: "css-loader",
                options: {
                    modules: false,
                    importLoaders: 2,
                    sourceMap: true
                }
            }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: ['file-loader'],
      },
    ],
  },
  devServer: {
    contentBase: './dist',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

};