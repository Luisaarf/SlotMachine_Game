import Reel from '../objects/Reel';
import Fruits from './Fruits';
import Balance from './Balance';

export default class MyButton extends Phaser.GameObjects.Container {

    balanceText: Phaser.GameObjects.Text;
    fruits = new Fruits;
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, text: string, scale: number, reel1: Reel, reel2: Reel, reel3: Reel, balance: Balance, balanceText: Phaser.GameObjects.Text) {
        super(scene, x, y);
        const button = scene.add.image(0, 0, texture).setInteractive();
        this.add(button);
        const buttonText = scene.add.text(0, 0, text, { fontSize: '30px', color: '#000', stroke: '#000', strokeThickness: 3 }).setOrigin(0.5);
        this.add(buttonText);
        scene.add.existing(this);
        this.setScale(scale);
        this.balanceText = balanceText;
        button.on('pointerdown', () => {
            button.setTint(0x666666); 
            this.payFromBalance(balance);
        });
        button.on('pointerup', () => {
            this.spinReels(reel1, reel2, reel3);
            button.clearTint(); ;
        });
    }

    public payFromBalance(balance: Balance) {
        balance.subtractFromValue(10);
        this.balanceText.setText(`Saldo: ${balance.getValue()}`);
    }

    public spinReels(reel1 : Reel, reel2: Reel, reel3: Reel) {
        if (reel1 && reel2 && reel3) {
            const firstFruit = reel1.getRandomFruit();
            const secondFruit = reel2.getRandomFruit();
            const thirdFruit = reel3.getRandomFruit();
            reel1.startSpin(1);
            // reel3.startSpin(3);
            // reel2.startSpin(2);
        } else {
            console.error("Os rolos não foram inicializados corretamente.");
        }
        
    }
}