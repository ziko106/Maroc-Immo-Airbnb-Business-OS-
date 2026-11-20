var S = ["biz","roadmap","advisor","cities","airbnb","yield","loan","cashflow","compare","contracts","tax","lesson"];

function go(n) {
  for (var i = 0; i < S.length; i++) {
    var id = S[i], s = document.getElementById("sec-" + id), b = document.getElementById("n-" + id);
    if (s) s.style.display = (id === n) ? "block" : "none";
    if (b) b.className = (id === n) ? "nb active" : "nb";
  }
}

function runBiz() {
  var reg = document.getElementById("biz-reg").value, cap = document.getElementById("biz-cap").value;
  var R = {
    casa: { n: "Grand Casablanca (Casa, Dar Bouazza, Oulad Azzouz, Bouskoura)", z: "Conciergerie Airbnb a Maarif/Marina ou apporteur d affaires immo sur Dar Bouazza / Oulad Azzouz.", s: "Sous-location meublee pres de CFC, e-commerce COD depuis Derb Omar ou location scooters.", b: "Achat studio/F2 cadres (CFC/Bouskoura) ou local commercial." },
    nord: { n: "Nord & Tanger Med", z: "Gestionnaire Airbnb pour MRE ou agence sourcing.", s: "Sous-location Malabata / Tanger Ville ou transport touristique.", b: "Studio pres gare TGV Al Boraq ou maison d hotes." },
    kech: { n: "Marrakech & Centre", z: "Co-hote Airbnb & excursions Agafay (20-30% com.).", s: "Sous-location autorisee Gueliz / Hivernage.", b: "Appartement touristique ou Riad titre en Medina." },
    sud: { n: "Agadir & Souss-Massa", z: "Conciergerie surfeurs Taghazout ou vente Argan bio.", s: "Surf-house / coliving en sous-location a Taghazout.", b: "Appartement vue mer Founty / Marina." },
    sahara: { n: "Sud & Sahara Marocain (Laayoune, Dakhla)", z: "Services logistiques, kitesurf Dakhla ou conseil.", s: "Restauration rapide moderne ou sous-location cadres.", b: "Immobilier cadres ou ecolodge lagune Dakhla." },
    rabat: { n: "Rabat, Fes & Meknes", z: "Accompagnement administratif ou conciergerie Agdal.", s: "Sous-location diplomates Rabat ou colocation etudiante Fes.", b: "Appartement Hay Riad / Temara ou immeuble etudiant Fes." }
  };
  var r = R[reg], p = (cap === "zero") ? r.z : (cap === "small") ? r.s : r.b;
  document.getElementById("biz-out").innerHTML = '<div class="row"><span>📍 Zone :</span><strong>' + r.n + '</strong></div><p class="sm" style="margin-top:8px"><strong>💡 Opportunite :</strong> ' + p + '</p><div class="tip">🇲🇦 <strong>خطوة البداية :</strong> سجل راسك كمقاول ذاتي (Auto-Entrepreneur) باش تخدم بشكل قانوني وبضريبة 1% فقط.</div>';
}

function runAdvisor() {
  var b = document.getElementById("adv-bud").value, g = document.getElementById("adv-goal").value;
  var t = (b === "low") ? '<div class="row"><span>🚀 Strategie :</span><strong>Conciergerie (15-25%) ou Sous-Location</strong></div><p class="sm">Demarrez a Maarif, Gueliz, Malabata ou Agadir Marina sans achat.</p>' : (b === "mid") ? '<div class="row"><span>🏢 Strategie :</span><strong>Studio / F2 (300k-650k DH)</strong></div><p class="sm">Ciblez Belvedere, Oulad Azzouz, Temara ou Tanger Centre. Visez >8,5% brut.</p>' : '<div class="row"><span>👑 Strategie :</span><strong>Haut Standing Horizon 2030</strong></div><p class="sm">Casa Marina/CFC, Hay Riad, Malabata, Hivernage. Negociez 8-12% sous le prix.</p>';
  if (g === "plus") t += '<div class="tip">🚄 Ciblez a moins de 15 min des gares TGV Al Boraq et des stades 2030.</div>';
  document.getElementById("adv-out").innerHTML = t;
}

function showCity() {
  var c = document.getElementById("city-sel").value;
  var D = {
    casa: { q: "Maarif, Racine, Casa Marina, Bouskoura, Dar Bouazza / Oulad Azzouz", p: "8 500 - 24 000 DH/m2", r: "4 000 - 9 500 DH/mois" },
    rabat: { q: "Agdal, Hassan, Hay Riad, Temara Plage", p: "13 000 - 26 000 DH/m2", r: "5 000 - 11 000 DH/mois" },
    tanger: { q: "Malabata, Marshan, Iberia, Tanger Ville", p: "10 000 - 20 000 DH/m2", r: "4 000 - 8 500 DH/mois" },
    kech: { q: "Gueliz, Hivernage, Medina (Riads titres)", p: "12 000 - 25 000 DH/m2", r: "500 - 1 300 DH/nuit" },
    agadir: { q: "Marina, Founty, Taghazout Bay", p: "11 000 - 22 000 DH/m2", r: "4 500 - 9 000 DH/mois" },
    fes: { q: "Ville Nouvelle, Route d Imouzzer", p: "6 500 - 12 000 DH/m2", r: "2 500 - 5 000 DH/mois" }
  };
  var d = D[c];
  document.getElementById("city-out").innerHTML = '<div class="row"><span>🏘️ Quartiers :</span><strong>' + d.q + '</strong></div><div class="row"><span>🏷️ Prix m2 :</span><strong>' + d.p + '</strong></div><div class="row" style="border:none"><span>💵 Loyers :</span><strong>' + d.r + '</strong></div>';
}

function calcAirbnb() {
  var r = +document.getElementById("ab-rate").value || 0, n = +document.getElementById("ab-nights").value || 0, l = +document.getElementById("ab-rent").value || 0, f = +document.getElementById("ab-fee").value || 0, cl = +document.getElementById("ab-clean").value || 0, u = +document.getElementById("ab-util").value || 0;
  var ca = r * n, exp = (ca * f / 100) + cl + u + l, p = ca - exp;
  document.getElementById("ab-out").innerHTML = '<div class="row"><span>📈 Occupation :</span><strong>' + Math.round(n / 30 * 100) + '%</strong></div><div class="row"><span>💵 Chiffre d affaires :</span><strong>' + Math.round(ca) + ' DH</strong></div><div class="row" style="border:none"><span>💰 Benefice estime :</span><strong style="color:' + (p >= 0 ? "#34D399" : "#F87171") + '">' + Math.round(p) + ' DH/mois</strong></div>';
}

function calcYield() {
  var p = +document.getElementById("y-price").value || 0, f = +document.getElementById("y-fees").value || 0, r = +document.getElementById("y-rent").value || 0, c = +document.getElementById("y-cost").value || 0, tot = p + f, net = (r * 12) - c;
  document.getElementById("y-out").innerHTML = '<div class="row"><span>🏗️ Cout total :</span><strong>' + tot + ' DH</strong></div><div class="row"><span>📊 Rendement Brut :</span><strong>' + (p > 0 ? (r * 12 / p * 100).toFixed(2) : 0) + '%</strong></div><div class="row" style="border:none"><span>🎯 Rendement Net :</span><strong>' + (tot > 0 ? (net / tot * 100).toFixed(2) : 0) + '%</strong></div>';
}

function calcLoan() {
  var s = +document.getElementById("ln-sal").value || 0, d = +document.getElementById("ln-debt").value || 0, y = +document.getElementById("ln-yrs").value || 20, rt = +document.getElementById("ln-rate").value || 5.06, dw = +document.getElementById("ln-down").value || 0;
  var m = Math.max(s * 0.35 - d, 0), n = y * 12, r = rt / 100 / 12, cap = r > 0 ? m * ((1 - Math.pow(1 + r, -n)) / r) : m * n;
  document.getElementById("ln-out").innerHTML = '<div class="row"><span>💳 Mensualite max (35%) :</span><strong>' + Math.round(m) + ' DH</strong></div><div class="row"><span>🏦 Capital empruntable :</span><strong>' + Math.round(cap) + ' DH</strong></div><div class="row" style="border:none"><span>🏠 Budget total achat :</span><strong>' + Math.round(cap + dw) + ' DH</strong></div>';
}

function calcCf() {
  var r = +document.getElementById("cf-rent").value || 0, b = +document.getElementById("cf-bank").value || 0, e = +document.getElementById("cf-exp").value || 0, cf = r - b - e, c3 = cf - 300, c5 = cf - 500;
  document.getElementById("cf-out").innerHTML = '<div class="row"><span>💰 Cash-Flow actuel :</span><strong>' + cf + ' DH/mois</strong></div><div class="row"><span>📉 Si loyer -300 DH :</span><strong>' + c3 + ' DH/mois</strong></div><div class="row" style="border:none"><span>🚨 Si loyer -500 DH :</span><strong style="color:' + (c5 >= 0 ? "#34D399" : "#F87171") + '">' + c5 + ' DH/mois</strong></div>' + (c5 < 0 ? '<div class="warn">⚠️ Marge faible : prevoyez une epargne de securite.</div>' : '<div class="tip">✅ Marge de securite solide.</div>');
}

function calcComp() {
  var pa = +document.getElementById("ca-p").value || 0, ra = +document.getElementById("ca-r").value || 0, ba = +document.getElementById("ca-b").value || 0, ea = +document.getElementById("ca-e").value || 0;
  var pb = +document.getElementById("cb-p").value || 0, rb = +document.getElementById("cb-r").value || 0, bb = +document.getElementById("cb-b").value || 0, eb = +document.getElementById("cb-e").value || 0;
  var cfa = ra - ba - ea, cfb = rb - bb - eb;
  document.getElementById("comp-out").innerHTML = '<div class="row"><span>💰 Cash-Flow (A vs B) :</span><strong>A: ' + cfa + ' DH | B: ' + cfb + ' DH</strong></div><div class="tip">' + (cfa > cfb ? "🏆 Appartement A gagne sur le cash-flow." : cfb > cfa ? "🏆 Appartement B gagne sur le cash-flow." : "⚖️ Egalite parfaite sur le cash-flow.") + '</div>';
}

function genContract() {
  var t = document.getElementById("ct-type").value, ow = document.getElementById("ct-owner").value, yo = document.getElementById("ct-you").value, ad = document.getElementById("ct-addr").value, va = document.getElementById("ct-val").value;
  document.getElementById("ct-out").innerText = (t === "sub") ? "AVENANT SOUS-LOCATION AUTORISEE\nBailleur: " + ow + " | Locataire: " + yo + "\nBien: " + ad + " (" + va + ")\nLe Bailleur autorise la location courte duree.\n\nملحق ترخيص بالكراء السياحي: يرخص المالك للمكتري بإعادة كراء الشقة لمدة قصيرة." : "MANDAT CONCIERGERIE AIRBNB\nProprietaire: " + ow + " | Gestionnaire: " + yo + "\nBien: " + ad + " | Commission: " + va + "\nGestion des annonces, voyageurs et menage.\n\nعقد تفويض تسيير الكراء السياحي مقابل العمولة المتفق عليها.";
}

function copyContract() {
  var t = document.getElementById("ct-out").innerText;
  if (navigator.clipboard) navigator.clipboard.writeText(t);
  alert("Copie !");
}

runBiz(); runAdvisor(); showCity(); calcAirbnb(); calcYield(); calcLoan(); calcCf(); calcComp(); genContract();
