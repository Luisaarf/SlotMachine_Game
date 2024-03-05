export default class MiddleLine extends Phaser.GameObjects.Container {
    startX : number;
    startY : number;
    endX : number ;
    endY : number ;
    thickness: number ; 
    color = 0xffffff ; // Cor branca

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);
    }

    create(width: number, height: number) {
        // Cria um objeto Graphics
        const graphics = this.scene.add.graphics();

        // Configura a linha
        this.startX = width/6;
        this.startY = height/2;
        this.endX = width/1.6;
        this.endY = height/2;
        this.thickness = 2;
        // Desenha a linha
        graphics.lineStyle(this.thickness, this.color);
        graphics.beginPath();
        graphics.moveTo(this.startX, this.startY);
        graphics.lineTo(this.endX, this.endY);
        graphics.strokePath();
    }

    ChangeColor(color: number) {
        this.color = color;
    }
}
