import mainScene from "./scenes/mainScene.js"
const config = {
    type: Phaser.AUTO,
    width: 1080,
    height: 1000,
    parent: 'game', 
    scene: [mainScene,]
}

new Phaser.Game(config)