import Fruits from './Fruits';
export default class Reel extends Phaser.GameObjects.Container {
    private reel: Phaser.GameObjects.Group;
    private rectangle: Phaser.GameObjects.Rectangle;

    fruits = new Fruits().getFruits();
    numberOfFruits = this.fruits.length;

    constructor(scene: Phaser.Scene, x: number, y: number, rectangle : Phaser.GameObjects.Rectangle) {
        super(scene, x, y);
        this.reel = this.scene.add.group();
        this.reel.create(x, y, this.fruits[0]);
        this.reel.create(x, y + 100, this.fruits[1]);
        this.reel.create(x, y - 100, this.fruits[this.numberOfFruits - 1]);
        // this.fruits.forEach((fruit: string, index: number) => {
        //     this.reel.create(x, y + index* 100 , fruit);
        // }
        // );
        // this.reel.create(x, y + 100, 'banana');
        // this.reel.create(x, y - 100, 'banana');
        this.rectangle = rectangle;
    }
}