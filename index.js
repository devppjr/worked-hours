function CalculateWorkedHours() {
    var entradaTxt = document.getElementById("entrada").value;
    var saidaTxt = document.getElementById("saida").value;
    var almoco = document.getElementById("almoco").checked;
    if (!entradaTxt || !saidaTxt){
        alert("Hora inválida")
        return
    }

    splitEntrada = split(entradaTxt)
    let entrada = new Date();
    entrada.setHours(splitEntrada[0]);
    entrada.setMinutes(splitEntrada[1])
    entrada.setSeconds(0)
    
    splitSaida = split(saidaTxt)
    let saida = new Date();
    saida.setHours(splitSaida[0]);
    saida.setMinutes(splitSaida[1])
    saida.setSeconds(0)

    if (almoco) {
        saida.setHours(saida.getHours() - 1)
    }
    var minutes  = Math.abs(entrada - saida) / 1000 / 60;
    document.getElementById("result").innerHTML = "Horas trabalhadas: " + toText(minutes);
}

function toText(minutos) {
    const horas = Math.floor(minutos/ 60);          
    const min = minutos % 60;
    const textoHoras = (`00${horas}`).slice(-2);
    const textoMinutos = (`00${min}`).slice(-2);
    
    return `${textoHoras }:${textoMinutos}`;
};

function split(str) {
    return str.split(":");// [0] - Hour | [1] - Min
}
