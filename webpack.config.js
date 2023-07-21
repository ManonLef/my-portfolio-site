const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
entry: "./src/index.js",
plugins: [
    new HtmlWebpackPlugin({
      hash:true,
      title:"Manon's Dev Portfolio",
      template:"./src/index.html",
      filename: 'index.html',
    }),
  ],
output: {
  filename: "main.js",
  path: path.resolve(__dirname, "dist"),
  clean: true,
},
mode: 'development',
module: {
  rules: [
    {
      test: /\.(?:js|mjs|cjs)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ]
        }
      }
    }
  ]
}
};
