var la3 = new Audio("A3.mp3"); var la3c = new Audio("A3.mp3");
var las3 = new Audio("As3.mp3"); var las3c = new Audio("As3.mp3");
var si3 = new Audio("B3.mp3"); var si3c = new Audio("B3.mp3");

var do4 = new Audio("C4.mp3"); var do4c = new Audio("D4.mp3");
var dos4 = new Audio("Cs4.mp3"); var dos4c = new Audio("C4.mp3");
var re4 = new Audio("D4.mp3"); var re4c = new Audio("Cs4.mp3");
var res4 = new Audio("Ds4.mp3"); var res4c = new Audio("Ds4.mp3");
var mi4 = new Audio("E4.mp3"); var mi4c = new Audio("Fs4.mp3");
var fa4 = new Audio("F4.mp3"); var fa4c = new Audio("F4.mp3");
var fas4 = new Audio("Fs4.mp3"); var fas4c = new Audio("G4.mp3");
var sol4 = new Audio("G4.mp3"); var sol4c = new Audio("Gs4.mp3");
var sols4 = new Audio("Gs4.mp3"); var sols4c = new Audio("A4.mp3");
var la4 = new Audio("A4.mp3"); var la4c = new Audio("B4.mp3");
var las4 = new Audio("As4.mp3"); var las4c = new Audio("E4.mp3");
var si4 = new Audio("B4.mp3"); var si4c = new Audio("Cs5.mp3");

var do5 = new Audio("C5.mp3"); var do5c = new Audio("D5.mp3");
var dos5 = new Audio("Cs5.mp3"); var dos5c = new Audio("Fs5.mp3");
var re5 = new Audio("D5.mp3"); var re5c = new Audio("E5.mp3");
var res5 = new Audio("Ds5.mp3"); var res5c = new Audio("E5.mp3");
var mi5 = new Audio("E5.mp3"); var mi5c = new Audio("G5.mp3");
var fa5 = new Audio("F5.mp3"); var fa5c = new Audio("F5.mp3");
var fas5 = new Audio("Fs5.mp3"); var fas5c = new Audio("Gs5.mp3");
var sol5 = new Audio("G5.mp3"); var sol5c = new Audio("Ds5.mp3");
var sols5 = new Audio("Gs5.mp3"); var sols5c = new Audio("A5.mp3");
var la5 = new Audio("A5.mp3"); var la5c = new Audio("B5.mp3");
var las5 = new Audio("As5.mp3"); var las5c = new Audio("As4.mp3");
var si5 = new Audio("B5.mp3"); var si5c = new Audio("Cs6.mp3");

var do6 = new Audio("C6.mp3"); var do6c = new Audio("C5.mp3");
var dos6 = new Audio("Cs6.mp3"); var dos6c = new Audio("E6.mp3");
var re6 = new Audio("D6.mp3"); var re6c = new Audio("D6.mp3");
var res6 = new Audio("Ds6.mp3"); var res6c = new Audio("Ds6.mp3");
var mi6 = new Audio("E6.mp3"); var mi6c = new Audio("C6.mp3");
var fa6 = new Audio("F6.mp3"); var fa6c = new Audio("F6.mp3");
var fas6 = new Audio("Fs6.mp3"); var fas6c = new Audio("As5.mp3");
var sol6 = new Audio("G6.mp3"); var sol6c = new Audio("Fs6.mp3");
var sols6 = new Audio("Gs6.mp3"); var sols6c = new Audio("Gs6.mp3");
var la6 = new Audio("A6.mp3"); var la6c = new Audio("G6.mp3");
var si6 = new Audio("B6.mp3"); var si6c = new Audio("A6.mp3");

var playingA3 = false;
var playingAs3 = false;
var playingB3 = false;
var playingC4 = false;
var playingCs4 = false;
var playingD4 = false;
var playingDs4 = false;
var playingE4 = false;
var playingF4 = false;
var playingFs4 = false;
var playingG4 = false;
var playingGs4 = false;
var playingA4 = false;
var playingAs4 = false;
var playingB4 = false;
var playingC5 = false;
var playingCs5 = false;
var playingD5 = false;
var playingDs5 = false;
var playingE5 = false;
var playingF5 = false;
var playingFs5 = false;
var playingG5 = false;
var playingGs5 = false;
var playingA5 = false;
var playingAs5 = false;
var playingB5 = false;
var playingC6 = false;
var playingCs6 = false;
var playingD6 = false;
var playingDs6 = false;
var playingE6 = false;
var playingF6 = false;
var playingFs6 = false;
var playingG6 = false;
var playingGs6 = false;
var playingA6 = false;
var playingB6 = false;

var cerrando = false;

function suenaNota (nota){
	nota.play();
}

function paraNota (nota){
	nota.pause();
	nota.currentTime = 0;
}

function suenaNotaAbriendo (e, notaA, notaC, notacod, boton){
	if(e.keyCode == notacod && cerrando == false){
		notaA.play();
        boton.css({"background-color": "#e7c681"});}
    if(e.keyCode == notacod && cerrando == true){
		notaC.play();
        boton.css({"background-color": "#af9764"});
    	cerrando = true;}	
}
function paraNotaAbriendo (e, notaA, notaC, notacod, boton){
	    if(e.keyCode == notacod){
        	notaA.pause();
        	boton.css({"background-color": "#fff"});
        	notaA.currentTime = 0;} 
        if(e.keyCode == notacod){	
        	notaC.pause();
        	boton.css({"background-color": "#fff"});
        	notaC.currentTime = 0;}                 
}
function cierraSinSoltarTeclas (notaA, notaC, tocando, boton){
	if (tocando) {
	notaA.pause();
	notaA.currentTime = 0;
	notaC.play();
	boton.css({"background-color": "#af9764"});}
}
function abreSinSoltarTeclas (notaA, notaC, tocando, boton){
	if (tocando) {
	notaC.pause();
	notaC.currentTime = 0;
	notaA.play();
	boton.css({"background-color": "#e7c681"});
	}
}
function cambioModoCerrando (){		
		$('.fondo').css({"background-image": "linear-gradient(to left, #292929, #5b5b5a, #292929)"});
		$('.botona').css({"opacity": "0"});
		$('.botonc').css({"opacity": "1"});
		$('.botonc').css({"z-index": "5"});
	}

function cambioModoAbriendo (){
		$('.fondo').css({"background-image": "linear-gradient(to left, #312a1a, #54482e, #312a1a)"});
		$('.botonc').css({"opacity": "0"});
		$('.botona').css({"opacity": "1"});
		$('.botonc').css({"z-index": "3"});
	}


function clickModoCerrando (){
		cerrando = true;
		cambioModoCerrando ();	
}
function clickModoAbriendo (){
		cerrando = false;
		cambioModoAbriendo ();	
}

document.body.onkeydown = function suenanota (e){
	event.preventDefault();
	if(e.keyCode == 65){playingA3 = true;}
	if(e.keyCode == 90){playingAs3 = true;}
	if(e.keyCode == 87){playingB3 = true;}

	if(e.keyCode == 51){playingC4 = true;}
	if(e.keyCode == 115){playingCs4 = true;}
	if(e.keyCode == 52){playingD4 = true;}
	if(e.keyCode == 88){playingDs4 = true;}
	if(e.keyCode == 69){playingE4 = true;}
	if(e.keyCode == 83){playingF4 = true;}
	if(e.keyCode == 84){playingFs4 = true;}
	if(e.keyCode == 53){playingG4 = true;}
	if(e.keyCode == 70){playingGs4 = true;}
	if(e.keyCode == 89){playingA4 = true;}
	if(e.keyCode == 68){playingAs4 = true;}
	if(e.keyCode == 71){playingB4 = true;}

	if(e.keyCode == 85){playingC5 = true;}
	if(e.keyCode == 82){playingCs5 = true;}
	if(e.keyCode == 72){playingD5 = true;}
	if(e.keyCode == 86){playingDs5 = true;}
	if(e.keyCode == 73){playingE5 = true;}
	if(e.keyCode == 67){playingF5 = true;}
	if(e.keyCode == 66){playingFs5 = true;}
	if(e.keyCode == 188){playingG5 = true;}
	if(e.keyCode == 74){playingGs5 = true;}
	if(e.keyCode == 78){playingA5 = true;}
	if(e.keyCode == 54){playingAs5 = true;}
	if(e.keyCode == 75){playingB5 = true;}

	if(e.keyCode == 55){playingC6 = true;}
	if(e.keyCode == 77){playingCs6 = true;}
	if(e.keyCode == 56){playingD6 = true;}
	if(e.keyCode == 119){playingDs6 = true;}
	if(e.keyCode == 118){playingE6 = true;}
	if(e.keyCode == 123){playingF6 = true;}
	if(e.keyCode == 117){playingFs6 = true;}
	if(e.keyCode == 122){playingG6 = true;}
	if(e.keyCode == 121){playingGs6 = true;}
	if(e.keyCode == 116){playingA6 = true;}
	if(e.keyCode == 120){playingB6 = true;}

	suenaNotaAbriendo (e, la3, la3c, 65, $('#boton_a3'));
	suenaNotaAbriendo (e, las3, las3c, 90, $('#boton_as3'));
	suenaNotaAbriendo (e, si3, si3c, 87, $('#boton_b3'));

	suenaNotaAbriendo (e, do4, do4c, 51, $('#boton_c4'));
	suenaNotaAbriendo (e, dos4, dos4c, 115, $('#boton_cs4'));
	suenaNotaAbriendo (e, re4, re4c, 52, $('#boton_d4'));
	suenaNotaAbriendo (e, res4, res4c, 88, $('#boton_ds4'));
	suenaNotaAbriendo (e, mi4, mi4c, 69, $('#boton_e4'));
	suenaNotaAbriendo (e, fa4, fa4c, 83, $('#boton_f4'));
	suenaNotaAbriendo (e, fas4, fas4c, 84, $('#boton_fs4'));
	suenaNotaAbriendo (e, sol4, sol4c, 53, $('#boton_g4'));
	suenaNotaAbriendo (e, sols4, sols4c, 70, $('#boton_gs4'));
	suenaNotaAbriendo (e, la4, la4c, 89, $('#boton_a4'));
	suenaNotaAbriendo (e, las4, las4c, 68, $('#boton_as4'));
	suenaNotaAbriendo (e, si4, si4c, 71, $('#boton_b4'));

	suenaNotaAbriendo (e, do5, do5c, 85, $('#boton_c5'));
	suenaNotaAbriendo (e, dos5, dos5c, 82, $('#boton_cs5'));
	suenaNotaAbriendo (e, re5, re5c, 72, $('#boton_d5'));
	suenaNotaAbriendo (e, res5, res5c, 86, $('#boton_ds5'));
	suenaNotaAbriendo (e, mi5, mi5c, 73, $('#boton_e5'));
	suenaNotaAbriendo (e, fa5, fa5c, 67, $('#boton_f5'));
	suenaNotaAbriendo (e, fas5, fas5c, 66, $('#boton_fs5'));
	suenaNotaAbriendo (e, sol5, sol5c, 188, $('#boton_g5'));
	suenaNotaAbriendo (e, sols5, sols5c, 74, $('#boton_gs5'));
	suenaNotaAbriendo (e, la5, la5c, 78, $('#boton_a5'));
	suenaNotaAbriendo (e, las5, las5c, 54, $('#boton_as5'));
	suenaNotaAbriendo (e, si5, si5c, 75, $('#boton_b5'));

	suenaNotaAbriendo (e, do6, do6c, 55, $('#boton_c6'));
	suenaNotaAbriendo (e, dos6, dos6c, 77, $('#boton_cs6'));
	suenaNotaAbriendo (e, re6, re6c, 56, $('#boton_d6'));
	suenaNotaAbriendo (e, res6, res6c, 119, $('#boton_ds6'));
	suenaNotaAbriendo (e, mi6, mi6c, 118, $('#boton_e6'));
	suenaNotaAbriendo (e, fa6, fa6c, 123, $('#boton_f6'));
	suenaNotaAbriendo (e, fas6, fas6c, 117, $('#boton_fs6'));
	suenaNotaAbriendo (e, sol6, sol6c, 122, $('#boton_g6'));
	suenaNotaAbriendo (e, sols6, sols6c, 121, $('#boton_gs6'));
	suenaNotaAbriendo (e, la6, la6c, 116, $('#boton_a6'));
	suenaNotaAbriendo (e, si6, si6c, 120, $('#boton_b6'));

	if(e.keyCode == 220){
		cerrando = true;
		cambioModoCerrando ();
		cierraSinSoltarTeclas (la3, la3c, playingA3, $('#boton_a3'));
		cierraSinSoltarTeclas (las3, las3c, playingAs3, $('#boton_as3'));
		cierraSinSoltarTeclas (si3, si3c, playingB3, $('#boton_b3'));

		cierraSinSoltarTeclas (do4, do4c, playingC4, $('#boton_c4'));
		cierraSinSoltarTeclas (dos4, dos4c, playingCs4, $('#boton_cs4'));
		cierraSinSoltarTeclas (re4, re4c, playingD4, $('#boton_d4'));
		cierraSinSoltarTeclas (res4, res4c, playingDs4, $('#boton_ds4'));
		cierraSinSoltarTeclas (mi4, mi4c, playingE4, $('#boton_e4'));
		cierraSinSoltarTeclas (fa4, fa4c, playingF4, $('#boton_f4'));
		cierraSinSoltarTeclas (fas4, fas4c, playingFs4, $('#boton_fs4'));
		cierraSinSoltarTeclas (sol4, sol4c, playingG4, $('#boton_g4'));
		cierraSinSoltarTeclas (sols4, sols4c, playingGs4, $('#boton_gs4'));
		cierraSinSoltarTeclas (la4, la4c, playingA4, $('#boton_a4'));
		cierraSinSoltarTeclas (las4, las4c, playingAs4, $('#boton_as4'));
		cierraSinSoltarTeclas (si4, si4c, playingB4, $('#boton_b4'));

		cierraSinSoltarTeclas (do5, do5c, playingC5, $('#boton_c5'));
		cierraSinSoltarTeclas (dos5, dos5c, playingCs5, $('#boton_cs5'));
		cierraSinSoltarTeclas (re5, re5c, playingD5, $('#boton_d5'));
		cierraSinSoltarTeclas (res5, res5c, playingDs5, $('#boton_ds5'));
		cierraSinSoltarTeclas (mi5, mi5c, playingE5, $('#boton_e5'));
		cierraSinSoltarTeclas (fa5, fa5c, playingF5, $('#boton_f5'));
		cierraSinSoltarTeclas (fas5, fas5c, playingFs5, $('#boton_fs5'));
		cierraSinSoltarTeclas (sol5, sol5c, playingG5, $('#boton_g5'));
		cierraSinSoltarTeclas (sols5, sols5c, playingGs5, $('#boton_gs5'));
		cierraSinSoltarTeclas (la5, la5c, playingA5, $('#boton_a5'));
		cierraSinSoltarTeclas (las5, las5c, playingAs5, $('#boton_as5'));
		cierraSinSoltarTeclas (si5, si5c, playingB5, $('#boton_b5'));

		cierraSinSoltarTeclas (do6, do6c, playingC6, $('#boton_c6'));
		cierraSinSoltarTeclas (dos6, dos6c, playingCs6, $('#boton_cs6'));
		cierraSinSoltarTeclas (re6, re6c, playingD6, $('#boton_d6'));
		cierraSinSoltarTeclas (res6, res6c, playingDs6, $('#boton_ds6'));
		cierraSinSoltarTeclas (mi6, mi6c, playingE6, $('#boton_e6'));
		cierraSinSoltarTeclas (fa6, fa6c, playingF6, $('#boton_f6'));
		cierraSinSoltarTeclas (fas6, fas6c, playingFs6, $('#boton_fs6'));
		cierraSinSoltarTeclas (sol6, sol6c, playingG6, $('#boton_g6'));
		cierraSinSoltarTeclas (sols6, sols6c, playingGs6, $('#boton_gs6'));
		cierraSinSoltarTeclas (la6, la6c, playingA6, $('#boton_a6'));
		cierraSinSoltarTeclas (si6, si6c, playingB6, $('#boton_b6'));		
    }	
}

document.body.onkeyup = function cortanota (e){
	event.preventDefault();
	if(e.keyCode == 65){playingA3 = false;}
	if(e.keyCode == 90){playingAs3 = false;}
	if(e.keyCode == 87){playingB3 = false;}

	if(e.keyCode == 51){playingC4 = false;}
	if(e.keyCode == 115){playingCs4 = false;}
	if(e.keyCode == 52){playingD4 = false;}
	if(e.keyCode == 88){playingDs4 = false;}
	if(e.keyCode == 69){playingE4 = false;}
	if(e.keyCode == 83){playingF4 = false;}
	if(e.keyCode == 84){playingFs4 = false;}
	if(e.keyCode == 53){playingG4 = false;}
	if(e.keyCode == 70){playingGs4 = false;}
	if(e.keyCode == 89){playingA4 = false;}
	if(e.keyCode == 68){playingAs4 = false;}
	if(e.keyCode == 71){playingB4 = false;}

	if(e.keyCode == 85){playingC5 = false;}
	if(e.keyCode == 82){playingCs5 = false;}
	if(e.keyCode == 72){playingD5 = false;}
	if(e.keyCode == 86){playingDs5 = false;}
	if(e.keyCode == 73){playingE5 = false;}
	if(e.keyCode == 67){playingF5 = false;}
	if(e.keyCode == 66){playingFs5 = false;}
	if(e.keyCode == 188){playingG5 = false;}
	if(e.keyCode == 74){playingGs5 = false;}
	if(e.keyCode == 78){playingA5 = false;}
	if(e.keyCode == 54){playingAs5 = false;}
	if(e.keyCode == 75){playingB5 = false;}

	if(e.keyCode == 55){playingC6 = false;}
	if(e.keyCode == 77){playingCs6 = false;}
	if(e.keyCode == 56){playingD6 = false;}
	if(e.keyCode == 119){playingDs6 = false;}
	if(e.keyCode == 118){playingE6 = false;}
	if(e.keyCode == 123){playingF6 = false;}
	if(e.keyCode == 117){playingFs6 = false;}
	if(e.keyCode == 122){playingG6 = false;}
	if(e.keyCode == 121){playingGs6 = false;}
	if(e.keyCode == 116){playingA6 = false;}
	if(e.keyCode == 120){playingB6 = false;}

	paraNotaAbriendo (e, la3, la3c, 65, $('#boton_a3'));
	paraNotaAbriendo (e, las3, las3c, 90, $('#boton_as3'));
	paraNotaAbriendo (e, si3, si3c, 87, $('#boton_b3'));

	paraNotaAbriendo (e, do4, do4c, 51, $('#boton_c4'));
	paraNotaAbriendo (e, dos4, dos4c, 115, $('#boton_cs4'));
	paraNotaAbriendo (e, re4, re4c, 52, $('#boton_d4'));
	paraNotaAbriendo (e, res4, res4c, 88, $('#boton_ds4'));
	paraNotaAbriendo (e, mi4, mi4c, 69, $('#boton_e4'));
	paraNotaAbriendo (e, fa4, fa4c, 83, $('#boton_f4'));
	paraNotaAbriendo (e, fas4, fas4c, 84, $('#boton_fs4'));
	paraNotaAbriendo (e, sol4, sol4c, 53, $('#boton_g4'));
	paraNotaAbriendo (e, sols4, sols4c, 70, $('#boton_gs4'));
	paraNotaAbriendo (e, la4, la4c, 89, $('#boton_a4'));
	paraNotaAbriendo (e, las4, las4c, 68, $('#boton_as4'));
	paraNotaAbriendo (e, si4, si4c, 71, $('#boton_b4'));

	paraNotaAbriendo (e, do5, do5c, 85, $('#boton_c5'));
	paraNotaAbriendo (e, dos5, dos5c, 82, $('#boton_cs5'));
	paraNotaAbriendo (e, re5, re5c, 72, $('#boton_d5'));
	paraNotaAbriendo (e, res5, res5c, 86, $('#boton_ds5'));
	paraNotaAbriendo (e, mi5, mi5c, 73, $('#boton_e5'));
	paraNotaAbriendo (e, fa5, fa5c, 67, $('#boton_f5'));
	paraNotaAbriendo (e, fas5, fas5c, 66, $('#boton_fs5'));
	paraNotaAbriendo (e, sol5, sol5c, 188, $('#boton_g5'));
	paraNotaAbriendo (e, sols5, sols5c, 74, $('#boton_gs5'));
	paraNotaAbriendo (e, la5, la5c, 78, $('#boton_a5'));
	paraNotaAbriendo (e, las5, las5c, 54, $('#boton_as5'));
	paraNotaAbriendo (e, si5, si5c, 75, $('#boton_b5'));

	paraNotaAbriendo (e, do6, do6c, 55, $('#boton_c6'));
	paraNotaAbriendo (e, dos6, dos6c, 77, $('#boton_cs6'));
	paraNotaAbriendo (e, re6, re6c, 56, $('#boton_d6'));
	paraNotaAbriendo (e, res6, res6c, 119, $('#boton_ds6'));
	paraNotaAbriendo (e, mi6, mi6c, 118, $('#boton_e6'));
	paraNotaAbriendo (e, fa6, fa6c, 123, $('#boton_f6'));
	paraNotaAbriendo (e, fas6, fas6c, 117, $('#boton_fs6'));
	paraNotaAbriendo (e, sol6, sol6c, 122, $('#boton_g6'));
	paraNotaAbriendo (e, sols6, sols6c, 121, $('#boton_gs6'));
	paraNotaAbriendo (e, la6, la6c, 116, $('#boton_a6'));
	paraNotaAbriendo (e, si6, si6c, 120, $('#boton_b6'));

	if(e.keyCode == 220){
		cerrando = false;
		cambioModoAbriendo ();
		abreSinSoltarTeclas (la3, la3c, playingA3, $('#boton_a3'));
		abreSinSoltarTeclas (las3, las3c, playingAs3, $('#boton_as3'));
		abreSinSoltarTeclas (si3, si3c, playingB3, $('#boton_b3'));

		abreSinSoltarTeclas (do4, do4c, playingC4, $('#boton_c4'));
		abreSinSoltarTeclas (dos4, dos4c, playingCs4, $('#boton_cs4'));
		abreSinSoltarTeclas (re4, re4c, playingD4, $('#boton_d4'));
		abreSinSoltarTeclas (res4, res4c, playingDs4, $('#boton_ds4'));
		abreSinSoltarTeclas (mi4, mi4c, playingE4, $('#boton_e4'));
		abreSinSoltarTeclas (fa4, fa4c, playingF4, $('#boton_f4'));
		abreSinSoltarTeclas (fas4, fas4c, playingFs4, $('#boton_fs4'));
		abreSinSoltarTeclas (sol4, sol4c, playingG4, $('#boton_g4'));
		abreSinSoltarTeclas (sols4, sols4c, playingGs4, $('#boton_gs4'));
		abreSinSoltarTeclas (la4, la4c, playingA4, $('#boton_a4'));
		abreSinSoltarTeclas (las4, las4c, playingAs4, $('#boton_as4'));
		abreSinSoltarTeclas (si4, si4c, playingB4, $('#boton_b4'));

		abreSinSoltarTeclas (do5, do5c, playingC5, $('#boton_c5'));
		abreSinSoltarTeclas (dos5, dos5c, playingCs5, $('#boton_cs5'));
		abreSinSoltarTeclas (re5, re5c, playingD5, $('#boton_d5'));
		abreSinSoltarTeclas (res5, res5c, playingDs5, $('#boton_ds5'));
		abreSinSoltarTeclas (mi5, mi5c, playingE5, $('#boton_e5'));
		abreSinSoltarTeclas (fa5, fa5c, playingF5, $('#boton_f5'));
		abreSinSoltarTeclas (fas5, fas5c, playingFs5, $('#boton_fs5'));
		abreSinSoltarTeclas (sol5, sol5c, playingG5, $('#boton_g5'));
		abreSinSoltarTeclas (sols5, sols5c, playingGs5, $('#boton_gs5'));
		abreSinSoltarTeclas (la5, la5c, playingA5, $('#boton_a5'));
		abreSinSoltarTeclas (las5, las5c, playingAs5, $('#boton_as5'));
		abreSinSoltarTeclas (si5, si5c, playingB5, $('#boton_b5'));

		abreSinSoltarTeclas (do6, do6c, playingC6, $('#boton_c6'));
		abreSinSoltarTeclas (dos6, dos6c, playingCs6, $('#boton_cs6'));
		abreSinSoltarTeclas (re6, re6c, playingD6, $('#boton_d6'));
		abreSinSoltarTeclas (res6, res6c, playingDs6, $('#boton_ds6'));
		abreSinSoltarTeclas (mi6, mi6c, playingE6, $('#boton_e6'));
		abreSinSoltarTeclas (fa6, fa6c, playingF6, $('#boton_f6'));
		abreSinSoltarTeclas (fas6, fas6c, playingFs6, $('#boton_fs6'));
		abreSinSoltarTeclas (sol6, sol6c, playingG6, $('#boton_g6'));
		abreSinSoltarTeclas (sols6, sols6c, playingGs6, $('#boton_gs6'));
		abreSinSoltarTeclas (la6, la6c, playingA6, $('#boton_a6'));
		abreSinSoltarTeclas (si6, si6c, playingB6, $('#boton_b6'));
    }
}
