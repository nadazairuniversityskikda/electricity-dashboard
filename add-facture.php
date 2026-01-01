<?php
$conn = new mysqli("localhost", "root", "", "electricity");
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $m = $_POST['mois'];
    $c = $_POST['consommation_kwh'];
    $mon = $_POST['montant_da'];
    $sql = "INSERT INTO factures (mois, consommation_kwh, montant_da) VALUES ('$m', '$c', '$mon')";
    $conn->query($sql);
}
$conn->close();
?>