
cc.Class({
    extends: cc.Component,

    properties: {
  
    },

    

    start () {
        cc.tween(this.node) 
        .hide()  
        .delay(2)
        .show()
        .delay(1)
        .to(1, {position: cc.v2(500, 420),rotation: 360 })            
        .start()

    },

    
});
