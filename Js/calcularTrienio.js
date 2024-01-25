$(document).ready(function() {
    function calcularAntiguedad(precioTrienio) {
        var trieniosSeleccionados = $('#trienios').val();
        var antiguedad = trieniosSeleccionados * precioTrienio;
        console.log(antiguedad); // Aquí puedes mostrar el resultado donde sea necesario
    }

    function actualizarAntiguedad() {
        var horasSeleccionadas = $('#jornada').val();
        $.ajax({
            url: 'getTrienio.php',
            type: 'GET',
            data: { horas: horasSeleccionadas },
            success: function(response) {
                var precioTrienio = JSON.parse(response);
                calcularAntiguedad(precioTrienio);
            }
        });
    }
/*Este es para el range del html de los trienios*/
    $('#jornada, #trienios').change(actualizarAntiguedad);
   
        $('#trienios').on('input', function() {
            $('#trieniosValor').text(this.value);
        });
    
});
