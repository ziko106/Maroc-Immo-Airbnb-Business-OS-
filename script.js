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
      zero: "Conciergerie Airbnb à Maarif/Marina, apporteur d’affaires immobilier sur les nouveaux projets de Dar Bouazza / Oulad Azzouz / Bouskoura, ou services B2B aux entreprises.",
      small: "Sous-location meublée près de Casa Finance City (CFC), e-commerce Paiement à la Livraison (COD) depuis Derb Omar, ou location de scooters/voitures.",
      big: "Achat studio/F2 à louer aux cadres (CFC/Bouskoura) ou local commercial dans les nouvelles zones résidentielles en pleine croissance."
    },
    nord: {
      name: "Nord & Tanger Med (Tanger, Tétouan, Chefchaouen)",
      zero: "Gestionnaire Airbnb pour les MRE propriétaires d’appartements fermés l’hiver, ou agence digitale/sourcing import-export.",
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
      zero: "Conciergerie pour surfeurs & Digital Nomads à Taghazout / Tamraght, ou vente en ligne de produits d’Argan / cosmétique bio certifiée.",
      small: "Surf-house / coliving en sous-location à Taghazout ou location de matériel nautique et vélos.",
      big: "Achat appartement vue mer à Founty / Marina d’Agadir (très demandé par les retraités européens en hiver)."
    },
    sahara: {
      name: "Sud & Sahara Marocain (Laâyoune, Dakhla)",
      zero: "Services logistiques, tourisme kitesurf/lagune à Dakhla ou conseil aux investisseurs.",
      small: "Équipement sportif, restauration rapide moderne ou sous-location pour cadres et techniciens des grands chantiers (Port Atlantique).",
      big: "Immobilier résidentiel pour cadres/ingénieurs ou écolodge touristique autour de la lagune de Dakhla."
    },
    rabat: {
      name: "Rabat, Fès & Meknès (Axe Administratif & Agricole)",
      zero: "Accompagnement administratif, traduction, conciergerie à Agdal/Hassan ou cours/formation en ligne.",
      small: "Sous-location meublée haut standing pour diplomates/consultants à Rabat ou colocation étudiante meublée à Fès.",
      big: "Achat appartement familial à Hay Riad / Témara Plage (Rabat) ou immeuble de rapport étudiant à Fès."
    }
  };

  var r = regions[reg];
  var plan = cap === 'zero' ? r.zero : (cap === 'small' ? r.small : r.big);

  out.innerHTML =
    '<div class="row"><span>📍 Zone Ciblée :</span><strong>' + r.name + '</strong></div>' +
    '<p class="sm" style="margin-top:8px"><strong>💡 Meilleure Opportunité Recommandée :</strong> ' + plan + '</p>' +
    '<div class="tip">🇲🇦 <strong>خطوة البداية :</strong> سجل راسك كمقاول ذاتي (Auto-Entrepreneur) باش تخدم بشكل قانوني وبضريبة 1% فقط، وبدا بتوليد الدخل قبل ما تاخد أي قرض.</div>';
}

function runAdvisor() {
  var bud = document.getElementById('adv-bud').value;
  var goal = document.getElementById('adv-goal').value;
  var out = document.getElementById('adv-out');
  var advice = "";

  if (bud === 'low') {
    advice = '<div class="row"><span>🚀 Stratégie Recommandée :</span><strong>Conciergerie (15–25%) ou Sous-Location Autorisée</strong></div>' +
      '<p class="sm" style="margin-top:8px"><strong>• Où démarrer :</strong> Maarif/Gauthier (Casablanca), Guéliz (Marrakech), Malabata (Tanger), Agadir Marina.</p>' +
      '<p class="sm"><strong>• Méthode :</strong> Utilisez l’onglet <strong>10. Contrats Pro</strong> pour signer un mandat de gestion ou une clause de sous-location écrite.</p>' +
      '<div class="tip">💡 <strong>Avantage :</strong> Vous encaissez du cash-flow dès le premier mois sans crédit bancaire ni apport élevé.</div>';
  } else if (bud === 'mid') {
    advice = '<div class="row"><span>🏢 Stratégie Recommandée :</span><strong>Studio / F2 (300k–650k DH) à fort rendement</strong></div>' +
      '<p class="sm" style="margin-top:8px"><strong>• Quartiers à fort rendement :</strong> Belvédère / Casa-Port / Oulfa / Oulad Azzouz (Casa), Agdal périphérie / Témara (Rabat), Tanger Centre / Iberia, Guéliz nord (Marrakech).</p>' +
      '<p class="sm"><strong>• Objectif chiffré :</strong> Visez au moins <strong>8,5% de rendement brut</strong> pour garder ~6,8% net après charges et vacance.</p>' +
      '<div class="tip">💡 <strong>Règle du Cours :</strong> Un quartier réputé n’est pas forcément le plus rentable : comparez toujours le prix d’achat, la demande locative et les charges.</div>';
  } else {
    advice = '<div class="row"><span>👑 Stratégie Recommandée :</span><strong>Studio Haut Standing / F2 Premium (Horizon 2030)</strong></div>' +
      '<p class="sm" style="margin-top:8px"><strong>• Quartiers cibles :</strong> Casa Marina / CFC / Racine / Dar Bouazza, Agdal / Hay Riad (Rabat), Malabata (Tanger), Hivernage (Marrakech), Founty (Agadir).</p>' +
      '<p class="sm"><strong>• Double levier :</strong> Tarifs Airbnb élevés (600–1 200 DH/nuit) + forte valorisation patrimoniale d’ici 2030.</p>' +
      '<div class="tip">💡 <strong>Repère Marché :</strong> Un studio demandé à 1 200 000 DH à Casablanca se négocie souvent 8% à 12% sous le prix affiché.</div>';
  }

  if (goal === 'plus') {
    advice += '<div class="tip">🚄 <strong>Radar Plus-Value 2030 :</strong> Ciblez les zones à moins de 15 min des gares TGV Al Boraq et des futurs stades (Benslimane, Rabat, Tanger, Marrakech).</div>';
  }
  out.innerHTML = advice;
}

function showCity() {
  var c = document.getElementById('city-sel').value;
  var data = {
    casa: { q: "Maarif, Racine, Casa Marina, Belvédère, Bouskoura, Dar Bouazza / Oulad Azzouz", p: "8 500 – 24 000 DH/m² (Studios dès 380k–450k DH en périphérie)", r: "4 000 – 9 500 DH/mois (ou 450–850 DH/nuit Airbnb)", t: "Cadres, expatriés CFC, familles en expansion sud-ouest et événements 2030." },
    rabat: { q: "Agdal, Hassan, Hay Riad, Souissi, Témara Plage", p: "13 000 – 26 000 DH/m²", r: "5 000 – 11 000 DH/mois (Très faible vacance locative)", t: "Diplomates, fonctionnaires, étudiants internationaux et familles." },
    tanger: { q: "Malabata, Marshan, Iberia, Tanger Ville (Gare TGV)", p: "10 000 – 20 000 DH/m² (Studios dès 420k DH)", r: "4 000 – 8 500 DH/mois (Forte hausse été & week-ends Espagne)", t: "Touristes européens (35 min de Tarifa), cadres Tanger Med et MRE." },
    kech: { q: "Guéliz, Hivernage, Victor Hugo, Médina (Riads titrés), Palmeraie", p: "12 000 – 25 000 DH/m²", r: "500 – 1 300 DH/nuit en Airbnb (Taux occupation 65–80%)", t: "Tourisme international toute l’année + Digital Nomads." },
    agadir: { q: "Agadir Marina, Founty, Sonaba, Taghazout Bay", p: "11 000 – 22 000 DH/m²", r: "4 500 – 9 000 DH/mois (450–950 DH/nuit)", t: "Surfeurs, retraités européens en hiver et estivants." },
    fes: { q: "Ville Nouvelle (Avenue Hassan II), Route d’Imouzzer, Bab Bou Jeloud", p: "6 500 – 12 000 DH/m² (Ticket d’entrée dès 280k DH)", r: "2 500 – 5 000 DH/mois (ou 300–550 DH/nuit)", t: "Étudiants, familles et tourisme culturel." }
  };
  var d = data[c];
  document.getElementById('city-out').innerHTML =
    '<div class="row"><span>🏘️ Meilleurs Quartiers :</span><strong>' + d.q + '</strong></div>' +
    '<div class="row"><span>🏷️ Prix Moyen au m² :</span><strong>' + d.p + '</strong></div>' +
    '<div class="row"><span>💵 Loyers Constatés :</span><strong>' + d.r + '</strong></div>' +
    '<div class="tip">👥 <strong>Profil des Locataires :</strong> ' + d.t + '</div>';
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
  var platFee = ca * (feePct / 100);
  var totalExp = platFee + clean + util + rent;
  var profit = ca - totalExp;

  document.getElementById('ab-out').innerHTML =
    '<div class="row"><span>📈 Taux d’occupation (sur 30 nuits) :</span><strong>' + occ + '%</strong></div>' +
    '<div class="row"><span>💵 Chiffre d’affaires mensuel :</span><strong>' + Math.round(ca).toLocaleString() + ' DH</strong></div>' +
    '<div class="row"><span>📉 Total dépenses (Loyer + Frais + Charges) :</span><strong style="color:#F87171">-' + Math.round(totalExp).toLocaleString() + ' DH</strong></div>' +
    '<div class="row" style="border:none"><span>💰 Bénéfice mensuel estimé (avant impôts) :</span><strong style="color:' + (profit >= 0 ? '#34D399' : '#F87171') + '">' + Math.round(profit).toLocaleString() + ' DH / mois</strong></div>';
}

function calcYield() {
