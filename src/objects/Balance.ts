
export default class Balance{

    private value: number;
    private text : Phaser.GameObjects.Text;

    constructor( scene: Phaser.Scene, camWidth:number, camHeight : number, isMobile:boolean, value: number){
        this.value = value;
        camWidth = isMobile? camWidth/4 : camWidth/1.3;
        camHeight = isMobile? 50: camHeight/4 ;
        this.text = scene.add.text( camWidth, camHeight, `Saldo: ${this.getValue()}`, { fontSize: '24px', color: '#ffffff' });
    }
    
    addToValue(amount: number){
        this.value += amount;
        this.updateText();
    }

    subtractFromValue(amount: number){
        this.value -= amount;
        this.updateText();
    }

    getValue(){
        return this.value;
    }

    updateText(){
        this.text.setText(`Saldo: ${this.getValue()}`);
    }

}