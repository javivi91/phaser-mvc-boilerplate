
import EggView from 'views/EggView'

export default class {

    clickEgg () {
        let rounds = game.rnd.between(2, 4);
        let degrees = game.rnd.between(0, 360);
        this.view.startSpin(rounds, degrees);
    }

    initView (game) {
        this.view = new EggView(game, this.clickEgg, this)
    }

    constructor (game) {
        this.initView(game);
    }
}
