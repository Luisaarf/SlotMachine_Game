import Fruits, {Fruit}  from './Fruits';
import Button from './Button'
export default class Reel extends Phaser.GameObjects.Container {
    private reelGroup: Phaser.GameObjects.Group;
    entries : Phaser.GameObjects.Sprite[];
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
        this.reelGroup.create(this.x, this.y -840, this.allFruits[0].fruit);
        this.reelGroup.create(this.x, this.y -700, this.allFruits[1].fruit);
        this.reelGroup.create(this.x, this.y -560, this.allFruits[2].fruit);
        this.reelGroup.create(this.x, this.y -420, this.allFruits[3].fruit);
        this.reelGroup.create(this.x, this.y -280, this.allFruits[4].fruit);
        this.reelGroup.create(this.x, this.y -140, this.allFruits[5].fruit);
        this.reelGroup.create(this.x, this.y, this.allFruits[6].fruit);
        this.reelGroup.create(this.x, this.y +140, this.allFruits[7].fruit);[]
        console.log(this.reelGroup.children.entries);
        // console.log(this.allFruits[1].fruit.)
        this.entries = this.reelGroup.children.entries as Phaser.GameObjects.Sprite[];;
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
                console.log(this.chosenFruit.fruit);
                return this.allFruits[i];
            }
        }
    }

    rearrangeArray( arr : Phaser.GameObjects.GameObject[]){
        const lastElement = arr.pop(); // Remove o último elemento
        arr.unshift(lastElement); // Adiciona o último elemento na primeira posição
    }

    buildTweens(isLast: boolean){
            this.scene.tweens.add({
                targets: this.reelGroup.getChildren(),
                y: '+=560', // Move o objeto para fora da tela na parte inferior
                duration: 400, // Duração da animação em milissegundos
                ease: 'cubic.inout', // Tipo de easing
                // delay: 20,
                repeat: 2 + this.reelNumber,
                onRepeat: () => {
                    this.rearrangeArray(this.reelGroup.getChildren());
                    this.entries = this.reelGroup.children.entries as Phaser.GameObjects.Sprite[];
                },
                onComplete: () => { 
                    console.log(this.reelGroup.children.entries, 'aff');
                    if (isLast) {
                        this.entries[6].setTexture(this.chosenFruit.fruit);
                    }
                } 
            });
    }

    startSpin() {  
        console.log('aqui')
        if(this.reelGroup.children.entries.length > 0 ){
            for (let i = 0; i < this.reelGroup.children.entries.length; i++) {
                this.buildTweens(i === this.reelGroup.children.entries.length - 1)
            }
        }else{
            console.error("Os rolos não foram inicializados corretamente.");
        }
        return {fruit: this.chosenFruit.fruit, reel: this.reelNumber};
    } 
}