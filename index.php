<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Electricity Pro Dashboard</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
</head>
<body>
    <div class="glass-bg"></div>
    
    <header>
        <h1><i class="fas fa-bolt"></i> Dashboard Électrique Pro</h1>
        <p>Analyse et Suivi de Consommation</p>
    </header>

    <div class="container">
        <section class="cards">
            <div class="card">
                <div class="card-info"><h3>Total Conso</h3><p id="consommationTotal">--</p></div>
                <i class="fas fa-chart-line icon-blue"></i>
            </div>
            <div class="card">
                <div class="card-info"><h3>Total Montant</h3><p id="montantTotal">--</p></div>
                <i class="fas fa-wallet icon-green"></i>
            </div>
            <div class="card">
                <div class="card-info"><h3>Moyenne</h3><p id="moyenneConso">--</p></div>
                <i class="fas fa-calculator icon-purple"></i>
            </div>
            <div class="card">
                <div class="card-info"><h3>Mois Pic</h3><p id="moisMax">--</p></div>
                <i class="fas fa-fire icon-red"></i>
            </div>
        </section>

        <section class="charts">
            <div class="chart-box">
                <h3><i class="fas fa-curve-graph"></i> Evolution Consommation (kWh)</h3>
                <canvas id="consChart"></canvas>
            </div>
            <div class="chart-box">
                <h3><i class="fas fa-bar-chart"></i> Analyse des Coûts (DA)</h3>
                <canvas id="montantChart"></canvas>
            </div>
        </section>

        <section class="input-section glass-card">
            <h3><i class="fas fa-plus-circle"></i> Ajouter une Nouvelle Facture</h3>
            <form id="addFactureForm">
                <input type="text" id="mois" placeholder="Mois (ex: Janvier)" required>
                <input type="number" id="cons" placeholder="Consommation kWh" required>
                <input type="number" id="montant" placeholder="Montant en DA" required>
                <button type="submit">Enregistrer la donnée</button>
            </form>
        </section>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="script.js"></script>
</body>
</html>