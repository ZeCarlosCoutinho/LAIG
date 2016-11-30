/**
 * MyPiece
 * @constructor
 */
function MyPiece(scene, player, size) {
 	CGFobject.call(this,scene);

 	this.player = player;
 	this.size = size;
};

MyPiece.prototype = Object.create(CGFobject.prototype);
MyPiece.prototype.constructor = MyPiece;

MyPiece.prototype.display = function(){
    this.scene.pushMatrix();
        if(this.player == "red")
            this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.playerMaterials[this.player].apply();
		this.scene.pieceObjects[this.size].display();
	this.scene.popMatrix();
}

