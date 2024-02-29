import Balance from '@objects/Balance';
import Reel from '@objects/Reel';
import Button from '@objects/Button';
export class GameScene extends Phaser.Scene {

  reel1: Reel;
  reel2: Reel;
  reel3: Reel;
  button: Button;

  constructor() {
    super({ key: 'GameScene' });
  }
  
  balance = new Balance(100);


  init(): void {}

  create(): void {
    const cameraWidth= this.cameras.main.width;
    const cameraHeight= this.cameras.main.height;
    this.createRectangles(cameraWidth, cameraHeight);
    console.log(this.reel1);
    const balanceText = this.add.text( cameraWidth < 600? cameraWidth/4: cameraWidth/1.3, cameraWidth < 600? 50: cameraHeight/4, `Saldo: ${this.balance.getValue()}`, { fontSize: '24px', color: '#ffffff' });
    const button = new Button(this, cameraWidth/1.2, cameraWidth < 600? 50: cameraHeight/1.5, cameraWidth < 600? 'buttonS': 'buttonM', 'Girar', 0.5, this.reel1, this.reel2, this.reel3);
  }

  preload(): void {}

  update(): void {}


  // Cria os retângulos que representam os rolos da máquina
  public createRectangles(camWidth: number, camHeight: number) {
    const slotRect1 = this.add.rectangle(camWidth < 600? camWidth/3: camWidth/4, camHeight/2, camWidth * 0.15, 350);
    slotRect1.setStrokeStyle(2, 0xcedce6);
    this.reel1 = new Reel(this, slotRect1.x, slotRect1.y, slotRect1);
    const slotRect2 = this.add.rectangle(slotRect1.x + slotRect1.width, camHeight / 2, camWidth * 0.15, 350);
    slotRect2.setStrokeStyle(2, 0xcedce6);
    this.reel2 = new Reel(this, slotRect2.x, slotRect2.y, slotRect2);
    const slotRect3 = this.add.rectangle(slotRect2.x + slotRect2.width, camHeight / 2, camWidth * 0.15, 350);
    slotRect3.setStrokeStyle(2, 0xc3dce6);
    this.reel3 = new Reel(this, slotRect3.x, slotRect3.y, slotRect3);
  }
}
