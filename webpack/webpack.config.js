const path = require("path");
const HtmlWebpack = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "..", "./src/index.tsx"),
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: (f) => {
                                let dirNameInsideAssets = path.relative(
                                    path.join(__dirname, "src"),
                                    path.dirname(f)
                                );
                                return `${dirNameInsideAssets}/[name].[ext]`;
                            },
                        },
                    },
                ],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "..", "./build"),
        filename: "bundle.js",
        clean: true,
    },
    mode: "development",
    plugins: [
        new HtmlWebpack({
            template: path.resolve(__dirname, "..", "./src/index.html"),
        }),
    ],
};
