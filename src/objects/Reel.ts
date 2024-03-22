import Fruits, {Fruit}  from './Fruits';
import Button from './Button'
export default class Reel extends Phaser.GameObjects.Container {
    private reelGroup: Phaser.GameObjects.Group;
    allReelFruits: Phaser.GameObjects.Sprite[] = []; // frutas que estarão na tela
    fruitsObj = new Fruits;
    allFruits = new Fruits().getFruits();
    numberOfFruits = this.allFruits.length;
    tweens: any;
    chosenFruit : Fruit;
    reelNumber: number;
    // tweensArray: Phaser.Tweens.Tween[] = [];


    constructor(scene: Phaser.Scene, x: number, y: number, reelNumber: number) {
        super(scene, x, y);
        this.reelGroup = this.scene.add.group(); 
        this.reelNumber = reelNumber;
    }

    createFirstFruits(){
        this.allReelFruits.push(this.reelGroup.create(this.x, this.y -840, this.allFruits[0].fruit));
        this.allReelFruits.push(this.reelGroup.create(this.x, this.y -700, this.allFruits[1].fruit));
        this.allReelFruits.push(this.reelGroup.create(this.x, this.y -560, this.allFruits[2].fruit));
        this.allReelFruits.push(this.reelGroup.create(this.x, this.y -420, this.allFruits[3].fruit));
        this.allReelFruits.push(this.reelGroup.create(this.x, this.y -280, this.allFruits[4].fruit));
        this.allReelFruits.push(this.reelGroup.create(this.x, this.y -140, this.allFruits[5].fruit));
        this.allReelFruits.push(this.reelGroup.create(this.x, this.y, this.allFruits[6].fruit));
        this.allReelFruits.push(this.reelGroup.create(this.x, this.y +140, this.allFruits[7].fruit));
    }

    getRandomFruit() {
        const totalWeight = this.allFruits.reduce((acc, fruit) => acc + fruit.weight, 0);

        const random = Math.random() * totalWeight;
        let accumulatedWeight = 0;
        for (let i = 0; i < this.allFruits.length; i++) {
            accumulatedWeight += this.allFruits[i].weight;
            if (random < accumulatedWeight) {
                this.chosenFruit = this.allFruits[i];
                this.fruitsObj.setSelectFruits(this.chosenFruit.fruit);
                return this.allFruits[i];
            }
        }
    }

    buildTweens(isLast: boolean){
            this.scene.tweens.add({
                targets: this.allReelFruits,
                y: '+=500', // Move o objeto para fora da tela na parte inferior
                duration: 400, // Duração da animação em milissegundos
                ease: 'cubic.inout', // Tipo de easing
                delay: 20,
                repeat: 2 + this.reelNumber,
                yoyo: true, 
                // loop: 5,
                onComplete: () => { 
                    this.allReelFruits[0].y= this.y -840;
                    this.allReelFruits[1].y= this.y -700;
                    this.allReelFruits[2].y= this.y -560;
                    this.allReelFruits[3].y= this.y -420;
                    this.allReelFruits[4].y= this.y -280;
                    this.allReelFruits[5].y= this.y -140;
                    this.allReelFruits[6].y= this.y ;
                    this.allReelFruits[7].y= this.y +140;
                    this.allReelFruits.forEach((fruit) => {
                        if(fruit.y === this.y +400){
                            fruit.y = this.y - 400;
                        }; // Mover para cima
                    });
                    if (isLast) {
                        this.allReelFruits[6].setTexture(this.chosenFruit.fruit);
                    }
                } 
            });
    }

    startSpin() {  
        if(this.allReelFruits.length > 0 ){
            for (let i = 0; i < this.allReelFruits.length; i++) {
                this.buildTweens(i === this.allReelFruits.length - 1)
            }
        }else{
            console.error("Os rolos não foram inicializados corretamente.");
        }
        return {fruit: this.chosenFruit.fruit, reel: this.reelNumber};
    } 
}