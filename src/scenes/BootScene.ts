//Fruits
import bananaImg from '@assets/fruits/banana.png';
import appleImg from '@assets/fruits/apple.png';
import cherryImg from '@assets/fruits/cherry.png';
import orangeImg from '@assets/fruits/orange.png';
import lemonImg from '@assets/fruits/lemon.png';
import grapeImg from '@assets/fruits/grape.png';
import watermelonImg from '@assets/fruits/watermelon.png';
import barImg from '@assets/fruits/bar.png';
//UI
import frame from '@assets/ui/frame.png';
import background from '@assets/ui/bg.png';
import winLine from '@assets/ui/winline.png';
//Button
import button from '@assets/ui/button/play_button_0.png';
import buttonSelected from '@assets/ui/button/play_button_1.png';
import buttonDisabled from '@assets/ui/button/play_button_3.png';
export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload(): void {
    // UI
    this.load.image('frame', frame);
    this.load.image('background', background);
    this.load.image('winLine', winLine);
    //  - Button assets
    this.load.image('button', button);
    this.load.image('buttonSelected', buttonSelected);
    this.load.image('buttonDisabled', buttonDisabled);
    // Fruits
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
