
let la3 = new Audio("A3.mp3");
const las3 = new Audio("As3.mp3");
let si3 = new Audio("B3.mp3");

const do4 = new Audio("C4.mp3");
const dos4 = new Audio("Cs4.mp3");
const re4 = new Audio("D4.mp3");
const res4 = new Audio("Ds4.mp3");
const mi4 = new Audio("E4.mp3");
const fa4 = new Audio("F4.mp3");
const fas4 = new Audio("Fs4.mp3");
const sol4 = new Audio("G4.mp3");
const sols4 = new Audio("Gs4.mp3");
const la4 = new Audio("A4.mp3");
const las4 = new Audio("As4.mp3");
const si4 = new Audio("B4.mp3");

const do5 = new Audio("C5.mp3");
const dos5 = new Audio("Cs5.mp3");
const re5 = new Audio("D5.mp3");
const res5 = new Audio("Ds5.mp3");
const mi5 = new Audio("E5.mp3");
const fa5 = new Audio("F5.mp3");
const fas5 = new Audio("Fs5.mp3");
const sol5 = new Audio("G5.mp3");
const sols5 = new Audio("Gs5.mp3");
const la5 = new Audio("A5.mp3");
const las5 = new Audio("As5.mp3");
const si5 = new Audio("B5.mp3");

const do6 = new Audio("C6.mp3");
const dos6 = new Audio("Cs6.mp3");
const re6 = new Audio("D6.mp3");
const res6 = new Audio("Ds6.mp3");
const mi6 = new Audio("E6.mp3");

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
var cerrando = false;


document.body.onkeydown = function suenanota (e){
	event.preventDefault();    
    if(e.keyCode == 27 && !cerrando){ 
        la3.pause();
        if (playingA3 == true) {
            la3.load();
            la3.play();
        }
        las3.pause();
        if (playingAs3 == true) {
            las3.load();
            las3.play();
        }
        si3.pause();        
        si3 = new Audio("notas/C4.mp3");
        if (playingB3 == true) {
            si3.play();
        }
        cerrando = true;
    }
    if(e.keyCode == 65 && !playingA3){
        la3.load();
        la3.play();
        $('#boton_a3').css({"background-color": "#e7c681"});     
        playingA3=true;
    }
    if(e.keyCode == 90 && !playingAs3){
        las3.load();
        las3.play();
        $('#boton_as3').css({"background-color": "#e7c681"});       
        playingAs3=true;
    }
    if(e.keyCode == 87 && !playingB3){
        si3.load();
        si3.play();
        $('#boton_b3').css({"background-color": "#e7c681"});        
        playingB3=true;
    }
    if(e.keyCode == 51 && !playingC4){
        do4.load();
        do4.play();
        $('#boton_c4').css({"background-color": "#e7c681"});        
        playingC4=true;
    }
    if(e.keyCode == 115 && !playingCs4){
        dos4.load();
        dos4.play();
        $('#boton_cs4').css({"background-color": "#e7c681"});        
        playingCs4=true;
    }
    if(e.keyCode == 52 && !playingD4){
        re4.load();
        re4.play();
        $('#boton_d4').css({"background-color": "#e7c681"});        
        playingD4=true;
    }
    if(e.keyCode == 88 && !playingDs4){
        res4.load();
        res4.play();
        $('#boton_ds4').css({"background-color": "#e7c681"});        
        playingDs4=true;
    }
    if(e.keyCode == 69 && !playingE4){
        mi4.load();
        mi4.play();
        $('#boton_e4').css({"background-color": "#e7c681"});        
        playingE4=true;
    }
    if(e.keyCode == 83 && !playingF4){
        fa4.load();
        fa4.play();
        $('#boton_f4').css({"background-color": "#e7c681"});        
        playingF4=true;
    }
    if(e.keyCode == 84 && !playingFs4){
        fas4.load();
        fas4.play();
        $('#boton_fs4').css({"background-color": "#e7c681"});        
        playingFs4=true;
    }
    if(e.keyCode == 53 && !playingG4){
        sol4.load();
        sol4.play();
        $('#boton_g4').css({"background-color": "#e7c681"});        
        playingG4=true;
    }
    if(e.keyCode == 70 && !playingGs4){
        sols4.load();
        sols4.play();
        $('#boton_gs4').css({"background-color": "#e7c681"});        
        playingGs4=true;
    }
    if(e.keyCode == 89 && !playingA4){
        la4.load();
        la4.play();
        $('#boton_a4').css({"background-color": "#e7c681"});        
        playingA4=true;
    }
    if(e.keyCode == 68 && !playingAs4){
        las4.load();
        las4.play();
        $('#boton_as4').css({"background-color": "#e7c681"});        
        playingAs4=true;
    }
    if(e.keyCode == 71 && !playingB4){
        si4.load();
        si4.play();
        $('#boton_b4').css({"background-color": "#e7c681"});       
        playingB4=true;
    }
    if(e.keyCode == 85 && !playingC5){
        do5.load();
        do5.play();
        $('#boton_c5').css({"background-color": "#e7c681"});        
        playingC5=true;
    }
    if(e.keyCode == 82 && !playingCs5){
        dos5.load();
        dos5.play();
        $('#boton_cs5').css({"background-color": "#e7c681"});        
        playingCs5=true;
    }
    if(e.keyCode == 72 && !playingD5){
        re5.load();
        re5.play();
        $('#boton_d5').css({"background-color": "#e7c681"});        
        playingD5=true;
    }
    if(e.keyCode == 86 && !playingDs5){
        res5.load();
        res5.play();
        $('#boton_ds5').css({"background-color": "#e7c681"});        
        playingDs5=true;
    }
    if(e.keyCode == 73 && !playingE5){
        mi5.load();
        mi5.play();
        $('#boton_e5').css({"background-color": "#e7c681"});        
        playingE5=true;
    }
    if(e.keyCode == 67 && !playingF5){
        fa5.load();
        fa5.play();
        $('#boton_f5').css({"background-color": "#e7c681"});        
        playingF5=true;
    }
    if(e.keyCode == 66 && !playingFs5){
        fas5.load();
        fas5.play();
        $('#boton_fs5').css({"background-color": "#e7c681"});        
        playingFs5=true;
    }
    if(e.keyCode == 188 && !playingG5){
        sol5.load();
        sol5.play();
        $('#boton_g5').css({"background-color": "#e7c681"});        
        playingG5=true;
    }
    if(e.keyCode == 74 && !playingGs5){
        sols5.load();
        sols5.play();
        $('#boton_gs5').css({"background-color": "#e7c681"});        
        playingGs5=true;
    }
    if(e.keyCode == 78 && !playingA5){
        la5.load();
        la5.play();
        $('#boton_a5').css({"background-color": "#e7c681"});        
        playingA5=true;
    }
    if(e.keyCode == 54 && !playingAs5){
        las5.load();
        las5.play();
        $('#boton_as5').css({"background-color": "#e7c681"});        
        playingAs5=true;
    }
    if(e.keyCode == 75 && !playingB5){
        si5.load();
        si5.play();
        $('#boton_b5').css({"background-color": "#e7c681"});        
        playingB5=true;
    }
    if(e.keyCode == 55 && !playingC6){
        do6.load();
        do6.play();
        $('#boton_c6').css({"background-color": "#e7c681"});        
        playingC6=true;
    }
    if(e.keyCode == 77 && !playingCs6){
        dos6.load();
        dos6.play();
        $('#boton_cs6').css({"background-color": "#e7c681"});        
        playingCs6=true;
    }
    if(e.keyCode == 56 && !playingD6){
        re6.load();
        re6.play();
        $('#boton_d6').css({"background-color": "#e7c681"});        
        playingD6=true;
    }
    if(e.keyCode == 119 && !playingDs6){
        res6.load();
        res6.play();
        $('#boton_ds6').css({"background-color": "#e7c681"});        
        playingDs6=true;
    }
    if(e.keyCode == 118 && !playingE6){
        mi6.load();
        mi6.play();
        $('#boton_e6').css({"background-color": "#e7c681"});        
        playingE6=true;
    } }


document.body.onkeyup = function cortanota (e){	
    if(e.keyCode == 27 && cerrando){
        la3.pause();        
        la3 = new Audio("notas/A3.mp3");
        if (playingA3 == true) {
            la3.play();
        }
        si3.pause();        
        si3 = new Audio("notas/B3.mp3");
        if (playingB3 == true) {
            si3.play();
        }
        cerrando = false;
    }
    if(e.keyCode == 65){
        la3.pause();
        $('#boton_a3').css({"transition": "0.1s"});
        $('#boton_a3').css({"background-color": "#fff"});
        playingA3=false;
    }
    if(e.keyCode == 90){
        las3.pause();
        $('#boton_as3').css({"transition": "0.1s"});
        $('#boton_as3').css({"background-color": "#fff"});
        playingAs3=false;
    }
    if(e.keyCode == 87){
        si3.pause();
        $('#boton_b3').css({"transition": "0.1s"});
        $('#boton_b3').css({"background-color": "#fff"});
        playingB3=false;
    }
    if(e.keyCode == 51){
        do4.pause();
        $('#boton_c4').css({"transition": "0.1s"});
        $('#boton_c4').css({"background-color": "#fff"});
        playingC4=false;
    }
    if(e.keyCode == 115){
        dos4.pause();
        $('#boton_cs4').css({"transition": "0.1s"});
        $('#boton_cs4').css({"background-color": "#fff"});
        playingCs4=false;
    }
    if(e.keyCode == 52){
        re4.pause();
        $('#boton_d4').css({"transition": "0.1s"});
        $('#boton_d4').css({"background-color": "#fff"});
        playingD4=false;
    }
    if(e.keyCode == 88){
        res4.pause();
        $('#boton_ds4').css({"transition": "0.1s"});
        $('#boton_ds4').css({"background-color": "#fff"});
        playingDs4=false;
    }
    if(e.keyCode == 69){
        mi4.pause();
        $('#boton_e4').css({"transition": "0.1s"});
        $('#boton_e4').css({"background-color": "#fff"});
        playingE4=false;
    }
    if(e.keyCode == 83){
        fa4.pause();
        $('#boton_f4').css({"transition": "0.1s"});
        $('#boton_f4').css({"background-color": "#fff"});
        playingF4=false;
    }
    if(e.keyCode == 84){
        fas4.pause();
        $('#boton_fs4').css({"transition": "0.1s"});
        $('#boton_fs4').css({"background-color": "#fff"});
        playingFs4=false;
    }
    if(e.keyCode == 53){
        sol4.pause();
        $('#boton_g4').css({"transition": "0.1s"});
        $('#boton_g4').css({"background-color": "#fff"});
        playingG4=false;
    }
    if(e.keyCode == 70){
        sols4.pause();
        $('#boton_gs4').css({"transition": "0.1s"});
        $('#boton_gs4').css({"background-color": "#fff"});
        playingGs4=false;
    }
    if(e.keyCode == 89){
        la4.pause();
        $('#boton_a4').css({"transition": "0.1s"});
        $('#boton_a4').css({"background-color": "#fff"});
        playingA4=false;
    }
    if(e.keyCode == 68){
        las4.pause();
        $('#boton_as4').css({"transition": "0.1s"});
        $('#boton_as4').css({"background-color": "#fff"});
        playingAs4=false;
    }
    if(e.keyCode == 71){
        si4.pause();
        $('#boton_b4').css({"transition": "0.1s"});
        $('#boton_b4').css({"background-color": "#fff"});
        playingB4=false;
    }
    if(e.keyCode == 85){
        do5.pause();
        $('#boton_c5').css({"transition": "0.1s"});
        $('#boton_c5').css({"background-color": "#fff"});
        playingC5=false;
    }
    if(e.keyCode == 82){
        dos5.pause();
        $('#boton_cs5').css({"transition": "0.1s"});
        $('#boton_cs5').css({"background-color": "#fff"});
        playingCs5=false;
    }
    if(e.keyCode == 72){
        re5.pause();
        $('#boton_d5').css({"transition": "0.1s"});
        $('#boton_d5').css({"background-color": "#fff"});
        playingD5=false;
    }
    if(e.keyCode == 86){
        res5.pause();
        $('#boton_ds5').css({"transition": "0.1s"});
        $('#boton_ds5').css({"background-color": "#fff"});
        playingDs5=false;
    }
    if(e.keyCode == 73){
        mi5.pause();
        $('#boton_e5').css({"transition": "0.1s"});
        $('#boton_e5').css({"background-color": "#fff"});
        playingE5=false;
    }
    if(e.keyCode == 67){
        fa5.pause();
        $('#boton_f5').css({"transition": "0.1s"});
        $('#boton_f5').css({"background-color": "#fff"});
        playingF5=false;
    }
    if(e.keyCode == 66){
        fas5.pause();
        $('#boton_fs5').css({"transition": "0.1s"});
        $('#boton_fs5').css({"background-color": "#fff"});
        playingFs5=false;
    }
    if(e.keyCode == 188){
        sol5.pause();
        $('#boton_g5').css({"transition": "0.1s"});
        $('#boton_g5').css({"background-color": "#fff"});
        playingG5=false;
    }
    if(e.keyCode == 74){
        sols5.pause();
        $('#boton_gs5').css({"transition": "0.1s"});
        $('#boton_gs5').css({"background-color": "#fff"});
        playingGs5=false;
    }
    if(e.keyCode == 78){
        la5.pause();
        $('#boton_a5').css({"transition": "0.1s"});
        $('#boton_a5').css({"background-color": "#fff"});
        playingA5=false;
    }
    if(e.keyCode == 54){
        las5.pause();
        $('#boton_as5').css({"transition": "0.1s"});
        $('#boton_as5').css({"background-color": "#fff"});
        playingAs5=false;
    }
    if(e.keyCode == 75){
        si5.pause();
        $('#boton_b5').css({"transition": "0.1s"});
        $('#boton_b5').css({"background-color": "#fff"});
        playingB5=false;
    }
    if(e.keyCode == 55){
        do6.pause();
        $('#boton_c6').css({"transition": "0.1s"});
        $('#boton_c6').css({"background-color": "#fff"});
        playingC6=false;
    }
    if(e.keyCode == 77){
        dos6.pause();
        $('#boton_cs6').css({"transition": "0.1s"});
        $('#boton_cs6').css({"background-color": "#fff"});
        playingCs6=false;
    }
    if(e.keyCode == 56){
        re6.pause();
        $('#boton_d6').css({"transition": "0.1s"});
        $('#boton_d6').css({"background-color": "#fff"});
        playingD6=false;
    }
    if(e.keyCode == 119){
        res6.pause();
        $('#boton_ds6').css({"transition": "0.1s"});
        $('#boton_ds6').css({"background-color": "#fff"});
        playingDs6=false;
    }
    if(e.keyCode == 118){
        mi6.pause();
        $('#boton_e6').css({"transition": "0.1s"});
        $('#boton_e6').css({"background-color": "#fff"});
        playingE6=false;
    } }

