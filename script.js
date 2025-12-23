$(document).ready(function() {
    loadData();

    function loadData() {
        $.ajax({
            url: 'fetch-facture.php',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                const mois = data.map(f => f.mois);
                const consumption = data.map(f => parseInt(f.consommation_kwh));
                const montant = data.map(f => parseInt(f.montant_da));

                $('#consommationTotal').text(consumption.reduce((a,b)=>a+b,0).toLocaleString());
                $('#montantTotal').text(montant.reduce((a,b)=>a+b,0).toLocaleString());
                $('#moisMax').text(mois[consumption.indexOf(Math.max(...consumption))]);

                renderCharts(mois, consumption, montant);
            }
        });
    }

    let consChart, montChart;
    function renderCharts(labels, d1, d2) {
        if(consChart) consChart.destroy();
        if(montChart) montChart.destroy();

        consChart = new Chart(document.getElementById("consChart"), {
            type: "line",
            data: { labels: labels, datasets: [{ label: "kWh", data: d1, borderColor: "#4e73df", tension: 0.4, fill: true, backgroundColor: "rgba(78,115,223,0.1)" }] }
        });

        montChart = new Chart(document.getElementById("montantChart"), {
            type: "bar",
            data: { labels: labels, datasets: [{ label: "DA", data: d2, backgroundColor: "#1cc88a" }] }
        });
    }

    $('#addFactureForm').on('submit', function(e) {
        e.preventDefault();
        alert("Action interactive détectée (Simulation AJAX Post)");
        this.reset();
    });
});