import Reel from '../objects/Reel';
import Fruits from './Fruits';
import Balance from './Balance';
import MiddleLine from './MiddleLine';

interface ChosenFruitsOrder {
    fruit: string;
    reel: number;
}

export default class MyButton extends Phaser.GameObjects.Container {

    fruits = new Fruits().getFruits();
    arrayFruits : ChosenFruitsOrder[] = []
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
        });
          this.on('pointerup', () => {
            pointUpCallback();
            // this.spinReels();
            this.disableInteractive();
        });
    }

    // setClickCallback(callback: Function) {
    //     this.clickCallback = callback;
    // }
    
    checkWin(){         ////////////////// colocar essa função em outra classe 
        // if(this.arrayFruits[0].fruit === this.arrayFruits[1].fruit && this.arrayFruits[1].fruit === this.arrayFruits[2].fruit){
        //     this.middleLine.ChangeColor(0x0000ff);
        //     this.fruits.map(fruit => {
        //         if(fruit.fruit === this.arrayFruits[0].fruit){
        //             this.balance.addToValue(fruit.payment);
        //             this.balanceText.setText(`Saldo: ${this.balance.getValue()}`);
        //         }
        //     });
        // }
        // this.arrayFruits = [];      
        // if (this.balance.getValue() >= 10) {
        //     this.button.clearTint();
        //     this.button.setInteractive();
        // }
    }



}