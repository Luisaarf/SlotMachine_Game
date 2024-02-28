
export default class Balance{
    private value: number;
    addToValue(amount: number){
        this.value += amount;
    }
    subtractFromValue(amount: number){
        this.value -= amount;
    }
    getValue(){
        return this.value;
    }
    

    constructor( value: number){
        this.value = value;
        // this.balanceText = this.scene.add.text(10, 10, 'Balance: $0', { fontSize: '32px', fill: '#fff' });
    }

}