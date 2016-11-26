import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/Boot'
import LoadState from './states/Load'
import GameState from './states/Game'

class Game extends Phaser.Game {

  constructor () {
    super(557, 990, Phaser.WEBGL, 'content', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Load', LoadState, false)
    this.state.add('Game', GameState, false)

    this.state.start('Boot')
  }
}

window.game = new Game()
