<?php
// Parámetros de conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "calculo_nomina";
// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Consulta para obtener las horas
$sql = "SELECT horas FROM tablas_salariales";
$result = $conn->query($sql);

$horas = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $horas[] = $row['horas'];
    }
    echo json_encode($horas);
} else {
    echo json_encode([]);
}

$conn->close();


?>
