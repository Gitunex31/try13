function toggleLangMenu() {
  const menu = document.querySelector('.lang-options');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Ferme le menu si on clique en dehors
document.addEventListener('click', function (e) {
  const container = document.querySelector('.custom-language-selector');
  if (!container.contains(e.target)) {
    document.querySelector('.lang-options').style.display = 'none';
  }
});

function toggleDarkMode() {
    document.documentElement.dataset.theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  }

// translations.js
// Structure de traductions pour chaque langue
const translations = {
  fr: {
    hero_title: "Bienvenue sur RechargStatus.com",
    hero_link : "Découvrir nos offres",
    hero_text: "Vérification rapide de vos billets pour savoir s'ils ont déjà été utilisés. Recevez un message de confirmation dans votre boîte aux lettres immédiatement après l'achat.",
    faq1: "Qu'est-ce que Transcash ?",
    faq1r: "Une carte Transcash est une carte prépayée que vous pouvez utiliser dans n'importe quel commerce (en ligne ou physique) qui accepte les paiements via Mastercard. Un ticket Transcash est associé à un code et a une valeur de crédit que vous pouvez utiliser pour recharger votre carte prépayée Transcash.",
    faq2: "Est-ce sécurisé d'acheter un ticket Transcash en ligne ?",
    faq2r: "Lorsque vous achetez un ticket Transcash sur RechargStatus.com, la transaction est sécurisée, rapide et sûre.",
    faq3: "Où puis-je acheter une carte Transcash ?",
    faq3r: "Si vous résidez en France, vous pouvez acheter une carte Transcash en ligne ou en magasin (revendeur Transcash ou tabac, par exemple).",
    faq4: "Comment recevoir un email de confirmation ?",
    faq4r: "En soumettant le formulaire ci-dessous avec une adresse valide.",
    footer_galerie: "Galerie",
    footer_faq: "FAQ",
    footer_contact: "Contact",
    footer_copyright: "&copy; 2025 RechargStatus.com Tous droits réservés.",
    hero_title: "Bienvenue sur RechargStatus.com"
  },
  en: {
    hero_title:"Welcome to RechargStatus.com",
    hero_text: "Quick check of your tickets to know if they’ve already been used. Receive a confirmation email right after purchase.",
    hero_link: "Explore our offers",
    faq1: "What is Transcash?",
    faq1r: "A Transcash card is a prepaid card usable anywhere Mastercard is accepted. A Transcash ticket is linked to a code and has a credit value used to reload the card.",
    faq2: "Is it safe to buy a Transcash ticket online?",
    faq2r: "When purchasing a Transcash ticket on RechargStatus.com, the transaction is secure, fast, and safe.",
    faq3: "Where can I buy a Transcash card?",
    faq3r: "In France, you can buy one online or in stores (e.g., tobacco shops).",
    faq4: "How to receive a confirmation email?",
    faq4r: "By submitting the form below with a valid email address.",
    footer_galerie: "Gallery",
    footer_faq: "FAQ",
    footer_contact: "Contact",
    footer_copyright: "© 2025 RechargStatus.com All rights reserved."
  },
  es: {
    hero_title: "Bienvenido a RechargStatus.com",
    hero_text: "Verificación rápida de tus boletos para saber si ya han sido usados. Recibe un correo de confirmación justo después de la compra.",
    hero_link: "Descubre nuestras ofertas",
    faq1: "¿Qué es Transcash?",
    faq1r: "Una tarjeta Transcash es una tarjeta prepago que puedes usar donde se acepte Mastercard.",
    faq2: "¿Es seguro comprar un ticket Transcash en línea?",
    faq2r: "Comprar en RechargStatus.com es seguro, rápido y fiable.",
    faq3: "¿Dónde comprar una tarjeta Transcash?",
    faq3r: "En Francia puedes comprarla online o en tiendas autorizadas.",
    faq4: "¿Cómo recibir un email de confirmación?",
    faq4r: "Enviando el formulario con una dirección válida.",
    footer_galerie: "Galería",
    footer_faq: "FAQ",
    footer_contact: "Contacto",
    footer_copyright: "© 2025 RechargStatus.com Todos los derechos reservados."
  },
  de: {
    hero_title: "Willkommen bei RechargStatus.com",
    hero_text: "Schnelle Überprüfung Ihrer Tickets, ob sie bereits verwendet wurden. Sie erhalten sofort eine Bestätigungs-E-Mail.",
    hero_link: "Unsere Angebote entdecken",
    faq1: "Was ist Transcash?",
    faq1r: "Eine Transcash-Karte ist eine Prepaid-Karte, die überall verwendet werden kann, wo Mastercard akzeptiert wird.",
    faq2: "Ist es sicher, ein Transcash-Ticket online zu kaufen?",
    faq2r: "Beim Kauf auf RechargStatus.com ist die Transaktion sicher, schnell und zuverlässig.",
    faq3: "Wo kann ich eine Transcash-Karte kaufen?",
    faq3r: "In Frankreich online oder im Laden erhältlich.",
    faq4: "Wie erhalte ich eine Bestätigungs-E-Mail?",
    faq4r: "Durch Ausfüllen des Formulars mit einer gültigen Adresse.",
    footer_galerie: "Galerie",
    footer_faq: "FAQ",
    footer_contact: "Kontakt",
    footer_copyright: "© 2025 RechargStatus.com Alle Rechte vorbehalten."
  },
  it: {
    hero_title: "Benvenuto su RechargStatus.com",
    hero_text: "Controllo rapido dei tuoi biglietti per sapere se sono già stati usati. Ricevi una conferma via email subito dopo l'acquisto.",
    hero_link: "Scopri le nostre offerte",
    faq1: "Cos'è Transcash?",
    faq1r: "Una carta prepagata utilizzabile ovunque sia accettata Mastercard.",
    faq2: "È sicuro acquistare un biglietto Transcash online?",
    faq2r: "Su RechargStatus.com la transazione è sicura, veloce e affidabile.",
    faq3: "Dove acquistare una carta Transcash?",
    faq3r: "In Francia, nei negozi o online.",
    faq4: "Come ricevere un'email di conferma?",
    faq4r: "Compilando il modulo qui sotto con un indirizzo valido.",
    footer_galerie: "Galleria",
    footer_faq: "FAQ",
    footer_contact: "Contatto",
    footer_copyright: "© 2025 RechargStatus.com Tutti i diritti riservati."
  },
  pt: {
    hero_title: "Bem-vindo ao RechargStatus.com",
    hero_text: "Verificação rápida dos seus bilhetes para saber se já foram usados. Receba um email de confirmação imediatamente após a compra.",
    hero_link: "Descubra nossas ofertas",
    faq1: "O que é Transcash?",
    faq1r: "Um cartão pré-pago utilizável em qualquer lugar que aceite Mastercard.",
    faq2: "É seguro comprar um bilhete Transcash online?",
    faq2r: "No RechargStatus.com, a transação é segura, rápida e confiável.",
    faq3: "Onde posso comprar um cartão Transcash?",
    faq3r: "Na França, online ou em lojas autorizadas.",
    faq4: "Como receber um email de confirmação?",
    faq4r: "Preenchendo o formulário com um email válido.",
    footer_galerie: "Galeria",
    footer_faq: "FAQ",
    footer_contact: "Contato",
    footer_copyright: "© 2025 RechargStatus.com Todos os direitos reservados."
  }
};


    function toggleLangMenu() {
      const menu = document.querySelector('.lang-options');
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }

    function setLang(lang) {
      localStorage.setItem('selectedLang', lang); // <-- sauvegarde
    
      const elements = document.querySelectorAll('[data-i18n]');
      elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });
    
      const flagMap = {
        fr: 'fr',
        en: 'gb',
        es: 'es',
        de: 'de',
        it: 'it',
        pt: 'pt'
      };
    
      document.querySelector('.selected-lang img').src = `https://flagcdn.com/w20/${flagMap[lang]}.png`;
      document.querySelector('.selected-lang span').textContent = document.querySelector(`li[onclick="setLang('${lang}')"]`).textContent.trim();
    }

    //MAINTENIR LA LANGUE SELECTIONNEE AU CHARGEMENT 
    // Charger automatiquement la langue sauvegardée (ou FR par défaut)
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('selectedLang') || 'fr';
  setLang(savedLang);
});

    


    