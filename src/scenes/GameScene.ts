import Balance from '@objects/Balance';
import Reel from '@objects/Reel';
import Button from '@objects/Button';
import WinLine from '@objects/WinLine';
import SlotMath from '@objects/SlotMath';
export class GameScene extends Phaser.Scene {
  cameraWidth: number;
  cameraHeight: number;
  isMobile: boolean;
  reel1: Reel;
  reel2: Reel;
  reel3: Reel;
  button: Button;
  winLine: WinLine;
  balance: Balance;
  slotMath : SlotMath;
  arraySortedFruits: string[];

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
    this.arraySortedFruits = [];
    this.slotMath = new SlotMath();
    this.isMobile = window.innerWidth < 768;
    this.balance = new Balance(this, this.cameraWidth, this.cameraHeight, this.isMobile, 100);
    this.createReels();
    this.button = new Button(this, this.cameraWidth/1.2, this.isMobile? 50: this.cameraHeight/1.5, 'button', 'Girar', this.onPointerDown.bind(this), this.onPointerUp.bind(this));
    this.button.setInteractive();
    
  }

  public onPointerDown() {     
    this.balance.subtractFromValue(10);
  }

  public onPointerUp() {
    this.spinReels();
  }
  
  public checkWin = (arrayFruits: string[]) => {   
    if(arrayFruits[0] === arrayFruits[1] && arrayFruits[1] === arrayFruits[2]){
      this.winLine.FlashWinLine();
      let paymentReturn = this.slotMath.getPayment(arrayFruits[0]);
      this.balance.addToValue(paymentReturn);
    }
    this.arraySortedFruits = [];      
    if (this.balance.getValue() >= 10) {
      this.button.setButtonTexture('button');
      this.button.setInteractive();
    }
  }
  
  // Cria os rolos da máquina
  public createReels() {
    let arrayFruitsNames: string[] = this.slotMath.getFruitsNamesArray();
    //Criando Frame e WinLine
    const frameSlot = this.add.image(this.cameraWidth/2.46, this.cameraHeight/2, 'frame').setDepth(1);
    frameSlot.setScale(1.5);
    this.winLine = new WinLine(this, this.cameraWidth/2.5, this.cameraHeight/2);

    let slotRectx =  frameSlot.x;
    const slotRecty =  this.cameraHeight/2;
    this.reel1 = new Reel(this, slotRectx - 200, slotRecty, 1, arrayFruitsNames, this.checkWin.bind(this));
    this.reel1.createFirstFruits();
    this.reel2 = new Reel(this, slotRectx , slotRecty, 2, arrayFruitsNames, this.checkWin.bind(this));
    this.reel2.createFirstFruits();
    this.reel3 = new Reel(this, slotRectx + 200, slotRecty,3, arrayFruitsNames, this.checkWin.bind(this));
    this.reel3.createFirstFruits();
  }

  public spinReels() {
    let arrayofReels = [this.reel1, this.reel2, this.reel3];
    for (let i = 0; i < 3; i++) {
        this.slotMath.getRandomFruitByWeight();
        arrayofReels[i].setChosenFruit(this.slotMath.chosenFruit.fruit);
        this.arraySortedFruits.push(this.slotMath.chosenFruit.fruit)
        //Para checar condição de vitória comentar duas linhas acima e descomentar as duas abaixo
        // arrayofReels[i].setChosenFruit('bar');
        // this.arraySortedFruits.push('bar');
    }
    this.reel1.startSpin(this.arraySortedFruits);
    this.reel2.startSpin(this.arraySortedFruits);
    this.reel3.startSpin(this.arraySortedFruits);
  }
}
