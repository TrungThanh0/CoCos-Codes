

cc.Class({
    extends: cc.Component,

    properties: {
 
    },

 

    start () {       
        cc.tween(this.node)
        .delay(1)        
        .to(1, { position: cc.v2(500, 580) })
        .start()        
    },

    
});
