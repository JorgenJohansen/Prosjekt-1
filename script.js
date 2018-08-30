

var canvas = document.getElementById('canvas');
var c = canvas.getContext("2d");

//canvas.width = canvas.scrollWidth;
//canvas.width = canvas.scrollHeight;

//Circle type
var Circle = function(x,y,radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
}

//Sjekker om vi er inne i sirkelen
Circle.prototype.isHitBy = function(x,y,cx,cy,radius){
    //Sjekker om vi er inne i sirkelen
    //var distance = Math.sqrt(Math.pow(x - this.x,2) + Math.pow(y - this.y, 2));
    let distance = (x - cx) * (x - cx) + (y- cy)*(y - cy);
    //var distance = Math.pow(x - this.x,2) + Math.pow(y - this.y,2);
    return distance <= radius * radius;
}

//Rectangle type
var Rectangle = function(x,y,width,height,color){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

//Sjekker om vi er inne i rektangelet
Rectangle.prototype.isHitBy = function(x,y){
    //Sjekker om vi er inne i rektangelet
    return (x >= this.x && x <= this.x + this.width
    && y >= this.y && y <= this.y + this.height);
}

//Creates shapes (and draw)
var circles = [
    new Circle(150,80,30),    
    new Circle(150,150,30),
    new Circle(150,220,30),
    new Circle(150,290,30),
    new Circle(150,360,30),
]
var rectangles = [
    new Rectangle(250,50,100,200),
    new Rectangle(450,50,75,75),
    new Rectangle(450,150,75,75),
    new Rectangle(450,250,75,75),
    new Rectangle(450,350,75,75),
]

c.beginPath();
for(let i = 0; i < circles.length; i++){
    c.arc(circles[i].x,circles[i].y,circles[i].radius,0,Math.PI*2);
}
/*
c.arc(circle.x,circle.y,circle.radius,0,Math.PI*2);
c.arc(circle2.x,circle2.y,circle2.radius,0,Math.PI*2);
c.arc(circle3.x,circle3.y,circle3.radius,0,Math.PI*2);
c.arc(circle4.x,circle4.y,circle4.radius,0,Math.PI*2);
c.arc(circle5.x,circle5.y,circle5.radius,0,Math.PI*2);*/
c.fill();
for(let i = 0; i < rectangles.length;i++){
    c.fillRect(rectangles[i].x, rectangles[i].y, rectangles[i].width, rectangles[i].height);
}
c.closePath();

//Skifter farge på sirkler
function redrawColor(color,i){
    c.clearRect(50,50,50,50);
    c.beginPath();
    c.arc(circles[i].x,circles[i].y,circles[i].radius,0,Math.PI*2);
    c.fillStyle = color;
    c.fill();
    c.closePath();
}

var biggerX = 25;
var biggerY = 25;

//Lager større rekangler
function makeBigger(){
    c.clearRect(rectangles[0].x,rectangles[0].y,rectangles[0].width,rectangles[0].height);
    c.beginPath();
    c.fillStyle = "black";
    c.fillRect(rectangles[0].x, rectangles[0].y, rectangles[0].width + biggerX, rectangles[0].height + biggerY);
    c.closePath();
}

//User input
canvas.addEventListener('click',function(e){
    //console.log(e);
    var cBounds = canvas.getBoundingClientRect();
    //console.log(cBounds);
    var mouseX = e.clientX - cBounds.left;
    var mouseY = e.clientY - cBounds.top;

    //console.log(mouseX, mouseY);
    if(circles[0].isHitBy(mouseX,mouseY,150,150,100)){
        redrawColor("red",0);
    }
    
    if(rectangles[0].isHitBy(mouseX,mouseY)){
        console.log('Rectangle hit');
        if(rectangles[0].width < 150 && rectangles[0].height < 250){
            makeBigger();
        }
        
    }
});

//Viser og skjuler dokumentasjon
$(document).ready(function(){
    $("button").click(function(){
        $(".box4").toggle();
    });
});

