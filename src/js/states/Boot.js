import Phaser from 'phaser'
// import WebFont from 'webfontloader'

export default class extends Phaser.State {
  init () {
    this.fontsReady = false
    this.fontsLoaded = this.fontsLoaded.bind(this)
  }

  preload () {
    this.load.image('loaderBg', './assets/images/loader-bg.png')
    this.load.image('loaderBar', './assets/images/loader-bar.png')
  }

  render () {
    this.state.start('Load')
  }

  fontsLoaded () {
    this.fontsReady = true
  }

}
