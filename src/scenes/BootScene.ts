import phaserImg from '@assets/phaser.png';
import bananaImg from '@assets/fruits/Banana_96x96.png';
import { TEXTURE_KEY as PHASER_TEXTURE_KEY } from '@objects/PhaserImg';

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload(): void {
    this.load.image(PHASER_TEXTURE_KEY, phaserImg);
    this.load.image('banana', bananaImg);
  }

  update(): void {
    this.scene.start('GameScene');
  }
}
