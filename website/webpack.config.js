/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isProd = process.env.NODE_ENV === 'production'
const isPlay = !!process.env.PLAY_ENV

const babelOptions = {
	plugins: ['@vue/babel-plugin-jsx']
}

const config = {
	mode: isProd ? 'production' : 'development',
	devtool: !isProd && 'cheap-module-eval-source-map',
	entry: isPlay ? path.resolve(__dirname, './play.js') : path.resolve(__dirname, './entry.js'),
	output: {
		path: path.resolve(__dirname, '../website-dist'),
		publicPath: '/',
		filename: isProd ? '[name].[hash].js' : '[name].js'
	},
	stats: 'verbose',
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
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
			{
				test: /\.tsx$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: babelOptions
					},
					{
						loader: 'ts-loader',
						options: {
							appendTsxSuffixTo: [/\.vue$/],
							transpileOnly: true
						}
					}
				]
			},
			{
				test: /\.js(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: babelOptions
					}
				]
			},
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
				test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
				loader: 'url-loader',

				query: {
					limit: 10000,
					name: path.posix.join('static', '[name].[hash:7].[ext]')
				}
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
		alias: {
			vue: '@vue/runtime-dom',
			examples: path.resolve(__dirname)
		}
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: './website/index.html',
			filename: './index.html',
			favicon: './website/favicon.ico'
		})
		// new BundleAnalyzerPlugin(),
	],
	devServer: {
        port: 8085,
		inline: true,
		hot: true,
		stats: 'minimal',
		publicPath: '/',
		contentBase: __dirname,
		overlay: true
	}
}

const cssRule = {
	test: /\.(sass|scss|css)$/,
	use: [
		'css-loader',
		{
			loader: 'sass-loader',
			options: {
				implementation: require('sass')
			}
		}
	]
}

if (isProd) {
	config.plugins.push(
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
			chunkFilename: '[id].[contenthash].css'
		})
	)
	cssRule.use.unshift(MiniCssExtractPlugin.loader)
} else {
	cssRule.use.unshift('style-loader')
}
config.module.rules.push(cssRule)
module.exports = config