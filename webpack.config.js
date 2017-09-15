const webpack = require('webpack');

module.exports = {

    entry: [
		"react-hot-loader/patch",
		"webpack-dev-server/client?http://localhost:3000",
		"webpack/hot/only-dev-server",
        "./src/index.tsx"
    ],
    output:{
        filename: "bundle.js",
        path: __dirname + "/dist",
		publicPath: "/dist/"
    },
    devtool: "source-map",
    resolve:{
        extensions: [".ts",".tsx",".js",".json"]
    },
    module:{
        rules:[
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
			{ test: /\.(png|svg|jpg|gif)$/, use: ["file-loader"] }
        ]
    },
    externals:{
        "react": "React",
        "react-dom":"ReactDOM"
    },
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
	],
	devServer: {
		host: 'localhost',
		port: 3000,
		historyApiFallback: true,
		hot: true,
	},
}