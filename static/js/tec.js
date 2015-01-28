var $mostrarMUno = $('#menuOcultoNID'),
	$icoHi = $('#icoHidden');
function inicio(){
	var icoInicio = document.getElementById('inicioIco'),
		icoH = document.getElementById('icoHidden');;

	icoInicio.title = "Inicio";
	icoH.title = "Dame click";

	$('#icoHidden').hover(iconoHidden);
	//$('#icoHidden').on('click',menuOcultoIco);
}
function iconoHidden(){
	$('.uIco').toggleClass('icon-graduate');
}
function menuOcultoIco(b){
	b.preventDefault();
	b.stopPropagation(); 
	$mostrarMUno.slideToggle();
}

$icoHi.click(menuOcultoIco);