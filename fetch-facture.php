<?php
header('Content-Type: application/json');
$conn = new mysqli('localhost', 'root', '', 'electricity');

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed"]));
}

$result = $conn->query("SELECT mois, consommation_kwh, montant_da FROM factures ORDER BY id ASC");
$data = array();
while($row = $result->fetch_assoc()){
    $data[] = $row;
}

echo json_encode($data);
$conn->close();
?>