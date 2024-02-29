import bananaImg from '@assets/fruits/Banana_96x96.png';
import appleImg from '@assets/fruits/Apple_96x96.png';
import cherryImg from '@assets/fruits/Cherry_96x96.png';
import orangeImg from '@assets/fruits/Orange_96x96.png';
import lemonImg from '@assets/fruits/Lemon_96x96.png';
import grapeImg from '@assets/fruits/Red_Grape_96x96.png';
import watermelonImg from '@assets/fruits/Watermelon_96x96.png';
import slotImg from '@assets/fruits/slot.png';
export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload(): void {
    this.load.image('banana', bananaImg);
    this.load.image('apple', appleImg);
    this.load.image('cherry', cherryImg);
    this.load.image('orange', orangeImg);
    this.load.image('lemon', lemonImg);
    this.load.image('grape', grapeImg)
    this.load.image('watermelon', watermelonImg);
    this.load.image('slot', slotImg);
  }

  update(): void {
    this.scene.start('GameScene');
  }
}
