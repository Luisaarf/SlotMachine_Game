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

        this.entries = this.reelGroup.children.entries as Phaser.GameObjects.Sprite[];;
    }


    buildTweens(){
        console.log(this.chosenFruit)
        const randomNumInRange: number = Math.random() * 3;
        let numRound =Math.floor(this.reelNumber * 2 + randomNumInRange);
        for (let i = 0; i < 8; i++)
        {
            const ball = this.entries[i];
            let nextTextureIndex = (i === 7) ? 0 : (i + 1);

            this.scene.tweens.add({
                targets: ball,
                y: '+=700',
                duration: 500,
                // ease: 'Quad.easeInOut',
                ease: 'cubic.inout',
                loop: numRound,
                onLoop: (tween) => {
                    ball.setTexture(this.arrayFruitsNames[nextTextureIndex])  //nova textura
                    if(tween.loopCounter === 0  && i === 1){ //se for o último loop e i for 1
                        ball.setTexture(this.chosenFruit) //coloca a fruta escolhida 
                    }else{
                        nextTextureIndex = (nextTextureIndex === 7) ? 0 : (nextTextureIndex + 1);
                        ball.setTexture(this.arrayFruitsNames[nextTextureIndex]);
                    }
                },
                onComplete: () => {
                }
            });
            ball.y = this.y - 840 + (140 * i);
        }
        
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