<?php
header('Content-Type: application/json');

$conn = new mysqli('localhost', 'root', '', 'electricity');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$result = $conn->query("SELECT * FROM factures");
$data = array();
while($row = $result->fetch_assoc()){
    $data[] = $row;
}

echo json_encode($data);
$conn->close();
?>
