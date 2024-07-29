const joueur = document.getElementById("RJ");
const PC = document.getElementById("RO");
const pierre = document.getElementById("pierre");
const paper = document.getElementById("feuille");
const cizo = document.getElementById("ciseaux");
const bouton = document.getElementById("bouton");
const RE = document.getElementById("resultat");
const AF = document.getElementById("affiche");
const UF = document.getElementById("afficher");
const continuer = document.getElementById("bouton");
const CPC = document.getElementById("CO");
const CJ = document.getElementById("CJ");
const FN = document.getElementById("fin");

continuer.style.display = 'none';
let ScoreJ = 0;
let ScoreP = 0;

// Fonction pour obtenir un choix aléatoire pour l'ordinateur
function obtenirChoixOrdinateur() {
    const choix = ['pierre', 'papier', 'ciseaux'];
    const indexAleatoire = Math.floor(Math.random() * 3);
    return choix[indexAleatoire];
}

// Fonction pour déterminer le gagnant
function determinerGagnant(choixJoueur, choixOrdinateur) {
    if (choixJoueur === choixOrdinateur) {
        return 'Égalité !';
    }
    if (
        (choixJoueur === 'pierre' && choixOrdinateur === 'ciseaux') ||
        (choixJoueur === 'papier' && choixOrdinateur === 'pierre') ||
        (choixJoueur === 'ciseaux' && choixOrdinateur === 'papier')
    ) {
        ScoreJ += 1;
        return 'Vous avez gagné !';
    }
    ScoreP += 1;
    return 'Vous avez perdu !';
}

// Fonction pour mettre à jour l'affichage du résultat
function mettreAJourResultat(resultat) {
    const r = document.createElement("p");
    r.innerHTML = resultat;
    r.className = 'rt';
    if (resultat === 'Vous avez gagné !') {
        r.style.color = 'green';
    } else if (resultat === 'Vous avez perdu !') {
        r.style.color = 'red';
    } else {
        r.style.color = 'white';
    }

    UF.appendChild(r);
}

// Gestionnaires d'événements pour les boutons
pierre.addEventListener('click', function() {
    jouerJeu('pierre');
});
paper.addEventListener('click', function() {
    jouerJeu('papier');
});
cizo.addEventListener('click', function() {
    jouerJeu('ciseaux');
});
continuer.addEventListener('click', recommencerJeu);

// Fonction principale pour jouer au jeu
function jouerJeu(choixJoueur) {
    pierre.disabled = true;
    paper.disabled = true;
    cizo.disabled = true;
    const choixOrdinateur = obtenirChoixOrdinateur();
    const resultat = determinerGagnant(choixJoueur, choixOrdinateur);
    joueur.textContent = ScoreJ;
    PC.textContent = ScoreP;
    mettreAJourResultat(resultat);
    continuer.style.display = 'inline-block';
    finalJ(choixJoueur);
    finalO(choixOrdinateur);
}

function finalJ(choixF) {
    let src;
    if (choixF === 'pierre') {
        src = 'pierre.png';
    } else if (choixF === 'papier') {
        src = 'papier.png';
    } else {
        src = 'ciseau.png';
    }
    const image = document.createElement('img');
    image.src = src;
    image.className = 'IFin';
    CJ.appendChild(image);
}

function finalO(choixF) {
    let src;
    if (choixF === 'pierre') {
        src = 'pierre.png';
    } else if (choixF === 'papier') {
        src = 'papier.png';
    } else {
        src = 'ciseau.png';
    }
    const image = document.createElement('img');
    image.src = src;
    image.className = 'IFin';
    CPC.appendChild(image);
}

function recommencerJeu() {
    CPC.innerHTML = '';
    CJ.innerHTML = '';
    UF.innerHTML = '';
    continuer.style.display = 'none';
    pierre.disabled = false;
    paper.disabled = false;
    cizo.disabled = false;
}
alert("Veuillez activer le mode paysage si vous êtes sur telephone Merci!")