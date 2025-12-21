const data = [
  { mois: 'Janvier', consommation_kwh: 215, montant_da: 970 },
  { mois: 'Fevrier', consommation_kwh: 198, montant_da: 880 },
  { mois: 'Mars', consommation_kwh: 230, montant_da: 1000 },
  { mois: 'Avril', consommation_kwh: 185, montant_da: 820 },
  { mois: 'Mai', consommation_kwh: 175, montant_da: 790 },
  { mois: 'Juin', consommation_kwh: 260, montant_da: 1120 },
  { mois: 'Juillet', consommation_kwh: 310, montant_da: 1380 },
  { mois: 'Aout', consommation_kwh: 325, montant_da: 1460 },
  { mois: 'Septembre', consommation_kwh: 265, montant_da: 1200 },
  { mois: 'Octobre', consommation_kwh: 240, montant_da: 1030 },
  { mois: 'Novembre', consommation_kwh: 215, montant_da: 970 },
  { mois: 'Decembre', consommation_kwh: 285, montant_da: 1270 }
];

const mois = data.map(f => f.mois);
const consommation = data.map(f => f.consomation_kwh);
const montant = data.map(f => f.montant_da);

const totalConsommation = consommation.reduce((a,b)=>a+b,0);
document.getElementById('consommationTotal').innerText = Consommation totale: ${totalConsommation} kWh;

const totalMontant = montant.reduce((a,b)=>a+b,0);
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
