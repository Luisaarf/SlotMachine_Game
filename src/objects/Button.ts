import Reel from '../objects/Reel';
import Fruits from './Fruits';
import Balance from './Balance';

interface ChosenFruitsOrder {
    fruit: string;
    reel: number;
}

export default class MyButton extends Phaser.GameObjects.Container {

    balanceText: Phaser.GameObjects.Text;
    balance: Balance;
    fruits = new Fruits().getFruits();
    arrayFruits : ChosenFruitsOrder[] = []
    button : Phaser.GameObjects.Image;

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, text: string, scale: number, reel1: Reel, reel2: Reel, reel3: Reel, balance: Balance, balanceText: Phaser.GameObjects.Text) {
        super(scene, x, y);
        this.button = scene.add.image(0, 0, texture).setInteractive();
        this.add(this.button);
        const buttonText = scene.add.text(0, 0, text, { fontSize: '30px', color: '#000', stroke: '#000', strokeThickness: 3 }).setOrigin(0.5);
        this.add(buttonText);
        scene.add.existing(this);
        this.setScale(scale);
        this.balance = balance;
        this.balanceText = balanceText;
        this.button.on('pointerdown', () => {
            this.button.setTint(0x666666); 
            this.payFromBalance();
        });
        this.button.on('pointerup', () => {
            this.spinReels(reel1, reel2, reel3);
            this.button.disableInteractive();
        });
    }

    public payFromBalance() {
        this.balance.subtractFromValue(10);
        this.balanceText.setText(`Saldo: ${this.balance.getValue()}`);
    }
    
    checkWin(){
        console.log(this.arrayFruits, 'arrayFruits')
        if(this.arrayFruits[0].fruit === this.arrayFruits[1].fruit && this.arrayFruits[1].fruit === this.arrayFruits[2].fruit){
            console.log('chegou1')
            this.fruits.map(fruit => {
                if(fruit.fruit === this.arrayFruits[0].fruit){
                    console.log('chegou2')
                    this.balance.addToValue(fruit.payment);
                    this.balanceText.setText(`Saldo: ${this.balance.getValue()}`);
                }
            });
        }
        this.arrayFruits = [];      
        if (this.balance.getValue() >= 10) {
            this.button.setInteractive();
            this.button.clearTint();
        }
    }
    public spinReels(reel1 : Reel, reel2: Reel, reel3: Reel) {
        if (reel1 && reel2 && reel3) {
            reel1.getRandomFruit();
            reel2.getRandomFruit();
            reel3.getRandomFruit();
            this.arrayFruits.push(reel1.startSpin());
            this.arrayFruits.push(reel2.startSpin());
            this.arrayFruits.push(reel3.startSpin());
            this.scene.time.addEvent({
                delay: 5500,
                callback: ()=>{
                    this.checkWin();
                },
            })
        } else {
            console.error("Os rolos não foram inicializados corretamente.");
        }
        
        
    }

}