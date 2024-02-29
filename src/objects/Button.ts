import Reel from '../objects/Reel';

export default class MyButton extends Phaser.GameObjects.Container {

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, text: string, scale: number, reel1: Reel, reel2: Reel, reel3: Reel) {
        super(scene, x, y);

        const button = scene.add.image(0, 0, texture).setInteractive();
        this.add(button);
        const buttonText = scene.add.text(0, 0, text, { fontSize: '30px', color: '#000', stroke: '#000', strokeThickness: 3 }).setOrigin(0.5);
        this.add(buttonText);
        scene.add.existing(this);
        this.setScale(scale);
        button.on('pointerdown', () => {
            button.setTint(0x666666); 
            console.log('Button clicked');
        });
        button.on('pointerup', () => {
            this.spinReels(reel1, reel2, reel3);
            button.clearTint(); ;
        });
    }

    public spinReels(reel1 : Reel, reel2: Reel, reel3: Reel) {
        if (reel1 && reel2 && reel3) {
          const firstFruit = reel1.getRandomFruit();
          const secondFruit = reel2.getRandomFruit();
          const thirdFruit = reel3.getRandomFruit();
    
          console.log(firstFruit, secondFruit, thirdFruit);
        } else {
            console.error("Os rolos não foram inicializados corretamente.");
        }
      }
}