const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isProd = process.env.NODE_ENV === 'production'

const babelOptions = {
	plugins: ['@vue/babel-plugin-jsx']
}

module.exports = {
	mode: isProd ? 'production' : 'development',
	entry: path.resolve(__dirname, './entry.ts'),
	output: {
		path: path.resolve(__dirname, '../website-dist'),
		publicPath: '',
		filename: isProd ? '[name].[hash].js' : '[name].js'
	},
	devServer: {
		port: 8085,
		publicPath: '/',
		hot: true
	},
	performance: {
		hints: false
	},
	stats: {
		children: false
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: 'ts-loader',
				options: {
					appendTsSuffixTo: [/\.vue$/],
					transpileOnly: true
				}
			},
			// {
			// 	test: /\.tsx$/,
			// 	exclude: /node_modules/,
			// 	use: [
			// 		{
			// 			loader: 'babel-loader',
			// 			options: babelOptions
			// 		},
			// 		{
			// 			loader: 'ts-loader',
			// 			options: {
			// 				appendTsxSuffixTo: [/\.vue$/],
			// 				transpileOnly: true
			// 			}
			// 		}
			// 	]
			// },
			// {
			// 	test: /\.js(x?)$/,
			// 	exclude: /node_modules/,
			// 	use: [
			// 		{
			// 			loader: 'babel-loader',
			// 			options: babelOptions
			// 		}
			// 	]
			// },
			{
				test: /\.md$/,
				use: [
					{
						loader: 'vue-loader',
						options: {
							compilerOptions: {
								preserveWhitespace: false
							}
						}
					},
					{
						loader: path.resolve(__dirname, './md-loader/index.js')
					}
				]
			},
			{
				test: /\.(scss|css)$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
		alias: {
			vue: '@vue/runtime-dom',
			examples: path.resolve(__dirname)
		},
		modules: ['node_modules']
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: './website/index.html',
			filename: './index.html',
			favicon: './website/favicon.ico'
		}),
		new webpack.HotModuleReplacementPlugin()
		// new BundleAnalyzerPlugin(),
	],
	optimization: {
		minimizer: []
	},
	devtool: '#eval-source-map'
}
