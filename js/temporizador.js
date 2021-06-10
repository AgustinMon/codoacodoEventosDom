let tiempo = 0;
let segundos =0, minutos=0, horas = 0;

function temporizador(){
    segundos = tiempo++;
    if(segundos == 60){
        segundos = 0;
        tiempo = 0;
        minutos ++;
    }
    document.getElementById("tiempo").innerHTML =
    `<h3> ${horas} : ${minutos} : ${segundos}</h3>`;
}
setInterval(temporizador, 1000);