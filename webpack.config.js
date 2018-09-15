const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
        rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract(
				  {
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				  })
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
    },
	plugins: [ 
    new ExtractTextPlugin(
      {filename: 'style.css'}
    ),
	new VueLoaderPlugin()
  ]
};