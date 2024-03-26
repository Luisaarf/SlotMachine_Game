export interface Fruit {
    fruit: string;
    weight: number;
    payment: number;
}

export default class SlotMath {
    fruitsData: Fruit[];
    selectedFruits: String[] = [];
    chosenFruit: Fruit;

    constructor() {
        this.fruitsData = [
            {fruit : 'banana', weight : 8, payment: 10},
            {fruit : 'apple', weight : 6, payment: 15},
            {fruit : 'cherry', weight : 4, payment: 50},
            {fruit : 'orange', weight : 8, payment: 10},
            {fruit : 'lemon', weight : 6, payment: 25},
            {fruit : 'grape', weight : 8, payment: 10},
            {fruit : 'watermelon', weight : 6, payment: 20},
            {fruit : 'bar', weight : 1, payment: 100}
        ];
    }

    setSelectFruits(fruit: String) {
        this.selectedFruits.push(fruit);
    }
    
    getFruitsNamesArray() {
        const fruits : string[] = this.fruitsData.map(fruit => fruit.fruit);
        return fruits;
    }

    getRandomFruitByWeight() {
        const totalWeight = this.fruitsData.reduce((acc, fruit) => acc + fruit.weight, 0);
        const random = Math.random() * totalWeight;
        let accumulatedWeight = 0;
        for (let i = 0; i < this.fruitsData.length; i++) {
            accumulatedWeight += this.fruitsData[i].weight;
            if (random < accumulatedWeight) {
                this.chosenFruit = this.fruitsData[i];
                this.setSelectFruits(this.chosenFruit.fruit);
                return this.fruitsData[i];
            }
        }
    }
}