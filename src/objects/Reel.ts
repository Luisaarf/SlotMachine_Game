import Fruits, {Fruit}  from './Fruits';
import Button from './Button'
export default class Reel extends Phaser.GameObjects.Container {
    private reel: Phaser.GameObjects.Group;
    private rectangle: Phaser.GameObjects.Rectangle;
    allReelFruits: Phaser.GameObjects.Sprite[] = []; // frutas que estarão na tela
    fruitsObj = new Fruits;
    allFruits = new Fruits().getFruits();
    numberOfFruits = this.allFruits.length;
    tweens: any;
    fruitToWin : Fruit;
    randomFruit : Fruit;
    // tweensArray: Phaser.Tweens.Tween[] = [];


    constructor(scene: Phaser.Scene, x: number, y: number, rectangle : Phaser.GameObjects.Rectangle) {
        super(scene, x, y);
        this.reel = this.scene.add.group(); 
        this.rectangle = rectangle;
    }

    createFirstFruits(){
        this.allReelFruits.push(this.reel.create(this.x, this.y - 400, this.allFruits[0].fruit));
        this.allReelFruits.push(this.reel.create(this.x, this.y -300, this.allFruits[1].fruit));
        this.allReelFruits.push(this.reel.create(this.x, this.y -200, this.allFruits[2].fruit));
        this.allReelFruits.push(this.reel.create(this.x, this.y -100, this.allFruits[3].fruit));
        this.allReelFruits.push(this.reel.create(this.x, this.y, this.allFruits[4].fruit));
        this.allReelFruits.push(this.reel.create(this.x, this.y +100, this.allFruits[5].fruit));
        this.allReelFruits.push(this.reel.create(this.x, this.y +200, this.allFruits[6].fruit));
        this.allReelFruits.push(this.reel.create(this.x, this.y +300, this.allFruits[7].fruit));
    }

    getRandomFruit() {
        const totalWeight = this.allFruits.reduce((acc, fruit) => acc + fruit.weight, 0);

        const random = Math.random() * totalWeight;
        let accumulatedWeight = 0;
        for (let i = 0; i < this.allFruits.length; i++) {
            accumulatedWeight += this.allFruits[i].weight;
            if (random < accumulatedWeight) {
                this.fruitToWin = this.allFruits[i];
                return this.allFruits[i];
            }
        }
    }
    getRandomFruitWithoutWeights() {
        let random = Math.floor(Math.random() * this.allFruits.length);
        this.fruitToWin = this.allFruits[random];
        return this.allFruits[random];
    }

    buildTweens(isLast: boolean){
            this.scene.tweens.add({
                targets: this.allReelFruits,
                y: this.allReelFruits[7].y, // Move o objeto para fora da tela na parte inferior
                duration: 800, // Duração da animação em milissegundos
                ease: 'cubic.inout', // Tipo de easing
                delay: 20,
                repeat: 5,
                onComplete: () => { 
                    this.allReelFruits[0].y= this.y - 400;
                    this.allReelFruits[1].y= this.y - 300;
                    this.allReelFruits[2].y= this.y - 200;
                    this.allReelFruits[3].y= this.y - 100;
                    this.allReelFruits[4].y= this.y;
                    this.allReelFruits[5].y= this.y + 100;
                    this.allReelFruits[6].y= this.y + 200;
                    this.allReelFruits[7].y= this.y + 300;
                    if (isLast) {
                        this.allReelFruits[4].setTexture(this.randomFruit.fruit);
                        if(this.allReelFruits[4].texture.key === this.fruitToWin.fruit) {
                            console.log("just right")
                        }
                    }
                } 
            });
        }

    startSpin() {  
        this.randomFruit = this.getRandomFruitWithoutWeights();
        console.log(this.randomFruit.fruit)
        if(this.allReelFruits.length > 0 ){
            for (let i = 0; i < this.allReelFruits.length; i++) {
            this.buildTweens(i === this.allReelFruits.length - 1)}
        }else{
            console.error("Os rolos não foram inicializados corretamente.");
        }
    } 

    // fasttween(){
    //     let counter = 0
    //     while(counter < 12){
    //         this.allReelFruits.forEach((element,index) => {
    //             this.scene.tweens.add({
    //                targets: element,
    //                y: element.y +100 , // Move o objeto para fora da tela na parte inferior
    //                duration: 100, // Duração da animação em milissegundos
    //                ease: 'Linear', // Tipo de easing
    //                onComplete: () => { 
    //                 if (!this.scene.cameras.main.worldView.contains(element.x, element.y)) {
    //                     element.destroy();
    //                     this.allReelFruits.push.splice(index, 1);
    //                     // Adiciona a próxima fruta
    //                     const newFruit = this.reel.create(this.x, this.y - 300, this.allFruits[index +1 ].fruit);
    //                     this.allReelFruits.push.push(newFruit);
    //                 }
    //                },
    //            });
    //        });
    //         counter++
           
    //     }
    // }


    // checkAndSpawnNextFruit(element: Phaser.GameObjects.Sprite, index: number) {
    //     if (!this.scene.cameras.main.worldView.contains(element.x, element.y)) {
    //         let nextIndex = 0;
    //         this. allFruits.forEach((fruit, fruitindex) => fruit.fruit === element.texture.key ? nextIndex = fruitindex + 1 : '')
    //         if (nextIndex >= this.allFruits.length) { nextIndex = 0; }
    //         const nextFruit = this.allFruits[nextIndex].fruit;
            
    //         element.destroy();
    //         this.activeFruits.splice(index, 1);
    //         // Adiciona a próxima fruta
    //         const newFruit = this.reel.create(this.x, this.y - 300, nextFruit);
    //         this.activeFruits.push(newFruit);
    //     }
    // }

}