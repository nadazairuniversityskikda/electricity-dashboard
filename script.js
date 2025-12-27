$(document).ready(function() {
    let consChart, montChart;

    function loadData() {
        $.getJSON('fetch-facture.php', function(data) {
            if (data.length > 0) {
                const labels = data.map(f => f.mois);
                const d1 = data.map(f => parseInt(f.consommation_kwh));
                const d2 = data.map(f => parseInt(f.montant_da));

                $('#consommationTotal').text(d1.reduce((a,b)=>a+b,0).toLocaleString() + " kWh");
                $('#montantTotal').text(d2.reduce((a,b)=>a+b,0).toLocaleString() + " DA");
                $('#moyenneConso').text(Math.round(d1.reduce((a,b)=>a+b,0)/data.length) + " kWh");
                $('#moisMax').text(labels[d1.indexOf(Math.max(...d1))]);

                if(consChart) consChart.destroy();
                if(montChart) montChart.destroy();

                consChart = new Chart(document.getElementById("consChart"), {
                    type: "line",
                    data: { 
                        labels: labels, 
                        datasets: [{ 
                            label: "Consommation (kWh)", 
                            data: d1, 
                            borderColor: "#00d2ff", 
                            fill: true, 
                            backgroundColor: "rgba(0,210,255,0.1)", 
                            tension: 0.3 
                        }] 
                    }
                });

                montChart = new Chart(document.getElementById("montantChart"), {
                    type: "bar",
                    data: { 
                        labels: labels, 
                        datasets: [{ 
                            label: "Montant (DA)", 
                            data: d2, 
                            backgroundColor: "#a29bfe" 
                        }] 
                    }
                });
            }
        });
    }

    loadData();

    $('#addFactureForm').on('submit', function(e) {
        e.preventDefault();
        $.post('add-facture.php', {
            mois: $('#mois').val(),
            consommation_kwh: $('#cons').val(),
            montant_da: $('#montant').val()
        }, function() {
            $('#addFactureForm')[0].reset();
            loadData();
        });
    });
});