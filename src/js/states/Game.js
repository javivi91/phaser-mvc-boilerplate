/* globals __DEV__ */
import Phaser from 'phaser'
import EggController from 'controllers/EggController'
// import {setResponsiveWidth} from '../utils'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    new EggController(this.game)
  }
}
