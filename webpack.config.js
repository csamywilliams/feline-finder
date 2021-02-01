const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	mode: 'development',
	output: {
		filename: 'dist.js',
		path: path.join(__dirname, 'public'),
	},
	resolve: {
		modules: [__dirname, 'src/components', 'node_modules'],
		extensions: ['*', '.js', '.jsx'],
		alias: {
			components: path.resolve(__dirname, 'src/components/'),
			hooks: path.resolve(__dirname, 'src/hooks/'),
		},
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
	devServer: {
		contentBase: path.join(__dirname, 'public'),
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			inject: true,
			template: path.resolve(__dirname, 'src', 'index.html'),
		}),
	],
};
