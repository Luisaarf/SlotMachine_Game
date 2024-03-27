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
| isMobile          | boolean        | True if the window's innerWidth is equal to < 768                                                                                |
| arraySortedFruits | array : string | Stores the fruits that have been sorted before                                                                          |
| OnPointerDown     | function       | Reference to button, it substracts from balance value                                                                   |
| OnPointerUp       | function       | Reference to button, it makes the reels spin                                                                            |
| checkWin          | function       | Called when the reels stop spinning, has a condition to check if all fruits sorted are equal and changes button texture |
| createReels       | function       | Creates not only reels but also the frame and winline                                                                   |
| spinReels         | function       | After get random fruit by weight it makes the reels spin                                                                |

### Reel

### Button

### SlotMath

### Balance
### WinLine
