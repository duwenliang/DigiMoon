function initGL() {
	
	var canvas = document.getElementById("webglMoon");	
	
	// Get the rendering context for WebGL
	var gl = null;
	gl = canvas.getContext("webgl");
	if (!gl) {
		console.log('Failed to get the rendering context for WebGL.');
	}
	
	canvas.width = 800;
	canvas.height = 600;
	
	gl.clearColor(0.3, 0.3, 0.3, 1.0);  //color (Red, Green, Blue, Alpha)
	gl.clear(gl.COLOR_BUFFER_BIT);
	
	return gl;
}



window.onload = function(){
	
	
	

	var gl = initGL();
	var ratio = window.devicePixelRatio || 1;
 function onresize() {
    var width = innerWidth;
    var height = innerHeight;
    gl.canvas.width = width * ratio;
    gl.canvas.height = height * ratio;
    gl.canvas.style.width = width + 'px';
    gl.canvas.style.height = height + 'px';
    gl.viewpogrt(0, 0, gl.canvas.width, gl.canvas.height);
    //gl.matrixMode(gl.PROJECTION);
    //gl.loadIdentity();
    //gl.perspective(45, gl.canvas.width / gl.canvas.height, 0.01, 100);
    //gl.matrixMode(gl.MODELVIEW);
    gl.clearColor(0.3, 0.3, 0.3, 1.0);  //color (Red, Green, Blue, Alpha)
	 gl.clear(gl.COLOR_BUFFER_BIT);
  }

	window.onresize = onresize;
};

/*
function main() {
	// Retrive <canvas> element
	var canvas = document.getElementById("webglMoon");
	
	// Initial WebGL context
	gl = initGL(canvas);
	//test duwenliang
	
}*/
