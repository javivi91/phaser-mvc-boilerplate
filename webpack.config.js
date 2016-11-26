var path = require('path')
var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')


var phaserModule = path.join(__dirname, '/bower_components/phaser/')
var phaser = path.join(phaserModule, 'build/phaser.min.js')

var FILE_OUTPUT_NAME = 'game.js';
var PATHS = {
    src: {
        base: path.resolve(__dirname, 'src/'),
        assets: path.resolve(__dirname, 'src/assets/'),
        files: {
            main: path.resolve(__dirname, 'src/js/main.js')
        }
    },
    build: {
        base: path.resolve(__dirname, '.build/'),
        assets: path.resolve(__dirname, '.build/assets/')
    }
}

module.exports = {
    watch: true,
    entry: {
        app: ['babel-polyfill', 'phaser', PATHS.src.files.main]
    },
    output: {
        path: PATHS.build.base,
        publicPath: '/',
        filename: FILE_OUTPUT_NAME
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', include: PATHS.src.base},
            {test: /phaser\.js$/, loader: 'expose?Phaser'}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(
            ['.build']
        ),
        new CopyWebpackPlugin([
            {from: PATHS.src.assets, to: PATHS.build.assets}
        ]),
        new HtmlWebpackPlugin({
            title: 'Phaser mvc boilerplate'
        }),
        new BrowserSyncPlugin({
          host: process.env.IP || 'localhost',
          port: process.env.PORT || 8000,
          server: {
            baseDir: [PATHS.build.base]
          }
        })
    ],
    resolve: {
      alias: {
        'phaser': phaser
      }
    }
}
