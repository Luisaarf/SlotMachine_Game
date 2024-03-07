export default class MiddleLine extends Phaser.GameObjects.Container {
    startX : number;
    startY : number;
    endX : number ;
    endY : number ;
    thickness: number ; 
    color : number ; // Cor branca
    cameraWidth: number;
    cameraHeight: number;
    graphics : Phaser.GameObjects.Graphics;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);
        this.cameraWidth= x *2;
        this.cameraHeight= y *2;

    }

    create() {
        // Cria um objeto Graphics
        this.graphics = this.scene.add.graphics();

        // Configura a linha
        this.startX = this.x *2/6;
        this.startY = this.cameraHeight/2;
        this.endX = this.cameraWidth/1.6;
        this.endY = this.cameraHeight/2;
        this.thickness = 2;
        this.color = 0xffffff;
        // Desenha a linha
        this.graphics.lineStyle(this.thickness, this.color);
        this.graphics.beginPath();
        this.graphics.moveTo(this.startX, this.startY);
        this.graphics.lineTo(this.endX, this.endY);
        this.graphics.strokePath();
    }

    ChangeColor(color: number) {
            this.graphics.clear(); // Clear previous line style
            this.graphics.lineStyle(2, color, 1); // Set line color
            this.graphics.beginPath();
            this.graphics.moveTo(this.startX, this.startY);
            this.graphics.lineTo(this.endX, this.endY);
            this.graphics.strokePath()
            this.color= color;
            this.scene.time.addEvent({
                delay: 500,
                callback: () => {
                    if (this.color === color) {
                        // Define o estilo da linha de volta para branco
                        this.graphics.clear();
                        this.graphics.lineStyle(2, 0xffffff, 1);
                        this.color = 0xffffff;
                    } else {
                        // Define o estilo da linha de volta para azul
                        this.graphics.clear();
                        this.graphics.lineStyle(2, color, 1);
                        this.color = color;
                    }
                    this.graphics.beginPath();
                    this.graphics.moveTo(this.startX, this.startY);
                    this.graphics.lineTo(this.endX, this.endY);
                    this.graphics.strokePath();
                },
                callbackScope: this,
                repeat: 2
            });
    }
}
