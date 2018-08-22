

var canvas = document.getElementById('canvas');
var c = canvas.getContext("2d");

//Funksjon som lager rektangler
function rectangle(x,y,width,height,color){
    c.beginPath();
    c.rect(x, y, width, height);
    c.fillStyle = color;
    c.fill();
    /*c.lineWidth = 7;
    c.strokeStyle = 'black';*/
    c.stroke();
}

//Funksjon som lager sirkler
//Det er en liten overskriving her, som må løses på en annen måte
//Kan være lurt å lage objekter eller noe annet
/*
function circle(x,y,radius,angle,counterClockwise,){
    c.beginPath();
    c.arc(x,y,radius,angle,counterClockwise);
    c.lineWidth = 4;
    c.strokeStyle = 'red';
    c.stroke();
}*/

//circle(50,50,20,Math.PI*2,false);


//Funksjon som lager bezier kurver

//Funksjon som animerer figurer

//Funksjon som skifter farge på figurer



//Lage rektangler horisontalt
for(var i = 0; i < 9; i++){
    rectangle(i*50,0,50,25,"green");
    rectangle(i*50,425,50,25,"blue");
    
}
//Lage rektangler vertikalt
for(var i = 0; i < 8;i++){
    rectangle(0,25+i*50,25,50,"red");
    rectangle(425,25+i*50,25,50,"yellow");
}

//Forbedringspotensiale: få begge inn i en for loop



//
$(document).ready(function(){
    $("button").click(function(){
        $(".container4").toggle();
    });
});

//Forbedringspotensiale: skift navn på knapp når dokumentasjonen vises


/*
function Circle(x,y,radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
    
    this.draw = function(){//Anonymous function
        c.beginPath();
        c.arc(x,y,radius,0,Math.PI*2,false);
        c.strokeStyle = 'blue';
        c.stroke();
    }
}

var circle = new Circle(10,10,40);
circle.draw();

function Rectangle(x, y, width, height){
    c.beginpath();
    c.fillRect(100, 100, 100, 100);

    c.stroke();
}*/

