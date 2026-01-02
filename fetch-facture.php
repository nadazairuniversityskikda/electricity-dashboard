<?php
header('Content-Type: application/json');
$conn = new mysqli("localhost", "root", "", "electricity");
$result = $conn->query("SELECT * FROM factures ORDER BY id ASC");
$data = [];
while($row = $result->fetch_assoc()) {
    $data[] = $row;
}
echo json_encode($data);
$conn->close();
?>