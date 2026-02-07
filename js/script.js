// --- FONCTION POUR ENTRER SUR LE SITE ---
function entrerSurLeSite() {
    const rideau = document.getElementById('rideau-accueil');
    rideau.style.opacity = '0';
    rideau.style.transform = 'scale(1.1)'; 
    rideau.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

    setTimeout(() => {
        rideau.style.display = 'none';
        document.body.style.overflowY = 'auto'; 
    }, 800);
}

// --- FONCTION POUR REVENIR À L'ACCUEIL (via le logo) ---
function retourAccueil() {
    const rideau = document.getElementById('rideau-accueil');
    rideau.style.display = 'flex';
    document.body.style.overflowY = 'hidden';
    
    setTimeout(() => {
        rideau.style.opacity = '1';
        rideau.style.transform = 'scale(1)';
    }, 10);
}

// --- GESTION DE LA FENÊTRE DE CONTACT (MODAL) ---
function toggleModal() {
    const modal = document.getElementById('fenetre-contact');
    
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.style.overflowY = "hidden";
});

window.onclick = function(evenement) {
    const modal = document.getElementById('fenetre-contact');
    if (evenement.target == modal) {
        modal.style.display = "none";
    }
}

// --- GESTION DE L'ENVOI DU FORMULAIRE ---
const formulaire = document.getElementById('formulaire-pop');

if (formulaire) {
    formulaire.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        alert("Message envoyé avec succès ! Merci, Jakie vous recontactera bientôt.");

        toggleModal();

        this.reset();
    });
}