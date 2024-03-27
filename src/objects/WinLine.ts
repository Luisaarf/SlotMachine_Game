export default class WinLine extends Phaser.GameObjects.Container {
 
    winLine : Phaser.GameObjects.Image;
    blue : number = 0x00A6FF;
    gray : number = 0x9c9c9c;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);
        this.winLine = scene.add.image(x, y, 'winLine').setDepth(1);
        this.winLine.setScale(1.8);
        this.winLine.setPipeline('Light2D');
        this.winLine.setTintFill(0x00A6FF);
        scene.lights.enable()

        scene.lights.addLight(x, y, 200, undefined, 4) ;
        scene.lights.addLight(x -250, y, 200, undefined, 4) ;
        scene.lights.addLight(x +250, y, 200, undefined, 4) ;
    }

    FlashWinLine() {
        this.winLine.setTintFill(this.gray)
        this.scene.time.addEvent({
            delay: 500,
            callback: () => {
                if (this.winLine.tint === this.gray) {
                    this.winLine.setTintFill(this.blue);
                } else {
                    this.winLine.setTintFill(this.gray);        
                }
            },
            callbackScope: this,
            repeat: 2
        });
    }

}
