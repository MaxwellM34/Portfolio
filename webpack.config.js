const path = require("path");
const webpack = require("webpack");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const dotenv = require("dotenv");

// Make an env variable definition
const isProduction = process.env.NODE_ENV === "production";

module.exports = (env = {}) => {
  dotenv.config({ path: path.resolve(__dirname, ".env.local") });
  dotenv.config({ path: path.resolve(__dirname, ".env") });
  return {
  entry: "./src/index.js",
  mode: isProduction ? "production" : "development",
  devtool: isProduction ? "source-map" : "cheap-module-source-map",
  node: undefined,
  output: {
    filename: isProduction
      ? "static/js/main.[contenthash:8].js"
      : "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    // publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            envName: isProduction ? "production" : "development",
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            envName: isProduction ? "production" : "development",
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "static/media/[name].[hash:8].[ext]",
          },
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
              jsx: true,
            },
          },
        ],
      },
      // Then also manage source map loading
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".jsx", ".tsx"],
    alias: {
      "process/browser": require.resolve("process/browser.js"),
    },
    // This is polyfill
    fallback: {
      fs: false,
      tls: false,
      net: false,
      stream: require.resolve("stream-browserify"),
      zlib: require.resolve("browserify-zlib"),
      buffer: require.resolve("buffer"),
    },
    modules: ["src", "node_modules"],
    mainFields: ["browser", "module", "main"],
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      favicon: path.resolve(__dirname, "src/assets/logo.svg"),
      inject: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, "src/robots.txt"), to: "robots.txt" },
        { from: path.resolve(__dirname, "src/sitemap.xml"), to: "sitemap.xml" },
        { from: path.resolve(__dirname, "src/ads.txt"), to: "ads.txt" },
        { from: path.resolve(__dirname, "src/assets/logo.svg"), to: "logo.svg" },
        { from: path.resolve(__dirname, "src/assets/og-image.svg"), to: "og-image.svg" },
      ],
    }),
  ].filter(Boolean),
  optimization: {
    minimize: isProduction,
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          compress: {
            comparisons: false,
          },
          mangle: {
            safari10: true,
          },
          output: {
            comments: false,
            ascii_only: true,
          },
          warnings: false,
        },
      }),
    ],
  },
  // Some optimization could/should also be done here
  devServer: {
    compress: true,
    historyApiFallback: true,
    open: false,
    port: 1234,
    hot: true,
    static: ["dist"],
    headers: {
      "Cache-Control": "no-store",
    },
  },
};
};
