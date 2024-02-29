export default class Fruits {
    fruits: string[];
    constructor() {
        this.fruits = [
            'banana',
            'apple',
            'cherry',
            'orange',
            'lemon',
            'grape',
            'watermelon'
        ];
    }
    getFruits() {
        return this.fruits;
    }
}