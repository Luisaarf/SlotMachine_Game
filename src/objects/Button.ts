export default class MyButton extends Phaser.GameObjects.Container {

    buttonImage : Phaser.GameObjects.Image;
    clickCallback : Function;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, text: string, pointerDownCallback: Function, pointUpCallback: Function) {
        super(scene, x, y);
        this.buttonImage = scene.add.image(0, 0, texture).setScale(1.5);
        this.add(this.buttonImage);
        const buttonText = scene.add.text(0, 0, text, { fontSize: '30px', color: '#000', stroke: '#000', strokeThickness: 3 }).setOrigin(0.5);
        this.add(buttonText);
        this.setSize(this.x, this.y);
        scene.add.existing(this);
        this.setInteractive();
        this.on('pointerdown', () => {
            pointerDownCallback();
            this.buttonImage.setTexture('buttonSelected');
        });
          this.on('pointerup', () => {
            pointUpCallback();
            // this.spinReels();
            this.disableInteractive();
            this.buttonImage.setTexture('buttonDisabled');
        });
    }


}