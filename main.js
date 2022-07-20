    var lastPositionOfX, lastPositionOfY;
    color = "black";
    widthOfLine = 2;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    //pegando o tamanho da tela
    var width = screen.width;
    //ajustando o tamanho da tela
    newWidth = screen.width - 70;
    newHeight = screen.height -300;

    //para telas pequenas
    if(width < 992){
        document.getElementById("myCanvas").width = newWidth;
        document.getElementById("myCanvas").width = newHeight;
        document.body.style.overflow = "hidden";
    }
    //trocando para touch
    canvas.addEventListener("touchstart", myTouchStart);
    
    function myTouchStart(e){
        console.log("myTouchStart")
        //Início da Atividade Adicional
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;

        //Fim da Atividade Adicional
        lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
        lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", mytouchMove);
    //trocando para touch
    function mytouchMove(e){

        console.log("mytouchmove")
        
        currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
        currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;

        //mesmo código de antes
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;

        console.log("Ultima posição das coordenadas x e y = ");
        console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);

        console.log("Posição atual das coordenadas x e y = ");
        console.log("x  = " + currentPositionOfTouchX + "y = " + currentPositionOfTouchY);
        ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
        ctx.stroke();
     

        lastPositionOfX = currentPositionOfTouchX; 
        lastPositionOfY = currentPositionOfTouchY;
    }
    //limpando a tela 
    function clearArea() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

