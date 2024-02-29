import Balance from '@objects/Balance';
import Reel from '@objects/Reel';

export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }
  
  balance = new Balance(100);


  init(): void { console.log(this.balance)
  console.log(this.balance.getValue());}

  create(): void {
    console.log(this.cameras.main.width, this.cameras.main.height)
    const slotRect1 = this.add.rectangle(this.cameras.main.width / 4, this.cameras.main.height / 2, this.cameras.main.width * 0.15, 350);
    slotRect1.setStrokeStyle(2, 0xcedce6);
    const reel1 = new Reel(this, slotRect1.x, slotRect1.y, slotRect1);
    const slotRect2 = this.add.rectangle(slotRect1.x + slotRect1.width, this.cameras.main.height / 2, this.cameras.main.width * 0.15, 350);
    slotRect2.setStrokeStyle(2, 0xcedce6);
    const reel2 = new Reel(this, slotRect2.x, slotRect2.y, slotRect2);
    const slotRect3 = this.add.rectangle(slotRect2.x + slotRect2.width, this.cameras.main.height / 2, this.cameras.main.width * 0.15, 350);
    slotRect3.setStrokeStyle(2, 0xc3dce6);
    const reel3 = new Reel(this, slotRect3.x, slotRect3.y, slotRect3);
  }

  preload(): void {}

  update(): void {}
}
