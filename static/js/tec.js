var $mostrarMUno = $('#menuOcultoNID'),
	$mostrarMDos = $('#menuOcultoNID2'),
	$mostrarMTres = $('#menuOcultoNID3'),
	$icoHi = $('#menuItem-instituto'),
	$icoOF = $('#icoHiddenOE'),
	$cs    = $('#menuItem-centroServicio');
var ni = false, oe = false, cds = false;
function inicio(){
	var icoInicio = document.getElementById('inicioIco'),
		icoH = document.getElementById('menuItem-instituto'),
		icoB = document.getElementById('icoBuzon');

	icoInicio.title = "Inicio";
	icoH.title = "Dame click";
	icoBuzon.title = "BUZÓN DE SUGERENCIAS";

	$('#menuItem-instituto').hover(iconoHidden);
	//$('#menuItem-instituto').on('click',menuOcultoIco);
}
function iconoHidden(){
	$('.uIco').toggleClass('icon-graduate');
}
function menuOcultoIco(b){
	if(oe == true){
		$mostrarMDos.slideToggle();
		oe = false;
	}
	else if(cds == true){
		$mostrarMTres.slideToggle();
		cds = false;
	}
	b.preventDefault();
	b.stopPropagation(); 
	$mostrarMUno.slideToggle();
	if(ni == false){
	ni = true;
	}else if(ni == true){
		ni = false;
	}
	//console.log(oe);
	//console.log(ni);
	//console.log(cds);
}
function menuOcultoIco2(b){
	if(ni == true){
		$mostrarMUno.slideToggle();
		ni = false;
	}
	else if(cds == true){
		$mostrarMTres.slideToggle();
		cds = false;
	}
	b.preventDefault();
	b.stopPropagation(); 
	$mostrarMDos.slideToggle();
	if(oe == false){
	oe = true;
	}
	else
	{
		oe = false;
	}
	//console.log(oe);
	//console.log(ni);
	//console.log(cds);
}
function menuOcultoIco3(b){
	if(ni == true){
		$mostrarMUno.slideToggle();
		ni = false;
	}
	else if(oe == true){
		$mostrarMDos.slideToggle();
		oe = false;
	}
	b.preventDefault();
	b.stopPropagation(); 
	$mostrarMTres.slideToggle();
	if(cds == false){
	cds = true;
	}
	else
	{
		cds = false;
	}
	//console.log(oe);
	//console.log(ni);
	//console.log(cds);
}

$icoHi.click(menuOcultoIco);
$icoOF.click(menuOcultoIco2);
$cs.click(menuOcultoIco3);