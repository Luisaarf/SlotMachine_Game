
export default class Reel extends Phaser.GameObjects.Container {
    private reel: Phaser.GameObjects.Group;
    private rectangle: Phaser.GameObjects.Rectangle;

    constructor(scene: Phaser.Scene, x: number, y: number, rectangle : Phaser.GameObjects.Rectangle) {
        super(scene, x, y);
        this.reel = this.scene.add.group();
        this.reel.create(x, y, 'banana');
        this.reel.create(x, y + 100, 'banana');
        this.reel.create(x, y - 100, 'banana');
        this.rectangle = rectangle;
    }
}