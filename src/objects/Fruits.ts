export interface Fruit {
    fruit: string;
    weight: number;
    payment: number;
}

export default class Fruits {
    fruits: Fruit[];
    selectedFruits: String[] = [];

    constructor() {
        this.fruits = [
            {fruit : 'banana', weight : 8, payment: 10},
            {fruit : 'apple', weight : 6, payment: 15},
            {fruit : 'cherry', weight : 4, payment: 50},
            {fruit : 'orange', weight : 8, payment: 10},
            {fruit : 'lemon', weight : 6, payment: 25},
            {fruit : 'grape', weight : 8, payment: 10},
            {fruit : 'watermelon', weight : 6, payment: 20},
            {fruit : 'slot', weight : 1, payment: 100}
        ];
    }
    getFruits() {
        return this.fruits;
    }

    setSelectFruits(fruit: String) {
        this.selectedFruits.push(fruit);
    }
    getSelectedFruits() {
        return this.selectedFruits;
    }
}