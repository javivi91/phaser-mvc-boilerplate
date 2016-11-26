var path = require('path')
var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')


var phaserModule = path.join(__dirname, '/bower_components/phaser/')
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
var pixi = path.join(phaserModule, 'build/custom/pixi.js')
var p2 = path.join(phaserModule, 'build/custom/p2.js')

var OUTPUT_FILE_NAME = 'game.js';
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
        app: ['babel-polyfill', 'pixi', 'p2', 'phaser', PATHS.src.files.main]
    },
    output: {
        path: PATHS.build.base,
        publicPath: '/',
        filename: OUTPUT_FILE_NAME
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', include: PATHS.src.base},
            {test: /phaser\.js$/, loader: 'expose?Phaser'},
            {test: /pixi\.js/, loader: 'expose?PIXI'},
            {test: /p2\.js/, loader: 'expose?p2'}
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
        'phaser': phaser,
        'pixi': pixi,
        'p2': p2,
        'controllers': path.join(PATHS.src.base, 'js/controllers'),
        'models': path.join(PATHS.src.base, 'js/models'),
        'modules': path.join(PATHS.src.base, 'js/modules'),
        'views': path.join(PATHS.src.base, 'js/views')
      }
    }
}
