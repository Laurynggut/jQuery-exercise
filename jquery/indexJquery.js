
var phrases = [
'I like pie.',
'I bought some bread this morning,',
'Yo en mi sofá,sentado a esperar,a esperar que pase el tiempo',
'Aire,aire,pasa,pasa,que tenga la puerta abierta,la alegria para la casa...',
];//CERRAMOS ARRAY ,IMPORTANTE no se toca



$('#button').on("click", function rotate(){
var phrase = phrases[Math.floor(Math.random()* phrases.length-0)];
	$('.visualizando').text(phrase);//jquery
});



var newphrases = []// aqui es donde ponemos las nuevas frases que vamos a introdur en el input
$(document).keypress(function (e){
	if(e.which ==13){// numero 13 se refiere a la tecla enter



    var valueInput = $('#input').val();//creamos una var nueva para darle el valor a todo el jquery de esta seccion
    var vision = "<li>" + valueInput +"</li>";
    $('#newLi').append(vision);//
        
	}
});

$('#show').on('click', function(){
  $('#newLi').slideToggle(2000);
});



//document.write(phrases[1]);