export default class mainScene extends Phaser.Scene {
    constructor(){
        super('mainScene')
    }
    
    preload(){
        console.log('preload')
        this.load.image('papper', '../assets/papper.png')
    }
    build_map(){
        console.log('build_map')
    }

    create(){
        console.log('create')
        this.add.image(1080, 1000, 'papper')
        this.build_map()
    }
    
    update(){
        //console.log('update')
        
    }

}