var r1 = 150, x1 = 300, y1 = 300, r2 = 200, x2 = 600, y2 = 600, x0 = 100, y0 = 100, w1 = 15, w2 = 20, m1 = 1, m2 = 1;
r1 = prompt('Введи R1') - 0;
x1 = prompt('Введи X1') - 0;
y1 = prompt('Введи Y1') - 0;
r2 = prompt('Введи R2') - 0;
x2 = prompt('Введи X2') - 0;
y2 = prompt('Введи Y2') - 0;
x0 = prompt('Введи X0') - 0;
y0 = prompt('Введи Y0') - 0;
w1 = r1/10;  //Толщина мишени
w2 = r2/10;  //                                            
//Фон 
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.fillStyle = 'yellow';
    context.fillRect( 0 , 0 , canvas.width , canvas.height);

//Мишень1
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = w1;
    context.arc( x1 , y1 , r1 , 0, 2*Math.PI);
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'white';
    context.arc( x1 , y1 , r1 - w1 , 0, 2*Math.PI);
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'black';
    context.arc( x1 , y1 , r1 - 2*w1 , 0, 2*Math.PI);
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'white';
    context.arc( x1 , y1 , r1 - 3*w1 , 0, 2*Math.PI);
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'black';
    context.arc( x1 , y1 , r1 - 4*w1 , 0, 2*Math.PI);
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'white';
    context.arc( x1 , y1 , r1 - 5*w1 , 0, 2*Math.PI);
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'black';
    context.arc( x1 , y1 , r1 - 6*w1 , 0, 2*Math.PI);
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'white';
    context.arc( x1 , y1 , r1 - 7*w1 , 0, 2*Math.PI);
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'black';
    context.arc( x1 , y1 , r1 - 8*w1 , 0, 2*Math.PI);
    context.stroke();

    context.beginPath();
    context.fillStyle = 'white';
    context.strokeStyle = 'white';
    context.arc( x1 , y1 , r1 - 8.5*w1 , 0, 2*Math.PI);
    context.fill();

//Мишень2
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = w2;
    context.arc( x2 , y2 , r2 , 0, 2*Math.PI);
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'white';
    context.arc( x2 , y2 , r2 - w2 , 0, 2*Math.PI);
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'black';
    context.arc( x2 , y2 , r2 - 2*w2 , 0, 2*Math.PI);
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'white';
    context.arc( x2 , y2 , r2 - 3*w2 , 0, 2*Math.PI);
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'black';
    context.arc( x2 , y2 , r2 - 4*w2 , 0, 2*Math.PI);
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'white';
    context.arc( x2 , y2 , r2 - 5*w2 , 0, 2*Math.PI);
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'black';
    context.arc( x2 , y2 , r2 - 6*w2 , 0, 2*Math.PI);
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'white';
    context.arc( x2 , y2 , r2 - 7*w2 , 0, 2*Math.PI);
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'black';
    context.arc( x2 , y2 , r2 - 8*w2 , 0, 2*Math.PI);
    context.stroke();

    context.beginPath();
    context.fillStyle = 'white';
    context.strokeStyle = 'white';
    context.arc( x2 , y2 , r2 - 8.5*w2 , 0, 2*Math.PI);
    context.fill();
    
//Выстрел
    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 1;
    context.arc( x0, y0, 10, 0, 2*Math.PI);
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'red';
    context.moveTo( x0 + 15, y0 );
    context.lineTo( x0 - 15, y0 );
    context.moveTo( x0, y0 + 15 );
    context.lineTo( x0, y0 - 15 );
    context.stroke();

//Радиус-векторы
    m1 = Math.sqrt(Math.pow((x1 - x0),2) + Math.pow((y1 - y0),2));
    m2 = Math.sqrt(Math.pow((x2 - x0),2) + Math.pow((y2 - y0),2)); 


        if (m1 <= 1.5*w1 || m2 <= 1.5*w2)  {
            alert('10 очков!');
        } else if (m1 <= 2.5*w1 || m2 <= 2.5*w2 ){
            alert('9 очков!');
        } else if (m1 <= 3.5*w1 || m2 <= 3.5*w2 ){
            alert('8 очков!');
        } else if (m1 <= 4.5*w1 || m2 <= 4.5*w2 ){
            alert('7 очков!');
        } else if (m1 <= 5.5*w1 || m2 <= 5.5*w2 ){
            alert('6 очков!');
        } else if (m1 <= 6.5*w1 || m2 <= 6.5*w2 ){
            alert('5 очков!');
        } else if (m1 <= 7.5*w1 || m2 <= 7.5*w2 ){
            alert('4 очка!');
        } else if (m1 <= 8.5*w1 || m2 <= 8.5*w2 ){
            alert('3 очка!');
        } else if (m1 <= 9.5*w1 || m2 <= 9.5*w2 ){
            alert('2 очка!');
        } else if (m1 <= r1 + w1/2 || m2 <= r2 + w1/2 ){
            alert('1 очко!');
        } else {
            alert('Промазал!(о очков)')  
        } 