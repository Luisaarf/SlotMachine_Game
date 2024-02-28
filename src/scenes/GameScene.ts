import PhaserImg from '@objects/PhaserImg';
import Balance from '@objects/Balance';

export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }
  
  balance = new Balance(100);

  init(): void { console.log(this.balance)
  console.log(this.balance.getValue());}

  create(): void {
    console.log(this.cameras.main.width, this.cameras.main.height)
    const slotRect1 = this.add.rectangle(this.cameras.main.width / 2.5, this.cameras.main.height / 2, this.cameras.main.width * 0.2, 300);
    slotRect1.setStrokeStyle(2, 0xcedce6);
    const slotRect2 = this.add.rectangle(this.cameras.main.width / 4, this.cameras.main.height / 2, this.cameras.main.width * 0.2, 300);
    slotRect2.setStrokeStyle(2, 0xcedce6);
    const slotRect3 = this.add.rectangle(this.cameras.main.width / 1.8, this.cameras.main.height / 2, this.cameras.main.width * 0.2, 300);
    slotRect3.setStrokeStyle(2, 0xc3dce6);
    // const phaser = PhaserImg.create(this, 400, 100);

    // const particles = this.add.particles();
    // particles.setConfig({
    //   texture: 'particle',
    //   scale: { start: 1, end: 0 },
    //   speed: 100,
    //   blendMode: 'ADD',
    // });

    // particles.startFollow(phaser);
  }

  preload(): void {}

  update(): void {}
}
