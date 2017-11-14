function CircularAnimation(scene, speed, center, radius, initialAngle, rotationAngle) {
    Animation.apply(this, [scene, speed] );
    this.center=center;
    this.radius=radius;
    this.initialAngle=initialAngle;
    this.rotationAngle=rotationAngle;
};

CircularAnimation.prototype.transform=function(time){
    this.scene.translate(cente[0], center[1], center[2]);
    var angularSpeed=this.speed/this.radius;
    var rotationAngle =Math.min(angularSpeed*time, this.rotationAngle);
    this.scene.rotate(0,1,0,rotationAngle);
    this.scene.translate(radius, 1, 0, 0);

}

CircularAnimation.prototype = Object.create(Animation.prototype);
CircularAnimation.prototype.constructor = LinearAnimation;

