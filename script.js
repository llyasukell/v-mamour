// Fonction pour montrer la section sélectionnée
function showSection(sectionId, event) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (event) {
        event.currentTarget.classList.add('active');
    }
}

// DONNÉES PROJETS
const projectDetails = {
    seg: {
        title: "Segmentation Médicale 3D",
        desc: "Ce projet utilise nnU-Net pour segmenter des images médicales 3D de l'atrium. Objectif : faciliter l'analyse médicale avec l'IA."
    },
    maville: {
        title: "Application MaVille",
        desc: "Application Java MVC pour la gestion de travaux municipaux. Intègre des tests unitaires avec JaCoCo et suit une méthodologie Agile."
    },
    nhl: {
        title: "Analyse NHL",
        desc: "Projet d'analyse de données NHL : nettoyage et visualisation avec Pandas et Matplotlib pour détecter des tendances et insights."
    },
    web: {
        title: "Web Dynamique PHP",
        desc: "Site web interactif en PHP utilisant AJAX pour la gestion de tuiles dynamiques, avec base de données MySQL pour stockage des données."
    }
};

// Fonction pour ouvrir le modal avec les détails
function openModal(projectKey) {
    const modal = document.getElementById('projectModal');
    const title = document.getElementById('modalTitle');
    const desc = document.getElementById('modalDesc');

    if (projectDetails[projectKey]) {
        title.textContent = projectDetails[projectKey].title;
        desc.textContent = projectDetails[projectKey].desc;
    } else {
        title.textContent = "Projet inconnu";
        desc.textContent = "Aucune information disponible pour ce projet.";
    }

    modal.classList.add('active');
}

// Fonction pour fermer le modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
}

// Fermer le modal si on clique à l'extérieur du contenu
document.getElementById('projectModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});
