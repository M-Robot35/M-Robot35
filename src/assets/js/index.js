import "./apiGithub.js  ";

const hora= document.getElementById('hora')
const linha_minutos= document.getElementById("base-minutos");
const year= document.getElementById('year')

function timeZero(number){
    if(number < 10){
        return `0${number}`
    }   
    return number
}

function lineTime(time){
    linha_minutos.style.width= `${time}%`;    
    const troca= ()=>{
        return Math.floor(Math.random() * (250 - 1 + 1)) + 5;         
    }
    linha_minutos.style.color= `rgb(${troca()}, ${troca()}, ${troca()})`;
}

const marcador = ()=>{
    setInterval(()=>{
        const d = new Date();
        let horas = d.getHours();
        let minutos = d.getMinutes();
        let segundos = d.getSeconds()        
        let conta = (segundos * 100)/60;
        lineTime(conta)        
        year.innerHTML= `ThiagoTeles@${d.getFullYear()}`;        
        hora.textContent = `${timeZero(horas)} : ${timeZero(minutos)} : ${timeZero(segundos)}`
    }, 1000)
}

function main(){
    marcador()
    
}

main()