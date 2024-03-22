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
    this.createRectangles(this.cameraWidth, this.cameraHeight);
    const middleLine = new MiddleLine(this, this.cameraWidth/2, this.cameraHeight/2);
    const button = new Button(this, this.cameraWidth/1.2, this.cameraWidth < 600? 50: this.cameraHeight/1.5, this.cameraWidth < 600? 'buttonS': 'buttonM', 'Girar', 0.5, this.reel1, this.reel2, this.reel3, this.balance, middleLine);
  }

  // Cria os retângulos que representam os rolos da máquina
  public createRectangles(camWidth: number, camHeight: number) {
    const slotRect1 = this.add.rectangle(camWidth < 600? camWidth/3: camWidth/4, camHeight/2, camWidth * 0.15, 350);
    slotRect1.setStrokeStyle(2, 0xcedce6);
    this.reel1 = new Reel(this, slotRect1.x, slotRect1.y, slotRect1,1);
    this.reel1.createFirstFruits();
    const slotRect2 = this.add.rectangle(slotRect1.x + slotRect1.width, camHeight / 2, camWidth * 0.15, 350);
    slotRect2.setStrokeStyle(2, 0xcedce6);
    this.reel2 = new Reel(this, slotRect2.x, slotRect2.y, slotRect2,2);
    this.reel2.createFirstFruits();
    const slotRect3 = this.add.rectangle(slotRect2.x + slotRect2.width, camHeight / 2, camWidth * 0.15, 350);
    slotRect3.setStrokeStyle(2, 0xc3dce6);
    this.reel3 = new Reel(this, slotRect3.x, slotRect3.y, slotRect3,3);
    this.reel3.createFirstFruits();
  }
}
