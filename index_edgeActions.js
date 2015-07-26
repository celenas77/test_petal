/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         	
         	//canvas init
         	
         	$('<canvas id="canvas"></canvas>').appendTo("#Stage");
         	
         	var canvas = document.getElementById("canvas");
         	var ctx = canvas.getContext("2d");
          var petal = document.getElementById("petal"); 
          
            //var imageObj = new Image();
         
            //imageObj.onload = function() {
            //  context.drawImage(imageObj, 57.5, 57.3);
            // };
         
         	//canvas dimensions
         	var W = window.innerWidth;
         	var H = window.innerHeight;
         	canvas.width = W;
         	canvas.height = H;
         
         	//snowflake petals
         	var mp = 95; //max petals
         	var petals = [];
         	for(var i = 0; i < mp; i++)
         	{
         		petals.push({
         			x: Math.random()*W, //x-coordinate
         			y: Math.random()*H, //y-coordinate
         			r: Math.random()*4+1, //radius
         			d: Math.random()*mp //density
         		})
         	}
         
          //   //Lets draw the flakes
            
          //   // Petal.prototype.draw = function(ctx) {
      
          //   //    // Wireframe ball
          //   //    // ctx.beginPath();
          //   //     // ctx.arc(this.x, this.y, this.radius, 0, TWO_PI);
          //   //     // ctx.stroke();
                
          //   //    img = new Image();
          //   //    img.src = petalSrc;

          //   //    ctx.clearRect(0, 0, W, H);
         
          //   //    ctx.fillStyle = petalSrc;
          //   //    ctx.beginPath();
          //   //    for(var i = 0; i < mp; i++)
          //   //    {
          //   //       var p = petals[i];
          //   //       petal.moveTo(p.x, p.y);
          //   //       petal.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
          //   //    }
          //   //    ctx.fill();
          //   //    update();

          //   // };
         
            //Lets draw the flakes
            function draw()
            {
               ctx.clearRect(0, 0, W, H);
         
               ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
               ctx.beginPath();
               for(var i = 0; i < mp; i++)
               {
                  var p = petals[i];
                  ctx.moveTo(p.x, p.y);
                  ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
               }
               ctx.fill();
               update();
            }            

            //Lets draw the flakes
         	function draw()
         	{
         		ctx.clearRect(0, 0, W, H);
         
         		ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
         		ctx.beginPath();
         		for(var i = 0; i < mp; i++)
         		{
         			var p = petals[i];
         			ctx.moveTo(p.x, p.y);
         			ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
         		}
         		ctx.fill();
         		update();
         	}
         
         	//Function to move the snowflakes
         	//angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
         	var angle = 0;
         	function update()
         	{
         		angle += 0.01;
         		for(var i = 0; i < mp; i++)
         		{
         			var p = petals[i];
         			//Updating X and Y coordinates
         			//We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
         			//Every petal has its own density which can be used to make the downward movement different for each flake
         			//Lets make it more random by adding in the radius
         			p.y += Math.cos(angle+p.d) + 1 + p.r/2;
         			p.x += Math.sin(angle) * 2;
         
         			//Sending flakes back from the top when it exits
         			//Lets make it a bit more organic and let flakes enter from the left and right also.
         			if(p.x > W+5 || p.x < -5 || p.y > H)
         			{
         				if(i%3 > 0) //66.67% of the flakes
         				{
         					petals[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
         				}
         				else
         				{
         					//If the flake is exitting from the right
         					if(Math.sin(angle) > 0)
         					{
         						//Enter from the left
         						petals[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
         					}
         					else
         					{
         						//Enter from the right
         						petals[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
         					}
         				}
         			}
         		}
         	}
         
         	//animation loop
         	setInterval(draw, 33);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text}", "click", function(sym, e) {
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute for a new window)
         window.open("http://thecodeplayer.com/walkthrough/html5-canvas-snow-effect", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var title=$("title").text();
         $("body").prepend("<div class='future'><h1>" + title + "</h1></div>");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-15337036");