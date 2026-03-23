
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


const projectDetails = {
    seg: {
        title: "Segmentation Médicale 3D",
        desc: "Pipeline nnU-Net pour la segmentation 3D du cœur (MRI, Medical Decathlon). Inclut le patch training, la data augmentation et la cross-validation avec un objectif de Dice > 0.85."
    },
    maville: {
        title: "Application MaVille",
        desc: "Application Java MVC pour la gestion de travaux municipaux assurant une haute maintenabilité. Intègre des tests unitaires avec JUnit/JaCoCo pour renforcer la stabilité logicielle."
    },
    nhl: {
        title: "Analyse & Prédiction NHL",
        desc: "Analyse de tirs NHL avec normalisation spatiale et pipeline Python modulaire. Modélisation prédictive par cross-validation atteignant 82% de précision et 0.79 de F1-score."
    },
    web: {
        title: "Web Dynamique PHP",
        desc: "Application CRUD (LAMP) avec authentification utilisateur et base MySQL. Utilise des requêtes asynchrones (AJAX/Fetch) et des requêtes préparées contre les injections SQL."
    },
    chauvalier: {
        title: "Chauvalier | Game Development",
        desc: "Développement d'un jeu vidéo intitulé 'Chauvalier', mettant en scène un chevalier chauve en quête de son honneur perdu. Projet réalisé en C++, C#, Unreal Engine et Unity. Implémentation de systèmes temps réel : collisions, gestion des entrées (input), animations et logique de gameplay."
    },
    wilddex: {
        title: "WildDex | IA Mobile",
        desc: "Projet collaboratif d'identification d'espèces via Computer Vision (TFLite) en temps réel. Architecture en microservices scalables intégrant une logique anti-fraude."
    },
    mern: {
        title: "MERN Stack Application",
        desc: "Application Full-Stack avec API REST sécurisée (Node.js, Express, MongoDB). Inclut l'authentification par rôles, le hachage des mots de passe et la validation d'API côté frontend."
    }
};

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


function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
}

document.getElementById('projectModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});
