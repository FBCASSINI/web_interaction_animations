/*
     Name: Flavio Cassini
     Date: June 2 2016
     Class & Section:  WIA-201606
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

window.onload = function(){
	var theCanvas = document.getElementById("canvas1");

	
	if (Modernizr.canvas) {
		var ctx = theCanvas.getContext("2d");
		if(ctx){
			ctx.strokeStyle = "black";	
			ctx.strokeRect(0,0, 50, 100);
			ctx.fillStyle = "blue";
			ctx.fillRect(0,0, 50, 100);
			
			
		}else {
			
			//Canvas Not Supported
			
		}
			
		}
	



/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
			var theCanvas2 = document.getElementById('canvas1');
				if (Modernizr.canvas) {
					var ctx2 = theCanvas2.getContext("2d");

			 if (ctx2) {
				 ctx2.strokeStyle = "black";
				 ctx2.fillStyle = "rgba(255,0,0,.5)";
				 ctx2.lineWidth = 5;
				//var degrees = 180;
				//var radians = (degrees/180)*Math.PI;
				
				 ctx2.beginPath();
				 ctx2.arc(50, 50, 30, 0, (360/180)*Math.PI, true);
				 ctx2.fill();
				 ctx2.stroke();
				 
				 
			    } else {
			
			//Canvas Not Supported
			
		}
				
			
			
			
	}

	

				 
				 

/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
var theCanvas3 = document.getElementById('canvas1');
					if (Modernizr.canvas) {
							var ctx3 = theCanvas3.getContext("2d");

							if(ctx){
							
						ctx3.lineWidth = 5;
						ctx3.strokeStyle = "black";
						ctx3.fillStyle = "gold";
							
						ctx3.lineJoin = "round";
							
   						ctx3.beginPath();
						ctx3.moveTo(100,100);
						ctx3.lineTo(75,50);
						ctx3.lineTo(50,105);
						ctx3.lineTo(25,105);
						ctx3.lineTo(50,135);
						ctx3.lineTo(25,160);
						ctx3.lineTo(75, 140);
						ctx3.lineTo(105,160);
						ctx3.lineTo(85, 125);
						ctx3.lineTo(125,125);
	  
      					ctx3.fill();
						ctx3.closePath();
						ctx3.stroke();
						} else {
			
			//Canvas Not Supported
			
		}
				};



/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

var theCanvas4 = document.getElementById("canvas1");
				if (Modernizr.canvas) {
					var ctx4 = theCanvas4.getContext("2d");
					if (ctx4) {
						
						ctx4.strokeStyle= "blue";
						ctx4.fillStyle = "red";
						ctx4.lineWidth = 5;
						
						
						
						ctx4.beginPath();
						ctx4.arc(125, 350, 100, 0, (180/180)*Math.PI, true);
						ctx4.moveTo(125, 350)
						ctx4.bezierCurveTo(50,350, 100, 450, 25, 350), true;
						ctx4.moveTo(225,350);
						ctx4.bezierCurveTo(150,350, 150, 450, 125, 350);
						ctx4.fill();
						ctx4.closePath();
						ctx4.stroke();
								}  else {
			
			//Canvas Not Supported
			
		}
				};


/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
var theCanvas5 = document.getElementById('canvas1');
	if (Modernizr.canvas) {
	var ctx5 = theCanvas5.getContext("2d");
	if (ctx5) {
	
	var textString ="FULL SAIL IS AWESOME!!!";
	
	
	
	ctx5.font="27pt Verdana";
	ctx5.fillStyle="Orange";
	ctx5.fillText(textString, 300, 50);
	
	
	} else {
			
			//Canvas Not Supported
			
		}
	}

	
/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here
var theCanvas6 = document.getElementById('canvas1');
	if (Modernizr.canvas) {
	var ctx6 = theCanvas6.getContext("2d");
	if (ctx6) {
		
		var  srcImg = document.getElementById("img1");
		
		ctx.drawImage(srcImg, 400,200, 300, 100);
		ctx6.drawImage(srcImg, 400, 400, 500, 300 ,400, 400,190, 280);
     						
		
	} else {
			
			//Canvas Not Supported
			
		}
	}



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

var theCanvas7 = document.getElementById("canvas1");
				if (Modernizr.canvas) {
					var ctx7 = theCanvas7.getContext("2d");
					if (ctx7) {
						
						ctx7.strokeStyle= "white";
						ctx7.fillStyle = "black";
						ctx7.lineWidth = 5;
						
						ctx7.save();
						ctx7.beginPath();
						ctx7.arc(100, 600, 100, 0, (180/180)*Math.PI, true);
						ctx7.fill();
						ctx7.closePath();
						ctx7.stroke();
						
						
						ctx7.moveTo(150, 650)
						ctx7.strokeStyle = "black";	
						ctx7.strokeRect(100,600, 10, 200);
						ctx7.fillStyle = "brown";
						ctx7.fillRect(100,600, 10, 200);
						
						ctx7.restore();
						
					
						
						
						ctx7.fill();
						ctx7.closePath();
						ctx7.stroke();
								} else {
			
			//Canvas Not Supported
			
		}
				};
				
};
