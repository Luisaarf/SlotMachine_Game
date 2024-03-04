import Fruits, {Fruit}  from './Fruits';
import Button from './Button'
export default class Reel extends Phaser.GameObjects.Container {
    private reel: Phaser.GameObjects.Group;
    private rectangle: Phaser.GameObjects.Rectangle;
    activeFruits: Phaser.GameObjects.Sprite[] = []; // frutas que estarão na tela
    fruitsObj = new Fruits;
    allFruits = new Fruits().getFruits();
    numberOfFruits = this.allFruits.length;
    tweens: any;
    fruitToWin : Fruit;

    constructor(scene: Phaser.Scene, x: number, y: number, rectangle : Phaser.GameObjects.Rectangle) {
        super(scene, x, y);
        this.reel = this.scene.add.group(); 
        // this.activeFruits.push(this.reel.create(x, y, this.allFruits[0].fruit));
        // for(let i = 1; i <= 3; i++){ //cria frutas pré-existentes
        //     this.activeFruits.push(this.reel.create(x,y + i*100, this.allFruits[i].fruit));
        //     this.activeFruits.push(this.reel.create(x,y - i*100, this.allFruits[i].fruit));
        //     this.activeFruits.push(this.reel.create(x,y - i*100, this.allFruits[i].fruit));
        // }
        // this.reel.create(x, y + 200, this.fruits[2].fruit);
        // this.reel.create(x, y - 100, this.fruits[this.numberOfFruits - 1].fruit);
        // this.reel.create(x, y - 200, this.fruits[this.numberOfFruits - 2].fruit);

        this.rectangle = rectangle;
    }

    createFirstFruits(){
        this.activeFruits.push(this.reel.create(this.x, this.y, this.allFruits[0].fruit));
        for(let i = 1; i <= 3; i++){ //cria frutas pré-existentes
            this.activeFruits.push(this.reel.create(this.x,this.y + i*100, this.allFruits[i].fruit));
            this.activeFruits.push(this.reel.create(this.x,this.y - i*100, this.allFruits[this.allFruits.length - i].fruit));
        }
        console.log(this.activeFruits.map((element) => element.texture.key), 'array')
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

    startSpin(reelNum : number) {
        console.log(this.activeFruits, 'array')
        console.log(this.activeFruits.map((element) => element.texture.key), 'array')
        this.activeFruits.forEach((element,index) => {
            console.log(element.y, element.texture.key)
            //adicionar outro tween para apenas rodar aleatóriamente por um tempo ? 
            const tween = this.scene.tweens.add({
                targets: element,
                y: element.y +100 , // Move o objeto para fora da tela na parte inferior
                duration: 100, // Duração da animação em milissegundos
                ease: 'Linear', // Tipo de easing
                onComplete: () => { 
                    this.checkAndSpawnNextFruit(element, index);
                    if(element.y === 316){ //definir melhor o 316 colocando um colisor
                        if(element.texture.key === this.fruitToWin.fruit) {
                            console.log("just right")
                        }
                    }
                },
            });
        });
    } 


    checkAndSpawnNextFruit(element: Phaser.GameObjects.Sprite, index: number) {
        if (!this.scene.cameras.main.worldView.contains(element.x, element.y)) {
            let nextIndex = 0;
            this. allFruits.forEach((fruit, fruitindex) => fruit.fruit === element.texture.key ? nextIndex = fruitindex + 1 : '')
            if (nextIndex >= this.allFruits.length) { nextIndex = 0; }
            const nextFruit = this.allFruits[nextIndex].fruit;
            
            element.destroy();
            this.activeFruits.splice(index, 1);
            // Adiciona a próxima fruta
            const newFruit = this.reel.create(this.x, this.y - 300, nextFruit);
            this.activeFruits.push(newFruit);
        }
    }

}