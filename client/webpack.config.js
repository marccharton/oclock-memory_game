const path = require('path');

module.exports = {
    entry: './js/app.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    watch: true,
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    'resolve-url-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                require('autoprefixer')({
                                    browsers: ['last 2 versions', 'ie > 8']
                                })
                            ]
                        }
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.png$/,
                use: [{
                    loader: 'file-loader'
                }]
            }
        ],
    },
}
