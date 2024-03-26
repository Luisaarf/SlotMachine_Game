import Balance from '@objects/Balance';
import Reel from '@objects/Reel';
import Button from '@objects/Button';
import MiddleLine from '@objects/MiddleLine';
import SlotMath from '@objects/SlotMath';
export class GameScene extends Phaser.Scene {
  cameraWidth: number;
  cameraHeight: number;
  isMobile: boolean;
  reel1: Reel;
  reel2: Reel;
  reel3: Reel;
  button: Button;
  middleLine: MiddleLine;
  balance: Balance;
  slotMath : SlotMath;
  arraySortedFruits: string[] = [];

  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    let backgroundImage = this.add.image(0, 0, 'background').setOrigin(0).setDepth(-1);
      backgroundImage.displayWidth = this.sys.canvas.width;
      backgroundImage.displayHeight = this.sys.canvas.height;
  }

  create(): void {
    this.cameraWidth = this.cameras.main.width;
    this.cameraHeight = this.cameras.main.height;
    this.slotMath = new SlotMath();
    this.isMobile = window.innerWidth < 768;
    this.balance = new Balance(this, this.cameraWidth, this.cameraHeight, this.isMobile, 100);
    this.createReels();
    const middleLine = new MiddleLine(this, this.cameraWidth/2, this.cameraHeight/2);
    this.button = new Button(this, this.cameraWidth/1.2, this.isMobile? 50: this.cameraHeight/1.5, 'button', 'Girar', this.onPointerDown.bind(this), this.onPointerUp.bind(this));
    this.button.setInteractive();
  }

  public onPointerDown() {
    this.balance.subtractFromValue(10);
  }

  public onPointerUp() {
    this.spinReels();
  }

  // Cria os retângulos que representam os rolos da máquina
  public createReels() {
    let arrayFruitsNames: string[] = this.slotMath.getFruitsNamesArray();
    // const frameSlot = this.add.image(this.cameraWidth/2.46, this.cameraHeight/2, 'frame').setDepth(1);
    const frameSlot = this.add.image(this.cameraWidth/2.46, this.cameraHeight/2, 'frame').setDepth(1);
    frameSlot.setScale(1.5);
    const winLine = this.add.image(this.cameraWidth/2.5, this.cameraHeight/2, 'winLine').setDepth(1);
    winLine.setScale(1.8);
    let slotRectx =  frameSlot.x;
    const slotRecty =  this.cameraHeight/2;
    this.reel1 = new Reel(this, slotRectx - 200, slotRecty,1, arrayFruitsNames);
    this.reel1.createFirstFruits();
    this.reel2 = new Reel(this,slotRectx , slotRecty,2, arrayFruitsNames);
    this.reel2.createFirstFruits();
    this.reel3 = new Reel(this, slotRectx + 200, slotRecty,3, arrayFruitsNames);
    this.reel3.createFirstFruits();
  }

  checkWin(){         
    if(this.arraySortedFruits[0] === this.arraySortedFruits[1] && this.arraySortedFruits[1] === this.arraySortedFruits[2]){
        // this.middleLine.ChangeColor(0x0000ff);
        // this.fruits.map(fruit => {
        //     if(fruit.fruit === this.arrayFruits[0].fruit){
        //         this.balance.addToValue(fruit.payment);
        //         this.balanceText.setText(`Saldo: ${this.balance.getValue()}`);
        //     }
        // });
        console.log('Você ganhou!')
      }else{

        console.log('Você perdeu!')
      }
    this.arraySortedFruits = [];      
    if (this.balance.getValue() >= 10) {
        this.button.setButtonTexture('button');
        this.button.setInteractive();
    }
}


  public spinReels() {
    let arrayofReels = [this.reel1, this.reel2, this.reel3];
    for (let i = 0; i < 3; i++) {
        this.slotMath.getRandomFruitByWeight();
        arrayofReels[i].setChosenFruit(this.slotMath.chosenFruit.fruit);
    }
    this.arraySortedFruits.push(this.reel1.startSpin());
     this.arraySortedFruits.push(this.reel2.startSpin());
     this.arraySortedFruits.push(this.reel3.startSpin());
    this.time.addEvent({ // Fix: Access the 'time' property through 'scene.sys' instead of 'this.scene'
      delay: 5500,
      callback: ()=>{
        this.checkWin();
      },
    })
    
  }
}
