function Numero(mensaje) {
    while (true) {
        var input = prompt(mensaje);
        var numero = parseFloat(input);
        if (!isNaN(numero)) {
            return numero;
        }
        alert("Por favor, ingrese solo números.");
    }
}

function calcularPrestamo() {
    var cantidad = Numero("Ingrese la cantidad solicitar:");
    var interes = Numero("Ingrese el porcentaje de interes anual:") / 100;
    var años = Numero("Ingrese el número de años del préstamo:");
    
   
    var tMensual = interes / 12;
    var numPagos = años * 12;
    var pMensual = (cantidad * tMensual) / (1 - Math.pow(1 + tMensual, -numPagos));

    var pagoTotal = pMensual * numPagos;
    var totalInteres = pagoTotal - cantidad;
    

    var mensaje = "Resultado:\n";
    mensaje += "Pago mensual: $" + pMensual.toFixed(2) + "\n";
    mensaje += "Pago total: $" + pagoTotal.toFixed(2) + "\n";
    mensaje += "Total de interés: $" + totalInteres.toFixed(2);
    

    alert(mensaje);
}


calcularPrestamo();


