import bananaImg from '@assets/fruits/banana.png';
import appleImg from '@assets/fruits/apple.png';
import cherryImg from '@assets/fruits/cherry.png';
import orangeImg from '@assets/fruits/orange.png';
import lemonImg from '@assets/fruits/lemon.png';
import grapeImg from '@assets/fruits/grape.png';
import watermelonImg from '@assets/fruits/watermelon.png';
import barImg from '@assets/fruits/bar.png';
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
    this.load.image('bar', barImg);
  }

  update(): void {
    this.scene.start('GameScene');
  }
}
