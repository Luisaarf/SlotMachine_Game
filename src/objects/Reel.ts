import Button from './Button'
export default class Reel extends Phaser.GameObjects.Container {
    private reelGroup: Phaser.GameObjects.Group;
    entries : Phaser.GameObjects.Sprite[];
    chosenFruit : string;
    reelNumber: number;
    arrayFruitsNames: string[];


    constructor(scene: Phaser.Scene, x: number, y: number, reelNumber: number, arrayFruitsNames:string[]) {
        super(scene, x, y);
        this.reelGroup = this.scene.add.group(); 
        this.reelNumber = reelNumber;
        this.arrayFruitsNames = arrayFruitsNames;
    }

    setChosenFruit(fruit: string){
        this.chosenFruit = fruit;
    }
    
    createFirstFruits(){
        this.reelGroup.create(this.x, this.y -840, this.arrayFruitsNames[0]);
        this.reelGroup.create(this.x, this.y -700, this.arrayFruitsNames[1]);
        this.reelGroup.create(this.x, this.y -560, this.arrayFruitsNames[2]);
        this.reelGroup.create(this.x, this.y -420, this.arrayFruitsNames[3]);
        this.reelGroup.create(this.x, this.y -280, this.arrayFruitsNames[4]);
        this.reelGroup.create(this.x, this.y -140, this.arrayFruitsNames[5]);
        this.reelGroup.create(this.x, this.y, this.arrayFruitsNames[6]);
        this.reelGroup.create(this.x, this.y +140, this.arrayFruitsNames[7]);[]

        console.log(this.reelGroup.children.entries);
        this.entries = this.reelGroup.children.entries as Phaser.GameObjects.Sprite[];;
    }

    // rearrangeArray( arr : Phaser.GameObjects.GameObject[], fruitIndexes: number[]){
    //     const lastElement = fruitIndexes.pop(); 
    //     fruitIndexes.unshift(lastElement); 
    //     arr.forEach((fruit : Phaser.GameObjects.Sprite, index) => {
    //         fruit.setTexture(this.arrayFruitsNames[fruitIndexes[index]]);
    //     })

    // }

    buildTweens(){
        let indexArragement : number[] = [0, 1, 2, 3, 4, 5, 6, 7]
        const randomNumInRange: number = Math.random() * 5; // Contador de repetições
            this.scene.tweens.add({
                targets: this.reelGroup.getChildren(),
                y: '+=560', // Move o objeto para fora da tela na parte inferior
                duration: 900, // Duração da animação em milissegundos
                ease: 'cubic.inout', // Tipo de easing
                // delay: 20,
                repeat: 2 + this.reelNumber + randomNumInRange,
                onRepeat: () => {
                    const lastElement = indexArragement.pop(); 
                    indexArragement.unshift(lastElement); 
                    this.reelGroup.getChildren().forEach((fruit : Phaser.GameObjects.Sprite, index) => {
                        let fruitText : string = this.arrayFruitsNames[indexArragement[index]];
                        if(index === 0){
                            console.log(fruitText, 'fruitText')
                            fruit.setTexture('banana');
                        }
                        if (fruitText === 'bar') {
                            fruit.setTexture(fruitText);
                        }
                    })
                    
                },
                onComplete: () => { 
                    // console.log(this.reelNumber, randomNumInRange)
                    // console.log(this.chosenFruit.fruit, 'chosenFruit')
                    // console.log(this.entries[6].texture.key, 'fruitindex6')
                    // if(this.chosenFruit !=== this.entries[6].texture.key){
                    //     roda dnv? 
                    // }
                    //pega o array e coloca tudo como initial position 
                    this.reelGroup.getChildren().forEach((fruit: Phaser.GameObjects.Sprite, index: number) => {
                        fruit.y = this.y - 840 + (140 * index);
                    })
                } 
            });
    }

    startSpin() {  
        if(this.reelGroup.children.entries.length > 0 ){
                this.buildTweens();
        }else{
            console.error("Os rolos não foram inicializados corretamente.");
        }
        return this.chosenFruit;
    } 
}