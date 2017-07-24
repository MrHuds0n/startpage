var debug = process.env.NODE_ENV !== 'production'
var path = require('path')

module.exports = {
	context: path.join(__dirname, "src"),
	devtool: debug ? "inline-sourcemap" : false,
	entry: "./js/app.js",
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['react'],
					plugins: ['react-html-attrs', 'transform-class-properties']
				}
			},
			{
				test: /\.styl$/,
				use: [
					'style-loader',
					'css-loader',
					'stylus-loader'
				]
			},
			{
				test: /\.json$/,
				use: [
					'json-loader'
				]
			}
		]
	},

	output: {
		path: __dirname + '/src/',
		filename: 'app.min.js'
	}
}
