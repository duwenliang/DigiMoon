function initGL(ratio) {
	
	var canvas = document.getElementById("webglMoon");	
	
	// Get the rendering context for WebGL
	var gl = null;
	gl = canvas.getContext("webgl");
	if (!gl) {
		console.log('Failed to get the rendering context for WebGL.');
	}
	
	// Initialize the size of canvas (Adapting to the window size of the browser)
	var width = innerWidth;
    var height = innerHeight;
	canvas.width = width * ratio;
	canvas.height = height * ratio;
	canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
	gl.clearColor(0.6, 0.3, 0.3, 1.0);  //color (Red, Green, Blue, Alpha)
	gl.clear(gl.COLOR_BUFFER_BIT);
	
	//Output initGL parameters
	document.getElementById('initGLOutput').innerHTML = 'initGL:<br>'+output('canvas.style.width', canvas.style.width)+output('canvas.style.height', canvas.style.height)+output('width', width);
	
	return gl;
}

window.onload = onloading;

function onloading(){

	var ratio = window.devicePixelRatio || 1;
	var gl = initGL(ratio);
	
	function onresize(){
	    var width = innerWidth;
	    var height = innerHeight;
	    gl.canvas.width = width * ratio;
	    gl.canvas.height = height * ratio;
	    gl.canvas.style.width = width + 'px';
	    gl.canvas.style.height = height + 'px';
	    gl.clearColor(0.3, 0.3, 0.3, 1.0);  //color (Red, Green, Blue, Alpha)
	    gl.clear(gl.COLOR_BUFFER_BIT);
	
	
	    //Output onresize parameters
	    document.getElementById('onresizeOutput').innerHTML = 'onresize:<br>'+output('gl.canvas.style.width', gl.canvas.style.width)+output('gl.canvas.style.height', gl.canvas.style.height)+output('ratio', ratio)+output('width', width);
    }
	window.onresize = onresize;
}
