import Phaser from 'phaser'

export default class extends Phaser.Sprite {
    
    startSpin (rounds, degrees) {
        if (this.spinTween && this.spinTween.isRunning) return undefined;

        this.spinTween = this.game.add.tween(this).to({
            angle: 360 * rounds + degrees
        }, 3000, Phaser.Easing.Quadratic.Out, true);
    }

    initEvents (callback, callbackContext) {
        this.events.onInputDown.add(callback, callbackContext);
    }

    constructor (game, callback, callbackContext) {
        super(game, game.world.width / 2, game.world.height / 2, 'egg');

        this.inputEnabled = true;
        this.scale.set(0.5);
        this.anchor.set(0.5, 0.6);

        this.initEvents(callback, callbackContext);

        this.game.add.existing(this);
    }
}
