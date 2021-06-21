var r
var g
var


function setup() {
btn_red = createButton("red")
btn_red.position(300,50)
btn_red.mousePressed(red_bg)
btn_green = createButton("green")
btn_green.position(100,50)
btn_green.mousePressed(green_bg)

  createCanvas(400, 400);
 }
 function red_bg(){
  background("red")
    }
    function green_bg(){
      r = 0
      g = 255
      b = 0
      background(r,g,b)
       }
function draw() {
  background(220);
  btn_green.mousePressed(green_bg)
  btn_red.mousePressed(red_bg)
  background(r,g,b)
}