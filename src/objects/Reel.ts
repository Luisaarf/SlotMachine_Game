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
        const lastElement = arr.pop(); 
        arr.unshift(lastElement); 
    // Itera sobre cada elemento no array
        // arr.forEach(element => {
        //     // Verifica se o elemento é um Sprite
        //     if (element instanceof Phaser.GameObjects.Sprite) {
        //         console.log(element, 'element')
        //         const sprite = element as Phaser.GameObjects.Sprite;
        //         // console.log(sprite.texture.key, 'sprite')
        //         // const newTextureKey = 'banana'; // Defina a nova textura com base na lógica desejada
        //         sprite.setTexture(sprite.texture.key); // Atualiza a textura do sprite
        //     }
        // });
    }

    updateFruitTextures() {
        this.reelGroup.getChildren().forEach((fruit: Phaser.GameObjects.Sprite, index: number) => {
            const newTextureKey = this.entries[index].texture.key; // Obtém a nova textura para a fruta na posição atual
            fruit.setTexture(newTextureKey); // Define a nova textura para a fruta
        });
    }

    buildTweens(){
        // isLast: boolean
        const randomNumInRange: number = Math.random() * 5; // Contador de repetições
            this.scene.tweens.add({
                targets: this.reelGroup.getChildren(),
                y: '+=560', // Move o objeto para fora da tela na parte inferior
                duration: 400, // Duração da animação em milissegundos
                ease: 'cubic.inout', // Tipo de easing
                // delay: 20,
                repeat: 2 + this.reelNumber + randomNumInRange,
                onRepeat: () => {
                    this.rearrangeArray(this.reelGroup.getChildren());
                    console.log(this.reelGroup.getChildren())
                    this.entries = this.reelGroup.children.entries as Phaser.GameObjects.Sprite[];
                    this.updateFruitTextures()
                },
                onComplete: () => { 
                    console.log(this.reelNumber, randomNumInRange)
                    // console.log(this.chosenFruit.fruit, 'chosenFruit')
                    // console.log(this.entries[6].texture.key, 'fruitindex6')
                    if(this.chosenFruit.fruit === this.entries[6].texture.key){
                        console.log('é isso')
                    }
                } 
            });
    }

    startSpin() {  
        console.log('aqui')
        if(this.reelGroup.children.entries.length > 0 ){
                this.buildTweens();
        }else{
            console.error("Os rolos não foram inicializados corretamente.");
        }
        return this.chosenFruit.fruit;
    } 
}