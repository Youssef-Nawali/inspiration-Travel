/* ═══════════════════════════════════════════════════════
   SOUFIES — main.js  |  i18n + UI logic + EmailJS
   ═══════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────
   TRANSLATIONS  (FR / EN)
───────────────────────────────────────── */
const translations = {
  fr: {
    loader_text: 'Bienvenue en Tunisie',
    nav_excursions: 'Excursions',
    nav_soufies: 'Visites Soufies',
    nav_transfers: 'Transferts',
    nav_reviews: 'Avis',
    nav_book: 'Réserver',
    hero_eyebrow: 'Tunisie · Voyages d\'exception depuis 2026',
    hero_title1: 'Là où le désert',
    hero_title2: 'rencontre l\'âme',
    hero_title3: 'du monde',
    hero_sub: 'Excursions sur-mesure, transferts privés et immersions spirituelles soufies. Une Tunisie authentique, loin des sentiers battus.',
    hero_cta1: 'Découvrir nos circuits',
    hero_cta2: 'Visites Soufies Exclusives',
    scroll_label: 'Défiler',
    marq_soufies: 'Visites Soufies',
    dest_label: 'Nos circuits',
    dest_title: 'Des destinations<br><em>inoubliables</em>',
    dest_sub: 'De l\'or du Sahara aux bleus de Sidi Bou Saïd, chaque destination est une invitation à vivre la Tunisie de l\'intérieur.',
    stat_dest: 'Destinations',
    stat_travelers: 'Voyageurs satisfaits',
    card1_tag: 'Aventure · Sud',
    card1_name: 'Excursion Sud Tunisien',
    card1_desc: 'Sahara, dunes dorées, ksour berbères, villages troglodytes… Le grand Sud vous attend. Prix selon destination et programme choisi.',
    card2_tag: 'Culturel · Pack 4 pers.',
    card2_name: 'Excursion Tunis',
    card2_desc: 'Médina, Carthage, Bardo, Sidi Bou Saïd… Tunis et ses trésors en une journée inoubliable.',
    card3_tag: 'Spirituel & Côtier',
    card3_desc: 'La cité sainte de Kairouan, les plages de Sousse et le majestueux amphithéâtre d\'El Jem en une excursion unique.',
    card4_tag: 'Îlien · Découverte',
    card4_name: 'Île de Djerba',
    card4_desc: 'Mille et une nuits en réalité : marchés animés, plages turquoise, synagogue de la Ghriba. Une île hors du temps.',
    card5_tag: '🌟 Circuit Complet',
    card5_name: 'Circuit Sur Mesure',
    card5_desc: 'Construisez votre propre aventure tunisienne. Destinations, durée, rythme — tout est adapté selon vos envies.',
    per4: '/ 4 pers.',
    price_per4: 'Prix selon <small>/ 4 pers.</small>',
    price_on_request: 'Prix selon <small>itinéraire</small>',
    price_quote: 'Sur <small>devis</small>',
    price_quote_text: 'Sur devis',
    price_ham: 'Prix selon<small> A/R</small>',
    price_sou: 'Prix selon<small> A/R</small>',
    price_mon: 'Prix selon<small> A/R</small>',
    price_sud: 'Prix selon<small> A/R</small>',
    price_sou1: 'Prix selon itinéraire',
    price_sou2: 'Prix selon itinéraire',
    card3_name: 'Kairouan · Sousse · Jem',
    sou_label: 'Tourisme spirituel',
    sou_title: 'Immersion au<br>cœur du<br><em>soufisme</em>',
    sou_sub: 'La Tunisie abrite l\'une des traditions soufies les plus riches du monde arabe. Nos guides vous ouvrent des portes habituellement fermées aux voyageurs ordinaires.',
    sou_img_title: 'L\'âme du soufisme tunisien',
    sou_img_sub: 'Une expérience spirituelle unique, guidée par des experts passionnés.',
    sou_badge: 'Expérience Unique',
    sou1_title: 'Ziyara Soufie · Tunis',
    sou1_desc: 'Visite guidée des zaouïas et mausolées soufis de Tunis. Accès privilégié aux sanctuaires, rencontres avec des maîtres spirituels.',
    sou2_title: 'Ziyara Soufie · Kairouan',
    sou2_desc: 'Immersion dans la cité sainte de Kairouan — zaouïas historiques, cérémonies de dhikr, rencontres authentiques avec les confréries.',
    sou3_title: 'Circuit Soufie Sur Mesure',
    sou3_desc: 'Combinez plusieurs ziyaras, personnalisez votre itinéraire spirituel selon vos envies. Durée et destinations au choix.',
    sou_cta: 'Planifier ma visite soufie',
    tr_label: 'Transferts Privés',
    tr_title: 'Votre trajet,<br><em>notre priorité</em>',
tr_sub: 'Nos chauffeurs professionnels vous conduisent partout en Tunisie. Confort, ponctualité, prix fixes. Contacter pour VIP',    tr_carthage_label: 'Aéroport Tunis-Carthage · Pack 4 personnes',
    tr1_desc: 'Aéroport Tunis-Carthage ↔ Hammamet. Transfert direct, véhicule climatisé, chauffeur professionnel. <strong style="color:var(--gold2)">Aller & Retour inclus.</strong>',
    tr2_desc: 'Aéroport Tunis-Carthage ↔ Sousse. Trajet confortable sur autoroute, prise en charge immédiate. <strong style="color:var(--gold2)">Aller & Retour inclus.</strong>',
    tr3_desc: 'Aéroport Tunis-Carthage ↔ Monastir. Accueil personnalisé avec pancarte nominative. <strong style="color:var(--gold2)">Aller & Retour inclus.</strong>',
    tr4_name: '↔ Le Sud',
    tr4_desc: 'Aéroport Tunis-Carthage ↔ Destinations du Sud tunisien. <strong style="color:var(--gold2)">Aller & Retour inclus.</strong>',
    tr_enfidha_label: 'Aéroport Enfidha (Nfidha) · Mêmes tarifs',
    tr_enfidha_text: 'Les mêmes destinations et les mêmes tarifs s\'appliquent depuis l\'<strong style="color:var(--sand)">Aéroport International Enfidha-Hammamet</strong>. Pack 4 personnes · Véhicule climatisé · Chauffeur professionnel · <strong style="color:var(--gold)">Sud à partir de 380 DT aller-retour.</strong>',
    tr_tunis_label: 'Transferts & Déplacements à Tunis',
    tr5_name: '↔ Déplacements à Tunis',
    tr5_desc: 'Transferts & circuits dans Tunis et sa région selon vos besoins. <strong style="color:var(--gold2)">Aller & Retour inclus.</strong> Tarif selon itinéraire choisi.',
    tr6_name: 'Sur Mesure · Partout',
    tr6_desc: 'Un itinéraire unique selon vos envies : ville, campagne, sud, côte… Prix déterminé selon destination et programme. Contactez-nous.',
    from: 'À partir de ',
    round_trip: 'Aller & Retour inclus.',
    testi_label: 'Ils nous font confiance',
    testi_title: 'Ce que disent<br>nos <em>voyageurs</em>',
    testi1: 'Une expérience au-delà de toute attente. La visite soufie de Kairouan m\'a profondément touché. Guide exceptionnel, organisation parfaite.',
    testi2: 'Le circuit Sahara était magique. Nuit sous les étoiles, silence absolu, ciel incroyable. Je recommande à 100% à tous les voyageurs.',
    testi3: 'Transfert aéroport impeccable, ponctuel et professionnel. Chauffeur très agréable et multilingue. Je reviendrai certainement.',
    testi4: 'Djerba comme je n\'aurais jamais pu la découvrir seule. Les coins cachés, les rencontres locales, la nourriture… tout était parfait.',
    testi5: 'La cérémonie de dhikr était une expérience spirituelle hors du commun. Je suis reparti transformé. Merci infiniment à toute l\'équipe.',
    book_label: 'Réservation',
    book_title: 'Planifions votre<br><em>voyage ensemble</em>',
    book_sub: 'Notre équipe de spécialistes vous répond sous 12h. Pour les urgences et réservations de dernière minute, contactez-nous directement.',
    contact_phone_label: 'Téléphone & WhatsApp',
    contact_hours_label: 'Disponibilité',
    contact_hours_val: '7j/7 · 8h — 22h',
    form_firstname: 'Prénom',
    form_lastname: 'Nom',
    form_phone: 'Téléphone / WhatsApp',
    form_service: 'Type de service',
    form_persons: 'Nombre de personnes',
    form_date: 'Date souhaitée',
    form_message: 'Message (optionnel)',
    form_submit: 'Envoyer ma demande',
    form_sending: '⏳ Envoi en cours…',
    form_success: '✓ Demande envoyée — Nous vous répondons sous 12h !',
    form_error: '✕ Erreur — Réessayez ou contactez-nous directement',
    footer_about: 'Votre partenaire de confiance pour des excursions, transferts et visites soufies d\'exception en Tunisie. Authentique, professionnel, inoubliable.',
    footer_services: 'Services',
    footer_destinations: 'Destinations',
    footer_custom: 'Sur Mesure',
    footer_copy: '© 2026 Inspiration Travel — Tous droits réservés. Tunisie.',
    footer_privacy: 'Politique de confidentialité',
    footer_terms: 'Conditions générales',
    service_options: [
      'Excursion Tunis',
      'Excursion Kairouan · Sousse · Jem',
      'Excursion Sud Tunisien ',
      'Transfert A/R Aéroport Carthage ↔ Hammamet',
      'Transfert A/R Aéroport Carthage ↔ Sousse ',
      'Transfert A/R Aéroport Carthage ↔ Monastir',
      'Transfert A/R Aéroport Carthage ↔ Sud',
      'Transfert A/R Aéroport Enfidha',
      'Transfert A/R à Tunis',
      'Ziyara Soufie Tunis',
      'Ziyara Soufie Kairouan',
      'Circuit Sur Mesure'
    ]
  },

  en: {
    loader_text: 'Welcome to Tunisia',
    nav_excursions: 'Excursions',
    nav_soufies: 'Sufi Visits',
    nav_transfers: 'Transfers',
    nav_reviews: 'Reviews',
    nav_book: 'Book Now',
    hero_eyebrow: 'Tunisia · Exceptional journeys since 2026',
    hero_title1: 'Where the desert',
    hero_title2: 'meets the soul',
    hero_title3: 'of the world',
    hero_sub: 'Tailor-made excursions, private transfers and Sufi spiritual immersions. An authentic Tunisia, off the beaten path.',
    hero_cta1: 'Explore our tours',
    hero_cta2: 'Exclusive Sufi Visits',
    scroll_label: 'Scroll',
    marq_soufies: 'Sufi Visits',
    dest_label: 'Our tours',
    dest_title: 'Unforgettable<br><em>destinations</em>',
    dest_sub: 'From the gold of the Sahara to the blues of Sidi Bou Saïd, each destination is an invitation to experience Tunisia from the inside.',
    stat_dest: 'Destinations',
    stat_travelers: 'Satisfied travelers',
    card1_tag: 'Adventure · South',
    card1_name: 'South Tunisia Tour',
    card1_desc: 'Sahara, golden dunes, Berber ksour, troglodyte villages… The great South awaits you. Price based on chosen destination and program.',
    card2_tag: 'Cultural · Pack 4 pers.',
    card2_name: 'Tunis Excursion',
    card2_desc: 'Medina, Carthage, Bardo, Sidi Bou Saïd… Tunis and its treasures in one unforgettable day.',
    card3_tag: 'Spiritual & Coastal',
    card3_desc: 'The holy city of Kairouan, the beaches of Sousse and the majestic El Jem amphitheatre in one unique excursion.',
    card4_tag: 'Island · Discovery',
    card4_name: 'Djerba Island',
    card4_desc: 'A real-life Arabian Nights: vibrant markets, turquoise beaches, the Ghriba synagogue. A timeless island.',
    card5_tag: '🌟 Full Circuit',
    card5_name: 'Custom Tour',
    card5_desc: 'Build your own Tunisian adventure. Destinations, duration, pace — everything is tailored to your desires.',
    per4: '/ 4 pers.',
    price_per4: 'Price <small>/ 4 pers.</small>',
    price_on_request: 'Price <small>on request</small>',
    price_quote: 'On <small>quote</small>',
    price_quote_text: 'On quote',
    price_ham: 'Price<small> per trip</small>',
    price_sou: 'Price<small> per trip</small>',
    price_mon: 'Price<small> per trip</small>',
    price_sud: 'Price<small> per trip</small>',
    price_sou1: 'Price on request',
    price_sou2: 'Price on request',
    card3_name: 'Kairouan · Sousse · Jem',
    sou_label: 'Spiritual Tourism',
    sou_title: 'Immersion at the<br>heart of<br><em>Sufism</em>',
    sou_sub: 'Tunisia is home to one of the richest Sufi traditions in the Arab world. Our guides open doors usually closed to ordinary travelers.',
    sou_img_title: 'The soul of Tunisian Sufism',
    sou_img_sub: 'A unique spiritual experience, guided by passionate experts.',
    sou_badge: 'Unique Experience',
    sou1_title: 'Sufi Ziyara · Tunis',
    sou1_desc: 'Guided tour of the Sufi zawiyas and mausoleums of Tunis. Privileged access to sanctuaries, meetings with spiritual masters.',
    sou2_title: 'Sufi Ziyara · Kairouan',
    sou2_desc: 'Immersion in the holy city of Kairouan — historic zawiyas, dhikr ceremonies, authentic encounters with brotherhoods.',
    sou3_title: 'Custom Sufi Circuit',
    sou3_desc: 'Combine multiple ziyaras, personalize your spiritual itinerary as you wish. Duration and destinations of your choice.',
    sou_cta: 'Plan my Sufi visit',
    tr_label: 'Private Transfers',
    tr_title: 'Your journey,<br><em>our priority</em>',
tr_sub: 'Our professional drivers take you anywhere in Tunisia. Comfort, punctuality, fixed prices. Contact for VIP',    tr_carthage_label: 'Tunis-Carthage Airport · Pack 4 persons',
    tr1_desc: 'Tunis-Carthage Airport ↔ Hammamet. Direct transfer, air-conditioned vehicle, professional driver. <strong style="color:var(--gold2)">Round trip included.</strong>',
    tr2_desc: 'Tunis-Carthage Airport ↔ Sousse. Comfortable motorway journey, immediate pickup. <strong style="color:var(--gold2)">Round trip included.</strong>',
    tr3_desc: 'Tunis-Carthage Airport ↔ Monastir. Personalised welcome with name board. <strong style="color:var(--gold2)">Round trip included.</strong>',
    tr4_name: '↔ The South',
    tr4_desc: 'Tunis-Carthage Airport ↔ South Tunisia destinations. <strong style="color:var(--gold2)">Round trip included.</strong>',
    tr_enfidha_label: 'Enfidha Airport (Nfidha) · Same rates',
    tr_enfidha_text: 'The same destinations and same rates apply from <strong style="color:var(--sand)">Enfidha-Hammamet International Airport</strong>. Pack 4 persons · Air-conditioned vehicle · Professional driver · <strong style="color:var(--gold)">South from 380 DT round trip.</strong>',
    tr_tunis_label: 'Transfers & Travel in Tunis',
    tr5_name: '↔ Tunis City Transfers',
    tr5_desc: 'Transfers & circuits in Tunis and its region according to your needs. <strong style="color:var(--gold2)">Round trip included.</strong> Price according to chosen itinerary.',
    tr6_name: 'Custom · Anywhere',
    tr6_desc: 'A unique itinerary tailored to your wishes: city, countryside, south, coast… Price determined by destination and programme. Contact us.',
    from: 'From ',
    round_trip: 'Round trip included.',
    testi_label: 'They trust us',
    testi_title: 'What our <em>travelers</em><br>are saying',
    testi1: 'An experience beyond all expectations. The Sufi visit to Kairouan deeply moved me. Exceptional guide, perfect organisation.',
    testi2: 'The Sahara tour was magical. Night under the stars, absolute silence, incredible sky. I recommend it 100% to all travelers.',
    testi3: 'Flawless airport transfer, punctual and professional. Very pleasant and multilingual driver. I will definitely come back.',
    testi4: 'Djerba as I could never have discovered it alone. The hidden corners, the local encounters, the food… everything was perfect.',
    testi5: 'The dhikr ceremony was an extraordinary spiritual experience. I left transformed. Infinite thanks to the whole team.',
    book_label: 'Booking',
    book_title: 'Let\'s plan your<br><em>journey together</em>',
    book_sub: 'Our team of specialists responds within 12h. For urgent or last-minute bookings, contact us directly.',
    contact_phone_label: 'Phone & WhatsApp',
    contact_hours_label: 'Availability',
    contact_hours_val: '7d/7 · 8am — 10pm',
    form_firstname: 'First name',
    form_lastname: 'Last name',
    form_phone: 'Phone / WhatsApp',
    form_service: 'Type of service',
    form_persons: 'Number of persons',
    form_date: 'Desired date',
    form_message: 'Message (optional)',
    form_submit: 'Send my request',
    form_sending: '⏳ Sending…',
    form_success: '✓ Request sent — We\'ll reply within 12h!',
    form_error: '✕ Error — Please retry or contact us directly',
    footer_about: 'Your trusted partner for exceptional excursions, transfers and Sufi visits in Tunisia. Authentic, professional, unforgettable.',
    footer_services: 'Services',
    footer_destinations: 'Destinations',
    footer_custom: 'Custom Tour',
    footer_copy: '© 2025 Inspiration Travel — All rights reserved. Tunisia.',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms & Conditions',
    service_options: [
      'Tunis Excursion ',
      'Kairouan · Sousse · Jem Excursion ',
      'South Tunisia Excursion',
      'Round Trip Carthage Airport ↔ Hammamet',
      'Round Trip Carthage Airport ↔ Sousse',
      'Round Trip Carthage Airport ↔ Monastir',
      'Round Trip Carthage Airport ↔ South',
      'Round Trip Enfidha Airport',
      'Round Trip Tunis City',
      'Sufi Ziyara Tunis',
      'Sufi Ziyara Kairouan',
      'Custom Circuit'
    ]
  }
};

/* ─────────────────────────────────────────
   LANGUAGE SWITCHER
───────────────────────────────────────── */
let currentLang = localStorage.getItem('soufies_lang') || 'fr';

function setLang(lang) {
  currentLang = lang;
  try { localStorage.setItem('soufies_lang', lang); } catch(e) {}

  const t = translations[lang];
  if (!t) return;
  document.documentElement.lang = lang;

  /* ── Flash the clicked button ── */
  const btnFR = document.getElementById('langFR');
  const btnEN = document.getElementById('langEN');
  const clicked = lang === 'fr' ? btnFR : btnEN;
  if (clicked) {
    clicked.classList.add('switching');
    setTimeout(() => clicked.classList.remove('switching'), 300);
  }

  /* ── Animate out ── */
  const animated = document.querySelectorAll('[data-i18n]');
  animated.forEach(el => {
    el.style.transition = 'opacity .25s ease, transform .25s ease';
    el.style.opacity = '0';
    el.style.transform = 'translateY(8px)';
  });

  setTimeout(() => {
    /* ── Swap text ── */
    animated.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    const sel = document.getElementById('f_service');
    if (sel && t.service_options) {
      sel.innerHTML = t.service_options.map(o => `<option>${o}</option>`).join('');
    }

    document.title = lang === 'fr'
      ? 'Inspiration Travel — Voyages d\'Exception en Tunisie'
      : 'Inspiration Travel — Exceptional Journeys in Tunisia';

    if (btnFR) btnFR.classList.toggle('active', lang === 'fr');
    if (btnEN) btnEN.classList.toggle('active', lang === 'en');

    /* ── Animate in ── */
    animated.forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, i * 8);
    });
  }, 260);
}

/* ─────────────────────────────────────────
   LOADER — hides when page fully loaded
───────────────────────────────────────── */
function hideLoader() {
  const loader = document.getElementById('loader');
  if (loader) loader.classList.add('hide');
  loadImages();
}

function loadImages() {
  const imgs = {
    'img-sahara'  : 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&q=80',
    'img-carthage': 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80',
    'img-sidi'    : 'https://images.unsplash.com/photo-1597211559034-19f1b0c0bf77?w=800&q=80',
    'img-djerba'  : 'https://images.unsplash.com/photo-1597211833558-27d0ff2d4ff4?w=800&q=80',
    'img-ksar'    : 'https://images.unsplash.com/photo-1531761535209-180857e963b9?w=800&q=80',
  };
  Object.entries(imgs).forEach(([cls, url]) => {
    document.querySelectorAll('.' + cls).forEach(el => {
      el.style.backgroundImage = `url('${url}')`;
    });
  });
}

/* ─────────────────────────────────────────
   LOADER — CSS animation drives the timing
   The bar animates for 2.5s then hides loader
───────────────────────────────────────── */
setLang(currentLang);
setTimeout(hideLoader, 2500);

/* ─────────────────────────────────────────
   CUSTOM CURSOR
───────────────────────────────────────── */
const cur  = document.getElementById('cur');
const cur2 = document.getElementById('cur2');
let mx=0, my=0, rx=0, ry=0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cur.style.cssText = `left:${mx-4}px;top:${my-4}px`;
});
(function animCursor() {
  rx += (mx - rx - .5) * 0.1;
  ry += (my - ry - .5) * 0.1;
  cur2.style.cssText = `left:${rx-19}px;top:${ry-19}px`;
  requestAnimationFrame(animCursor);
})();
document.querySelectorAll('a,button,.dest-card,.tr-card,.sf-item,.contact-row').forEach(el => {
  el.addEventListener('mouseenter', () => { cur2.style.transform='scale(1.8)'; cur2.style.opacity='.3'; });
  el.addEventListener('mouseleave', () => { cur2.style.transform='scale(1)';   cur2.style.opacity='1';  });
});

/* ─────────────────────────────────────────
   STAR FIELD
───────────────────────────────────────── */
const starsC = document.getElementById('stars');
for (let i = 0; i < 160; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  const size = Math.random() * 2.5 + 0.5;
  const dur  = Math.random() * 4 + 2;
  const del  = Math.random() * 6;
  const minO = Math.random() * .1 + .05;
  const maxO = Math.random() * .6 + .3;
  s.style.cssText = `width:${size}px;height:${size}px;top:${Math.random()*60}%;left:${Math.random()*100}%;--d:${dur}s;--delay:${del}s;--min:${minO};--max:${maxO}`;
  starsC.appendChild(s);
}

/* ─────────────────────────────────────────
   SAND PARTICLES
───────────────────────────────────────── */
const pC = document.getElementById('particles');
for (let i = 0; i < 20; i++) {
  const p   = document.createElement('div');
  p.className = 'particle';
  const size = Math.random() * 3 + 1;
  const dur  = Math.random() * 15 + 10;
  const dx   = (Math.random() - 0.5) * 200;
  p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;animation-duration:${dur}s;animation-delay:${Math.random()*10}s;--dx:${dx}px`;
  pC.appendChild(p);
}

/* ─────────────────────────────────────────
   NAV SCROLL EFFECT
───────────────────────────────────────── */
const nav = document.getElementById('nav');
addEventListener('scroll', () => nav.classList.toggle('solid', scrollY > 60));

/* ─────────────────────────────────────────
   MOBILE MENU
───────────────────────────────────────── */
document.getElementById('ham').onclick     = () => document.getElementById('mobMenu').classList.add('open');
document.getElementById('mobClose').onclick = closeMenu;
function closeMenu() { document.getElementById('mobMenu').classList.remove('open'); }

/* ─────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
}, { threshold: 0.1 });
document.querySelectorAll('.rx,.rl,.rr').forEach(el => obs.observe(el));

/* ─────────────────────────────────────────
   SMOOTH ANCHOR LINKS
───────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});

/* ─────────────────────────────────────────
   EMAILJS — replace the 3 values below
───────────────────────────────────────── */
const EJS_PUBLIC_KEY  = 'RHPDwkzleIdoC7rJE';
const EJS_SERVICE_ID  = 'service_te4u7ci';
const EJS_TEMPLATE_ID = 'template_rvkcgb2';
emailjs.init({ publicKey: EJS_PUBLIC_KEY });

/* ─────────────────────────────────────────
   FORM SUBMIT
───────────────────────────────────────── */
async function submitForm() {
  const btn = document.getElementById('fsubmit');
  const t   = translations[currentLang];

  const prenom = document.getElementById('f_prenom').value.trim();
  const email  = document.getElementById('f_email').value.trim();
  if (!prenom || !email) { shake(btn); return; }

  btn.textContent  = t.form_sending;
  btn.disabled     = true;
  btn.style.opacity = '.7';

  const params = {
    prenom,
    nom:       document.getElementById('f_nom').value.trim(),
    email,
    telephone: document.getElementById('f_tel').value.trim(),
    service:   document.getElementById('f_service').value,
    personnes: document.getElementById('f_personnes').value || '—',
    date:      document.getElementById('f_date').value || '—',
    message:   document.getElementById('f_message').value.trim() || '—',
  };

  try {
    await emailjs.send(EJS_SERVICE_ID, EJS_TEMPLATE_ID, params);
    btn.textContent      = t.form_success;
    btn.style.background = '#2A4A2A';
    btn.style.color      = '#7FD47F';
    btn.style.opacity    = '1';
    ['f_prenom','f_nom','f_email','f_tel','f_personnes','f_date','f_message']
      .forEach(id => { document.getElementById(id).value = ''; });
    setTimeout(() => {
      btn.textContent = t.form_submit;
      btn.style.background = ''; btn.style.color = '';
      btn.disabled = false;
    }, 6000);
  } catch (err) {
    btn.textContent      = t.form_error;
    btn.style.background = '#4A2A2A';
    btn.style.color      = '#FF9999';
    btn.style.opacity    = '1';
    btn.disabled = false;
    setTimeout(() => {
      btn.textContent = t.form_submit;
      btn.style.background = ''; btn.style.color = '';
    }, 5000);
    console.error('EmailJS error:', err);
  }
}

function shake(el) {
  el.style.outline = '2px solid #C8993A';
  setTimeout(() => el.style.outline = '', 1500);
}

/* ─────────────────────────────────────────
   PARALLAX MOON
───────────────────────────────────────── */
addEventListener('scroll', () => {
  const moon = document.querySelector('.moon');
  if (moon) moon.style.transform = `translateY(${scrollY * .12}px)`;
});
