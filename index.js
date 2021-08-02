function teste() {
    var entrada = document.getElementById("entrada").value;
    var saida = document.getElementById("saida").value;
    var almoco = document.getElementById("almoco").checked;

    var entradaTime = moment(entrada,"HH:mm")
    var saidaTime = moment(saida,"HH:mm");
    if (almoco) {
        let hour = moment.duration("01:00:00");
        saidaTime.subtract(hour);
    }
    var ms = entradaTime.diff(saidaTime) 
    var d = moment.duration(ms);
    var s = Math.abs(Math.floor(d.asHours())) + ":" + moment.utc(ms).format("mm");
   
    document.getElementById("result").innerHTML = "Horas trabalhadas: " + s;
}