//liste av rektangler
var rectangles = [
    {x:0, y:0, width: 100, height: 100, color: 'red',speedX:1},
    {x:0, y:100, width: 100, height: 100, color: 'green',speedX:2},
    {x:0, y:200, width: 100, height: 100, color: 'blue',speedX:3}
]



//Funksjon som animerer figurer
function update(){
    c.clearRect(0,0,canvas.width,canvas.height);

    rectangles.forEach(function(rectangle){
        c.fillStyle = rectangle.color;
        c.fillRect(rectangle.x,rectangle.y,rectangle.width, rectangle.height);
        rectangle.x += rectangle.speedX;
    });

    //rectangle.x += 1;
    //rectangle.y += 1;
    //rectangle.width += 1;
    //rectangle.height += 1;
    
    //c.fillRect(rectangle.x,rectangle.y,rectangle.width,rectangle.height);

    window.requestAnimationFrame(update);
    
}
update();

var Animation = function(){
    this.boundUpdate = this.update.bind(this);
    this.rectangles = [
        {x:0, y:0, width: 100, height: 100, color: 'red',speedX:1},
        {x:0, y:100, width: 100, height: 100, color: 'green',speedX:2},
        {x:0, y:200, width: 100, height: 100, color: 'blue',speedX:3}
    ];
}

Animation.prototype.update = function(){
    c.clearRect(0,0,canvas.width,canvas.height);
    this.rectangles.forEach(function(rectangle){
        c.fillstyle = rectangle.color;
        c.fillRect(rectangle.x,rectangle.y,rectangle.width, rectangle.height);
        rectangle.x += rectangle.speedX;
    });

    window.requestAnimationFrame(this.boundUpdate);
}


var animation = new Animation();
animation.update();