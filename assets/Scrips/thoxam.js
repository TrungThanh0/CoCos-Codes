
cc.Class({
    extends: cc.Component,

    properties: {
    },

    start () {

        cc.tween(this.node)
        .hide()
        .delay(5)
        .show()        
        .to(0.5, { position: cc.v2(80, 300) })
        .to(0.5,{ position:cc.v2(80,225)})
        .delay(1)
        .to(0.5, { position: cc.v2(80, 300) })
        .to(0.5,{ position:cc.v2(80,225)})
        .delay(1)
        .to(0.5, { position: cc.v2(80, 300) })
        .to(0.5,{ position:cc.v2(80,225)})
        .start()        
    },

    
});