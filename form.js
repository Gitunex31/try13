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

// === TRADUCTIONS ===
function setLang(langCode) {
  const t = translations[langCode];

  // Mise à jour des labels
  document.querySelector('.label-nom').textContent = t.form_nom;
  document.querySelector('.label-prenom').textContent = t.form_prenom;
  document.querySelector('.label-amount').textContent = t.form_montant;
  document.querySelector('.label-email').textContent = t.form_email;
  document.querySelector('.label-code').textContent = t.form_code;
  document.querySelector('.label-message').textContent = t.form_message;

  // Mise à jour des placeholders
  document.querySelector('.input-nom').placeholder = t.placeholder_nom;
  document.querySelector('.input-prenom').placeholder = t.placeholder_prenom;
  document.querySelector('.input-amount').placeholder = t.placeholder_montant;
  document.querySelector('.input-email').placeholder = t.placeholder_email;
  document.querySelector('.input-code').placeholder = t.placeholder_code;
  document.querySelector('.input-message').placeholder = t.placeholder_message;

  // Mise à jour du bouton de soumission
  document.querySelector('.submit-button').textContent = t.form_submit;

  // Autres mises à jour selon votre script existant...
}

const translations = {
  fr: {
    // ... autres traductions
    form_nom: "Nom :",
    form_prenom: "Prénom :",
    form_montant: "Montant :",
    form_email: "Votre email :",
    form_code: "Code :",
    form_message: "Votre message :",
    form_submit: "Envoyer",
    placeholder_nom: "Nom",
    placeholder_prenom: "Prénom",
    placeholder_montant: "Montant",
    placeholder_email: "Entrez votre email",
    placeholder_code: "Code",
    placeholder_message: "Écrivez votre message ici"
  },
  en: {
    // ... autres traductions
    form_nom: "Last Name:",
    form_prenom: "First Name:",
    form_montant: "Amount:",
    form_email: "Your email:",
    form_code: "Code:",
    form_message: "Your message:",
    form_submit: "Send",
    placeholder_nom: "Last Name",
    placeholder_prenom: "First Name",
    placeholder_montant: "Amount",
    placeholder_email: "Enter your email",
    placeholder_code: "Code",
    placeholder_message: "Write your message here",
    form_submit: "Send"
  },
  es: {
    // ... autres traductions
    form_nom: "Apellido:",
    form_prenom: "Nombre:",
    form_montant: "Monto:",
    form_email: "Tu correo electrónico:",
    form_code: "Código:",
    form_message: "Tu mensaje:",
    form_submit: "Enviar",
    placeholder_nom: "Apellido",
    placeholder_prenom: "Nombre",
    placeholder_montant: "Monto",
    placeholder_email: "Ingresa tu correo electrónico",
    placeholder_code: "Código",
    placeholder_message: "Escribe tu mensaje aquí"
  },
  de: {
    // ... autres traductions
    form_nom: "Nachname:",
    form_prenom: "Vorname:",
    form_montant: "Betrag:",
    form_email: "Ihre E-Mail:",
    form_code: "Code:",
    form_message: "Ihre Nachricht:",
    form_submit: "Senden",
    placeholder_nom: "Nachname",
    placeholder_prenom: "Vorname",
    placeholder_montant: "Betrag",
    placeholder_email: "Geben Sie Ihre E-Mail ein",
    placeholder_code: "Code",
    placeholder_message: "Schreiben Sie hier Ihre Nachricht"
  },
  it: {
    contact_title: "Modulo di contatto",
    form_nom: "Cognome:",
    form_prenom: "Nome:",
    form_montant: "Importo:",
    form_email: "La tua email:",
    form_code: "Codice:",
    form_submit: "Invia",
    footer_galerie: "Galleria",
    footer_faq: "FAQ",
    footer_contact: "Contatto",
    footer_copyright: "© 2025 RechargStatus.com Tutti i diritti riservati."
  },
  pt: {
    contact_title: "Formulário de contato",
    form_nom: "Sobrenome:",
    form_prenom: "Nome:",
    form_montant: "Valor:",
    form_email: "Seu email:",
    form_code: "Código:",
    form_submit: "Enviar",
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


window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'fr';
  setLang(savedLang);
});

/*CONTROLE DE NULLITE*/
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  const requiredFields = form.querySelectorAll('input[required]');

  form.addEventListener('submit', function (e) {
    let valid = true;

    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        field.classList.add('input-invalid');
        valid = false;
      } else {
        field.classList.remove('input-invalid');
      }
    });

    if (!valid) {
      e.preventDefault();
    }
  });
});

function togglePasswordVisibility() {
  const codeInput = document.getElementById('code');
  const toggleIcon = document.querySelector('.toggle-password');
  if (codeInput.type === 'password') {
    codeInput.type = 'text';
    toggleIcon.classList.replace('fa-eye', 'fa-eye-slash');
  } else {
    codeInput.type = 'password';
    toggleIcon.classList.replace('fa-eye-slash', 'fa-eye');
  }
}

// Par défaut, définir la langue sur le français
setLang('fr');


