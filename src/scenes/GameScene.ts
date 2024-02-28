import PhaserImg from '@objects/PhaserImg';
import Balance from '@objects/Balance';

export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }
  
  balance = new Balance(100);

  init(): void { console.log(this.balance)}

  create(): void {
    const phaser = PhaserImg.create(this, 400, 100);

    const particles = this.add.particles();
    particles.setConfig({
      texture: 'particle',
      scale: { start: 1, end: 0 },
      speed: 100,
      blendMode: 'ADD',
    });

    particles.startFollow(phaser);
  }

  preload(): void {}

  update(): void {}
}
