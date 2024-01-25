<?php
// getTrienio.php
// Parámetros de conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "calculo_nomina";
// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);
header('Content-Type: application/json');
// Conexión a la base de datos...
$horas = isset($_GET['horas']) ? $_GET['horas'] : 0;

$sql = "SELECT trienio FROM tablas_salariales WHERE horas = $horas";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode((float)$row['trienio']);

} else {
    echo json_encode(0);
}

$conn->close();
?>
