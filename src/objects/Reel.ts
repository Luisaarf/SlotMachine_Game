import Fruits from './Fruits';
export default class Reel extends Phaser.GameObjects.Container {
    private reel: Phaser.GameObjects.Group;
    private rectangle: Phaser.GameObjects.Rectangle;

    fruits = new Fruits().getFruits();
    numberOfFruits = this.fruits.length;
    tweens: any;

    constructor(scene: Phaser.Scene, x: number, y: number, rectangle : Phaser.GameObjects.Rectangle) {
        super(scene, x, y);
        this.reel = this.scene.add.group();
        this.reel.create(x, y, this.fruits[0].fruit);
        this.reel.create(x, y + 100, this.fruits[1].fruit);
        this.reel.create(x, y + 200, this.fruits[2].fruit);
        this.reel.create(x, y - 100, this.fruits[this.numberOfFruits - 1].fruit);
        this.reel.create(x, y - 200, this.fruits[this.numberOfFruits - 2].fruit);

        this.rectangle = rectangle;
    }

    // startSpin() {
    //     // Lógica para girar os reels
    //         const spinTween = this.tweens.add({
    //             targets: this.reel.getChildren(),
    //             y: this.reel.y + spinDistance,
    //             ease: 'Cubic.easeInOut',
    //             duration: spinDuration,
    //             delay: 200,
    //             onComplete: () => {
    //                 // Lógica a ser executada quando a rotação do reel for concluída
    //                 this.stopReel(this.reel);
    //             }
    //         });
    // }

    // stopReel(reel: Phaser.GameObjects.Sprite[]) {
    //     // Lógica para parar o reel
    //         // const symbolIndex = this.selectSymbolIndex();
    //         // reel[i].setTexture(this.symbols[symbolIndex]);
    // }

}