/**
 * MyObject
 * @param gl {WebGLRenderingContext}
 * @constructor
 */

function MyQuad(scene, x1, y1, x2, y2) {
	CGFobject.call(this, scene);

	// var deltaX = x2 - x1;
	// var deltaY = y1 - y2;

	this.minS = 0;
	this.minT = 0;
	this.maxS = 1; //deltaX / ampFactor;
	this.maxT = 1; //deltaY / ampFactor;

	this.initBuffers2(x1, y1, x2, y2);
};

MyQuad.prototype = Object.create(CGFobject.prototype);
MyQuad.prototype.constructor = MyQuad;

MyQuad.prototype.initBuffers = function () {
	this.initGLBuffers();
};


MyQuad.prototype.initBuffers2 = function (x1, y1, x2, y2) {
	this.vertices = [
		x1, y2, 0,
		x2, y2, 0,
		x1, y1, 0,
		x2, y1, 0,
	];

	this.indices = [
		0, 1, 2,
		3, 2, 1
	];

	this.texCoords = [
		this.minS, this.maxT,
		this.maxS, this.maxT,
		this.minS, this.minT,
		this.maxS, this.minT
	];
	this.primitiveType = this.scene.gl.TRIANGLES;

	this.normals = [
		0, 0, 1,
		0, 0, 1,
		0, 0, 1,
		0, 0, 1
	];

	this.initGLBuffers();
};

MyQuad.prototype.amplifFactors = function(ampFactorS, ampFactorT){
	var deltaX = x2 - x1;
	var deltaY = y1 - y2;

	this.texCoords = [
		0, deltaY / ampFactorT,
		deltaX / ampFactorS, deltaY / ampFactorT,
		0, 0,
		deltaX / ampFactorS, 0
	];

	this.updateTexCoordsGLBuffers();
}