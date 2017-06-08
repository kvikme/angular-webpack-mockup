var path = require("path");
module.exports = {
    devtool: "source-map",
    entry: {
        app: ["./js/index.js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.html$/,
            loader: "raw-loader"
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    }
};
