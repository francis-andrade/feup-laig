/**
 *CircularAnimation
 *@brief - constructor of CircularAnimation
 *@param scene - scene the object this Animation is going to move belongs to
 *@param speed - speed of the Animation
 *@param center - center of the Animation
 *@param initialAngle - initial angle of the Animation
 *@param rotationAngle - total rotation angle of the Animation
 */
function CircularAnimation(scene, speed, center, radius, initialAngle, rotationAngle, startTime = 0) {
    Animation.call(this, scene, startTime);
    this.center = center;
    this.radius = radius;
    this.speed = speed;
    this.initialAngle = initialAngle * Math.PI / 180;
    this.rotationAngle = rotationAngle * Math.PI / 180;
    this.totalTime = Math.abs((this.rotationAngle * this.radius) / this.speed);
};

CircularAnimation.prototype = Object.create(Animation.prototype);
CircularAnimation.prototype.constructor = CircularAnimation;

/**
*transform
*@brief - performs the Animation
*@param time - time in seconds since the start of the Animation
*/
CircularAnimation.prototype.transform = function (time, currentAnimation = 1) {
    if (time >= this.startTime) {
        var angularSpeed = this.speed / this.radius;
        //var tmpRotationAngle =Math.min(angularSpeed*time, this.rotationAngle);
        if (angularSpeed * time <= this.rotationAngle) {
            this.scene.translate(this.center[0], this.center[1], this.center[2]);
            this.scene.rotate(this.initialAngle + angularSpeed * time, 0, 1, 0);
            this.scene.translate(-this.radius, 0, 0);
        }
        else if (this.relativeAnimation == 1 || currentAnimation == 1) {
            this.scene.translate(this.center[0], this.center[1], this.center[2]);
            this.scene.rotate(this.initialAngle + this.rotationAngle, 0, 1, 0);
            this.scene.translate(-this.radius, 0, 0);
        }
    }
}



