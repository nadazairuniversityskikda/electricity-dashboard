// جلب البيانات من PHP
fetch('fetch-facture.php')
  .then(response => response.json())
  .then(data => {

    const mois = data.map(f => f.mois);
    const consommation = data.map(f => f.consomation_kwh || f.consumption_kwh); // إصلاح الاسم
    const montant = data.map(f => f.montant_da);

    const totalConsommation = consommation.reduce((a, b) => a + b, 0);
    document.getElementById('consommationTotal').innerText = Consommation totale: ${totalConsommation} kWh;

    const totalMontant = montant.reduce((a, b) => a + b, 0);
    document.getElementById('montantTotal').innerText = Montant total: ${totalMontant} DA;

    const moyenne = Math.round(totalConsommation / consommation.length);
    document.getElementById('moyenneMensuelle').innerText = Moyenne mensuelle: ${moyenne} kWh;

    const maxCons = Math.max(...consommation);
    const indexMax = consommation.indexOf(maxCons);
    document.getElementById('moisMax').innerText = Mois le plus consommé: ${mois[indexMax]};

    new Chart(document.getElementById("consChart"), {
      type: "line",
      data: {
        labels: mois,
        datasets: [{
          label: "Consommation (kWh)",
          data: consommation,
          borderColor: "blue",
          backgroundColor: "rgba(0,123,255,0.2)",
          fill: true
        }]
      },
      options: { responsive: true }
    });

    new Chart(document.getElementById("montantChart"), {
      type: "bar",
      data: {
        labels: mois,
        datasets: [{
          label: "Montant (DA)",
          data: montant,
          backgroundColor: "orange"
        }]
      },
      options: { responsive: true }
    });

  })
  .catch(error => console.error('Erreur fetch:', error));
