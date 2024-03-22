import Balance from '@objects/Balance';
import Reel from '@objects/Reel';
import Button from '@objects/Button';
import MiddleLine from '@objects/MiddleLine';
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

  constructor() {
    super({ key: 'GameScene' });
  }

  create(): void {
    this.cameraWidth = this.cameras.main.width;
    this.cameraHeight = this.cameras.main.height;
    this.isMobile = window.innerWidth < 768;
    this.balance = new Balance(this, this.cameraWidth, this.cameraHeight, this.isMobile, 100);
    this.createRectangles();
    const middleLine = new MiddleLine(this, this.cameraWidth/2, this.cameraHeight/2);
    const button = new Button(this, this.cameraWidth/1.2, this.cameraWidth < 600? 50: this.cameraHeight/1.5, this.cameraWidth < 600? 'buttonS': 'buttonM', 'Girar', 0.5, this.reel1, this.reel2, this.reel3, this.balance, middleLine);
  }

  // Cria os retângulos que representam os rolos da máquina
  public createRectangles() {
    const frameSlot = this.add.image(this.cameraWidth/2.46, this.cameraHeight/2, 'frame').setDepth(1);
    frameSlot.setScale(1.5);
    const winLine = this.add.image(this.cameraWidth/2.5, this.cameraHeight/2, 'winLine').setDepth(1);
    winLine.setScale(1.8);
    const slotRectx =  this.isMobile? this.cameraWidth/3 : this.cameraWidth/4;
    const slotRecty =  this.cameraHeight/2;
    this.reel1 = new Reel(this, slotRectx, slotRecty,1);
    this.reel1.createFirstFruits();
    this.reel2 = new Reel(this,slotRectx + 200 , slotRecty,2);
    this.reel2.createFirstFruits();
    this.reel3 = new Reel(this, slotRectx + 400, slotRecty,3);
    this.reel3.createFirstFruits();
  }
}
