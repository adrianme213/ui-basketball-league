const path = require('path');
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
  mode: 'development',
};

module.exports = webpackConfig;