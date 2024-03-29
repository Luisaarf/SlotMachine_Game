Slot Machine Game
---

Simple Slot Machine Game using [phaser.io](https://phaser.io), Typescript and Webpack.

### install
```
npm install
```
### development /// run game
```
npm run dev
```
## Game Image
![Image of Game](https://github.com/Luisaarf/SlotMachine_Game/blob/main/assets/screengame.png)

## Classes

- [GameScene](#gamescene)
- [Reel](#reel)
- [Button](#button)
- [SlotMath](#slotmath)
- [Balance](#balance)
- [WinLine](#winline)

## Entity Relationship Diagram
![ER Diagram](https://github.com/Luisaarf/SlotMachine_Game/blob/main/assets/diagram.png)

### GameScene 

| Members           | Type           | Purpose                                                                                                                 |
|-------------------|----------------|-------------------------------------------------------------------------------------------------------------------------|
| cameraHeight      | number         | The 'main' camera's height                                                                                              |
| cameraWidth       | number         | The 'main' camera's width                                                                                               |
| isMobile          | boolean        | True if the window's innerWidth is equal to < 768                                                                       |
| arraySortedFruits | array : string | Stores the fruits that have been sorted before                                                                          |
| OnPointerDown     | method         | Reference to button, it substracts from balance value                                                                   |
| OnPointerUp       | method         | Reference to button, it makes the reels spin                                                                            |
| checkWin          | method         | Called when the reels stop spinning, has a condition to check if all fruits sorted are equal and changes button texture |
| createReels       | method         | Creates not only reels but also the frame and winline                                                                   |
| spinReels         | method         | After getting random fruit by weight it makes the reels spin                                                            |

### Reel

| Members           | Type           | Purpose                                                                                          |
|-------------------|----------------|--------------------------------------------------------------------------------------------------|
| reelGroup         | Group          | It stores all Fruit Game Objects on display                                                      |
| entries           | Sprite[]       | Reference to the Sprites of all Game Objects stored in reelGroup                                 |
| chosenFruit       | string         | Stores the fruit sorted by weight                                                                |
| reelNumber        | number         | It makes easy to identify which reel we are handling                                             |
| arrayFruitsNames  | array : string | Stores all name of the available fruits                                                          |
| checkWinCallback  | method         | Calls the checkWin method in GameScene                                                           |
| setChosenFruit    | method         | Set value of the variable chosenFruit                                                            |
| createFirstFruits | method         | Create the fruits to display before the reels start spinning                                     |
| buildTweens       | method         | It starts the animation, changing the texture each loop and calling to check win when it finishes|
| startSpin         | method         | It calls the method to run animation                                                             |

checkCondition method embedded in buildTweens

### Button
| Members          | Type   | Purpose                     |
|------------------|--------|-----------------------------|
| buttonImage      | Image  | Reference to button's image |
| setButtonTexture | method | Changes button's texture    |

### SlotMath
| Members                | Type          | Purpose                                 |
|------------------------|---------------|-----------------------------------------|
| Fruit                  | Interface     | Structure to the object fruit           |
| fruitsData             | array : Fruit | Store all fruits information to be used |
| selectedFruits         | array : string| Stores all fruits that have been chosen |
| chosenFruit            | Fruit         | To store the chosen fruit               |
| setSelectedFruits      | method        | Add to the array selectedFruits         |
| getFruitsNamesArray    | method        | Return an array with all fruit's names  |
| getRandomFruitByWeight | method        | Return random fruit, selected by weight |
| getPayment             | method        | Retrieve the payment value of the fruit |

### Balance

| Members         | Type   | Purpose                                |
|-----------------|--------|----------------------------------------|
| value           | number | Stores balance value                   |
| text            | Text   | Text on display                        |
| addToValue      | method | Add a value to the variable value      |
| subtractToValue | method | Subtract a value to the variable value |
| getValue        | method | Retrieve value variable                |
| updateText      | method | Used to update text when value changes |

### WinLine

| Members      | Type   | Purpose                                       |
|--------------|--------|-----------------------------------------------|
| winLine      | Image  | Line image on display                         |
| blue         | number | Blue color's hex                              |
| gray         | number | Gray color's hex                              |
| FlashWinLine | method | Make winLine image flash changing light color |
