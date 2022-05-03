
cc.Class({
    extends: cc.Component,

    properties: {
        
    },
    flip() {
        return cc.tween().to(1, {
            scaleX: this.node.scaleX = -this.node.scaleX,
            scaleY: this.node.scaleY
        })
    },


    start () {
        cc.tween(this.node)
        .hide()
        .delay(10.5)
        .show()
        .delay(1)
        .to(1,{scale :2})
        .to(1,{scale :1})      
        .to(1, { position: cc.v2(500, 75) })
        .delay(1)
        .to(1,{ position:cc.v2(80,80)})
     
        .start();       
    },
    update (){
  

    }

});
