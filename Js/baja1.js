$(document).ready(function() {
    // Escucha el cambio en la selección de baja laboral
    $("input[name='bajaLaboral']").change(function() {
        // Muestra los detalles adicionales si la respuesta es 'Sí'
        if ($("#bajaSi").is(":checked")) {
            $("#detallesBajaLaboral").show();
        } else {
            $("#detallesBajaLaboral").hide();
        }
    });
});
