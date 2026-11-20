var secs = ["biz", "roadmap", "advisor", "cities", "airbnb", "yield", "loan", "cashflow", "compare", "contracts", "tax", "lesson"];

function go(n) {
  for (var i = 0; i < secs.length; i++) {
    var id = secs[i];
    var s = document.getElementById('sec-' + id);
    var b = document.getElementById('n-' + id);
    if (s) s.style.display = (id === n) ? 'block' : 'none';
    if (b) b.className = (id === n) ? 'nb active' : 'nb';
  }
}

function runBiz() {
  var reg = document.getElementById('biz-reg').value;
  var cap = document.getElementById('biz-cap').value;
  var out = document.getElementById('biz-out');
  var regions = {
    casa: {
      name: "Grand Casablanca (Casa, Dar Bouazza, Oulad Azzouz, Bouskoura)",
      zero: "Conciergerie Airbnb à Maarif/Marina, apporteur d’affaires immobilier sur Dar Bouazza / Oulad Azzouz / Bouskoura, ou services B2B.",
      small: "Sous-location meublée près de Casa Finance City (CFC), e-commerce COD depuis Derb Omar, ou location de scooters/voitures.",
      big: "Achat studio/F2 à louer aux cadres (CFC/Bouskoura) ou local commercial dans les nouvelles zones résidentielles."
    },
    nord: {
      name: "Nord & Tanger Med (Tanger, Tétouan, Chefchaouen)",
      zero: "Gestionnaire Airbnb pour les MRE propriétaires d’appartements fermés l’hiver, ou agence digitale/sourcing.",
      small: "Sous-location touristique à Malabata / Tanger Ville (clientèle espagnole & week-end) ou transport touristique privé.",
      big: "Achat studio près de la gare TGV Al Boraq / Ibn Batouta ou maison d’hôtes à Chefchaouen / Asilah."
    },
    kech: {
      name: "Marrakech & Centre (Marrakech, Agafay)",
      zero: "Co-hôte Airbnb & organisation d’excursions (Agafay, quad, transferts aéroport) avec commission de 20% à 30%.",
      small: "Sous-location autorisée à Guéliz / Hivernage (taux d’occupation annuel parmi les plus élevés d’Afrique).",
      big: "Achat appartement touristique ou rénovation de petit Riad titré en Médina."
    },
    sud: {
      name: "Agadir & Souss-Massa (Agadir, Taghazout)",
      zero: "Conciergerie pour surfeurs & Digital Nomads à Taghazout / Tamraght, ou vente en ligne de produits d’Argan bio.",
      small: "Surf-house / coliving en sous-location à Taghazout ou location de matériel nautique et vélos.",
      big: "Achat appartement vue mer à Founty / Marina d’Agadir (très demandé par les retraités européens en hiver)."
    },
    sahara: {
      name: "Sud & Sahara Marocain (Laâyoune, Dakhla)",
      zero: "Services logistiques, tourisme kitesurf/lagune à Dakhla ou conseil aux investisseurs.",
      small: "Équipement sportif, restauration rapide moderne ou sous-location pour cadres et techniciens des grands chantiers.",
      big: "Immobilier résidentiel pour cadres/ingénieurs ou écolodge touristique autour de la lagune de Dakhla."
    },
    rabat: {
      name: "Rabat, Fès & Meknès (Axe Administratif & Agricole)",
      zero: "Accompagnement administratif, traduction, conciergerie à Agdal/Hassan ou formation en ligne.",
      small: "Sous-location meublée haut standing pour diplomates/consultants à Rabat ou colocation étudiante meublée à Fès.",
      big: "Achat appartement familial à Hay Riad / Témara Plage (Rabat) ou immeuble étudiant à Fès."
    }
  };
  var r = regions[reg];
  var plan = cap === 'zero' ? r.zero : (cap === 'small' ? r.small : r.big);
  out.innerHTML = '<div class="row"><span>📍 Zone Ciblée :</span><strong>' + r.name + '</strong></div>' +
    '<p class="sm" style="margin-top:8px"><strong>💡 Meilleure Opportunité :</strong> ' + plan + '</p>' +
    '<div class="tip">🇲🇦 <strong>خطوة البداية :</strong> سجل راسك كمقاول ذاتي (Auto-Entrepreneur) باش تخدم بشكل قانوني وبضريبة 1% فقط.</div>';
}

function runAdvisor() {
  var bud = document.getElementById('adv-bud').value;
  var goal = document.getElementById('adv-goal').value;
  var out = document.getElementById('adv-out');
  var advice = bud === 'low' ?
    '<div class="row"><span>🚀 Stratégie :</span><strong>Conciergerie (15–25%) ou Sous-Location Autorisée</strong></div><p class="sm" style="margin-top:8px"><strong>• Où démarrer :</strong> Maarif/Gauthier (Casa), Guéliz (Marrakech), Malabata (Tanger), Marina (Agadir).</p>' :
    (bud === 'mid' ?
    '<div class="row"><span>🏢 Stratégie :</span><strong>Studio / F2 (300k–650k DH) à fort rendement</strong></div><p class="sm" style="margin-top:8px"><strong>• Quartiers :</strong> Belvédère / Oulfa / Oulad Azzouz (Casa), Témara (Rabat), Tanger Centre. Visez >8,5% brut.</p>' :
    '<div class="row"><span>👑 Stratégie :</span><strong>Studio Haut Standing / F2 Premium (Horizon 2030)</strong></div><p class="sm" style="margin-top:8px"><strong>• Quartiers :</strong> Casa Marina / CFC / Dar Bouazza, Hay Riad (Rabat), Malabata (Tanger), Hivernage (Marrakech).</p>');
  if (goal === 'plus') advice += '<div class="tip">🚄 <strong>Radar Plus-Value 2030 :</strong> Ciblez à moins de 15 min des gares TGV Al Boraq et des stades 2030.</div>';
  out.innerHTML = advice;
}

function showCity() {
  var c = document.getElementById('city-sel').value;
  var data = {
    casa: { q: "Maarif, Racine, Casa Marina, Belvédère, Bouskoura, Dar Bouazza / Oulad Azzouz", p: "8 500 – 24 000 DH/m²", r: "4 000 – 9 500 DH/mois", t: "Cadres, expatriés CFC et familles." },
    rabat: { q: "Agdal, Hassan, Hay Riad, Souissi, Témara Plage", p: "13 000 – 26 000 DH/m²", r: "5 000 – 11 000 DH/mois", t: "Diplomates, fonctionnaires et étudiants." },
    tanger: { q: "Malabata, Marshan, Iberia, Tanger Ville (Gare TGV)", p: "10 000 – 20 000 DH/m²", r: "4 000 – 8 500 DH/mois", t: "Touristes européens, cadres Tanger Med et MRE." },
    kech: { q: "Guéliz, Hivernage, Victor Hugo, Médina (Riads titrés)", p: "12 000 – 25 000 DH/m²", r: "500 – 1 300 DH/nuit Airbnb", t: "Tourisme international + Digital Nomads." },
    agadir: { q: "Agadir Marina, Founty, Sonaba, Taghazout Bay", p: "11 000 – 22 000 DH/m²", r: "4 500 – 9 000 DH/mois", t: "Surfeurs, retraités européens et estivants." },
    fes: { q: "Ville Nouvelle, Route d’Imouzzer, Bab Bou Jeloud", p: "6 500 – 12 000 DH/m²", r: "2 500 – 5 000 DH/mois", t: "Étudiants, familles et tourisme culturel." }
  };
  var d = data[c];
  document.getElementById('city-out').innerHTML =
    '<div class="row"><span>🏘️ Quartiers :</span><strong>' + d.q + '</strong></div>' +
    '<div class="row"><span>🏷️ Prix m² :</span><strong>' + d.p + '</strong></div>' +
    '<div class="row"><span>💵 Loyers :</span><strong>' + d.r + '</strong></div>' +
    '<div class="tip">👥 <strong>Locataires :</strong> ' + d.t + '</div>';
}

function calcAirbnb() {
  var rate = parseFloat(document.getElementById('ab-rate').value) || 0;
  var nights = parseFloat(document.getElementById('ab-nights').value) || 0;
  var rent = parseFloat(document.getElementById('ab-rent').value) || 0;
  var feePct = parseFloat(document.getElementById('ab-fee').value) || 0;
  var clean = parseFloat(document.getElementById('ab-clean').value) || 0;
  var util = parseFloat(document.getElementById('ab-util').value) || 0;
  var ca = rate * nights;
  var occ = ((nights / 30) * 100).toFixed(0);
  var totalExp = (ca * feePct / 100) + clean + util + rent;
  var profit = ca - totalExp;
  document.getElementById('ab-out').innerHTML =
    '<div class="row"><span>📈 Taux d’occupation :</span><strong>' + occ + '%</strong></div>' +
    '<div class="row"><span>💵 Chiffre d’affaires :</span><strong>' + Math.round(ca).toLocaleString() + ' DH</strong></div>' +
    '<div class="row"><span>📉 Total dépenses :</span><strong style="color:#F87171">-' + Math.round(totalExp).toLocaleString() + ' DH</strong></div>' +
    '<div class="row" style="border:none"><span>💰 Bénéfice estimé :</span><strong style="color:' + (profit >= 0 ? '#34D399' : '#F87171') + '">' + Math.round(profit).toLocaleString() + ' DH / mois</strong></div>';
}

function calcYield() {
  var price = parseFloat(document.getElementById('y-price').value) || 0;
  var fees = parseFloat(document.getElementById('y-fees').value) || 0;
  var rent = parseFloat(document.getElementById('y-rent').value) || 0;
  var cost = parseFloat(document.getElementById('y-cost').value) || 0;
  var totalInvest = price + fees;
  var netAnnual = (rent * 12) - cost;
  var grossYield = price > 0 ? ((rent * 12 / price) * 100).toFixed(2) : "0.00";
  var netYield = totalInvest > 0 ? ((netAnnual / totalInvest) * 100).toFixed(2) : "0.00";
  document.getElementById('y-out').innerHTML =
    '<div class="row"><span>🏗️ Coût total projet :</span><strong>' + Math.round(totalInvest).toLocaleString() + ' DH</strong></div>' +
    '<div class="row"><span>💵 Revenu net annuel :</span><strong>' + Math.round(netAnnual).toLocaleString() + ' DH / an</strong></div>' +
    '<div class="row"><span>📊 Rendement Brut :</span><strong>' + grossYield + '%</strong></div>' +
    '<div class="row" style="border:none"><span>🎯 Rendement Net :</span><strong>' + netYield + '% / an</strong></div>';
}

function calcLoan() {
  var sal = parseFloat(document.getElementById('ln-sal').value) || 0;
  var debt = parseFloat(document.getElementById('ln-debt').value) || 0;
  var yrs = parseFloat(document.getElementById('ln-yrs').value) || 20;
  var rate = parseFloat(document.getElementById('ln-rate').value) || 5.06;
  var down = parseFloat(document.getElementById('ln-down').value) || 0;
  var maxMens = Math.max((sal * 0.35) - debt, 0);
  var n = yrs * 12;
  var r = (rate / 100) / 12;
  var cap = r > 0 ? maxMens * ((1 - Math.pow(1 + r, -n)) / r) : maxMens * n;
  document.getElementById('ln-out').innerHTML =
    '<div class="row"><span>💳 Mensualité max (35%) :</span><strong>' + Math.round(maxMens).toLocaleString() + ' DH</strong></div>' +
    '<div class="row"><span>🏦 Capital empruntable :</span><strong>' + Math.round(cap).toLocaleString() + ' DH</strong></div>' +
    '<div class="row" style="border:none"><span>🏠 Budget d’achat total :</span><strong>' + Math.round(cap + down).toLocaleString() + ' DH</strong></div>';
}

