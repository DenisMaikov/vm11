var r1 = 150, x1 = 300, y1 = 300, r2 = 200, x2 = 600, y2 = 600, x0 = 100, y0 = 100, w1 = 15, w2 = 20, m1 = 1, m2 = 1;
w1 = r1/10;  //Толщина мишени
w2 = r2/10;  //                                            
//Фон 
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.fillStyle = 'yellow';
    context.fillRect( 0 , 0 , canvas.width , canvas.height);

//Система Координат

context.beginPath();
context.strokeStyle = 'black';
context.moveTo( canvas.width/2 , 0 );
context.lineTo( canvas.width/2 , canvas.height );
context.moveTo( 0 ,canvas.height/2);
context.lineTo( canvas.width , canvas.height/2 );
context.stroke();

//Функция мишени

/*var x = 0; y = 0; r = 0;
    function target ( x , y , r ) {
        for ( var i = 0; i < 9 ; i++ ) {
            context.beginPath();
             if ( i%2 == 1) {
                context.strokeStyle = 'white';
             } else {
                context.strokeStyle = 'black';
             }
            context.lineWidth = r/10;
            context.arc( x , y , r - (r*i)/10 , 0, 2*Math.PI);
            context.stroke()
        }

        context.beginPath();
        context.fillStyle = 'white';
        context.strokeStyle = 'white';
        context.arc( x , y , r - 8.5*r/10 , 0, 2*Math.PI);
        context.fill();
    }*/
 
function plus(){
    var xa, ya, xb, yb, x, y;
        xa = document.getElementById('x01').value - 0;
        ya = document.getElementById('y01').value - 0;
        xb = document.getElementById('x02').value - 0;
        yb = document.getElementById('y02').value - 0;
        x = xb + xa;     y = yb + ya;
    console.log(xa, ya, xb, yb, x, y)
    document.getElementById('plus').innerHTML = [ x , y ];

        context.beginPath();
        context.lineWidth = 5;
        context.strokeStyle = 'red';
        context.moveTo( canvas.width/2 , canvas.height/2 );
        context.lineTo( canvas.width/2 + 10*xa , canvas.height/2 - 10*ya );
        context.stroke();

        context.beginPath();
        context.lineWidth = 5;
        context.strokeStyle = 'blue';
        context.moveTo( canvas.width/2 + 10*xa , canvas.height/2 - 10*ya );
        context.lineTo( canvas.width/2 + 10*x , canvas.height/2 - 10*y );
        context.stroke();

        context.beginPath();
        context.lineWidth = 5;
        context.strokeStyle = 'green';
        context.moveTo( canvas.width/2 , canvas.height/2 );
        context.lineTo( canvas.width/2 + 10*x , canvas.height/2 - 10*y );
        context.stroke();

}

function minus(){
    var xa, ya, xb, yb, x, y;
        xa = document.getElementById('x01').value - 0;
        ya = document.getElementById('y01').value - 0;
        xb = document.getElementById('x02').value - 0;
        yb = document.getElementById('y02').value - 0;
        x =  xa - xb; y = ya - yb;
        console.log(xa, ya, xb, yb, x, y)
    document.getElementById('minus').innerHTML = [ x , y ];
    
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.moveTo( canvas.width/2 , canvas.height/2 );
    context.lineTo( canvas.width/2 + 10*xa , canvas.height/2 - 10*ya );
    context.stroke();

    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = 'blue';
    context.moveTo( canvas.width/2 , canvas.height/2 );
    context.lineTo( canvas.width/2 + 10*xb , canvas.height/2 - 10*yb );
    context.stroke();

    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = 'green';
    context.moveTo( canvas.width/2 + 10*xa , canvas.height/2 - 10*ya );
    context.lineTo( canvas.width/2 + 10*xb , canvas.height/2 - 10*yb );
    context.stroke();
}

function mult(){
    var xa, ya, xb, yb, sp;
        xa = document.getElementById('x01').value - 0;
        ya = document.getElementById('y01').value - 0;
        xb = document.getElementById('x02').value - 0;
        yb = document.getElementById('y02').value - 0;
        sp = xa*xb + ya*yb;
        console.log(xa, ya, xb, yb, sp)
    document.getElementById('mult').innerHTML = sp;
}
