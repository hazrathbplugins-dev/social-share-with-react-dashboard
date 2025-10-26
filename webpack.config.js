const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,
    entry: {
        ...defaultConfig.entry(),
        gettingStart: './src/GettingStart.js',
		settingPage: './src/SubmenuPage/Setting.js',
    },
	plugins: [
		...defaultConfig.plugins,
		new CleanWebpackPlugin(),
	],
};