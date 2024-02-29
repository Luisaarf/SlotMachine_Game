import bananaImg from '@assets/fruits/Banana_96x96.png';
import appleImg from '@assets/fruits/Apple_96x96.png';
import cherryImg from '@assets/fruits/Cherry_96x96.png';
import orangeImg from '@assets/fruits/Orange_96x96.png';
import lemonImg from '@assets/fruits/Lemon_96x96.png';
import grapeImg from '@assets/fruits/Red_Grape_96x96.png';
import watermelonImg from '@assets/fruits/Watermelon_96x96.png';
import slotImg from '@assets/fruits/slot.png';
import yellowButtonM from '@assets/ui/CGB02-yellow_M_btn.png';
import yellowButtonS from '@assets/ui/CGB02-yellow_S_btn.png';
export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload(): void {
    this.load.image('buttonM', yellowButtonM);
    this.load.image('buttonS', yellowButtonS);
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
