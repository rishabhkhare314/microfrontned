const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJSON = require('./webpack.common');

const ProdConfig = {
    mode: 'production',
    output: {
        filename: '[name].[containerhash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
            shared: packageJSON.dependecies
        })
    ]
}

module.exports = merge(commonConfig, ProdConfig)