import 'phaser';
import { BootScene } from '@scenes/BootScene';
import { GameScene } from '@scenes/GameScene';

export class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

window.addEventListener('load', () => {
  const cfg: Phaser.Types.Core.GameConfig = {
    width: 1920,
    height: 1080,
    scale: {
      mode: Phaser.Scale.ScaleModes.RESIZE,
      autoCenter: Phaser.Scale.CENTER_BOTH
  },
    type: Phaser.AUTO,
    parent: 'game',
    scene: [BootScene, GameScene],
    input: {
      keyboard: true,
    },
    physics: {
      default: 'arcade',
      arcade: {
        gravity: {
          y: 1000,
        },
        debug: false,
      },
    },
    backgroundColor: '#222',
    render: {
      pixelArt: false,
      antialias: false,
    },
  };

  const game = new Game(cfg);


  // Callback chamado quando a janela do navegador é redimensionada
  window.addEventListener('resize', () => {
    resizeGame();
  });
  
  function resizeGame() {
    //const canvas = document.querySelector('canvas');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    // Atualize o tamanho do canvas do jogo
    game.scale.resize(windowWidth, windowHeight);
  }
});
