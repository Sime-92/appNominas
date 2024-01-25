$(document).ready(function() {
    $.ajax({
        url: 'jornada.php',
        type: 'GET',
        success: function(response) {
            var horas = JSON.parse(response);
            horas.forEach(function(hora) {
                $('#jornada').append(new Option(hora, hora));
            });
        },
        error: function() {
            console.log("Error al cargar las horas");
        }
    });
});