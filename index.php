<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Web Dashboard</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <header>
        <h1><i class="fas fa-bolt"></i> Dashboard Électrique Pro</h1>
        <p>Examen: Advanced Web Programming</p>
    </header>

    <div class="container">
        <section class="input-section card">
            <h3><i class="fas fa-plus"></i> Ajouter une Facture</h3>
            <form id="addFactureForm">
                <input type="text" id="mois" placeholder="Mois" required>
                <input type="number" id="cons" placeholder="kWh" required>
                <input type="number" id="montant" placeholder="Montant DA" required>
                <button type="submit">Enregistrer</button>
            </form>
        </section>

        <section class="cards">
            <div class="card blue"><div class="card-info"><h3>TOTAL CONSO</h3><p id="consommationTotal">--</p></div><i class="fas fa-chart-line icon"></i></div>
            <div class="card green"><div class="card-info"><h3>TOTAL MONTANT</h3><p id="montantTotal">--</p></div><i class="fas fa-wallet icon"></i></div>
            <div class="card red"><div class="card-info"><h3>MOIS PIC</h3><p id="moisMax">--</p></div><i class="fas fa-fire icon"></i></div>
        </section>

        <section class="charts">
            <div class="chart-box"><h3>Evolution Consommation</h3><canvas id="consChart"></canvas></div>
            <div class="chart-box"><h3>Analyse des Coûts</h3><canvas id="montantChart"></canvas></div>
        </section>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="script.js"></script>
</body>
</html>