const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const SRC_DIR = path.join(__dirname, '/src');
const DIST_DIR = path.join(__dirname, '/dist');

const webpackConfig = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        include: SRC_DIR,
        loader: 'sass-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: SRC_DIR,
        loader: 'css-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: SRC_DIR,
        loader: 'ts-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: SRC_DIR,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env', '@babel/preset-react']},
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./dist directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] }
    })
  ],
  mode: 'development',
};

module.exports = webpackConfig;