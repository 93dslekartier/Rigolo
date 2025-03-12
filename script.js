// Liste de défis
const challenges = [
    "Bois une gorgée !",
    "Fais un compliment à la personne à ta droite.",
    "Chante une chanson pendant 10 secondes.",
    "Imite un animal de ton choix.",
    "Raconte une anecdote embarrassante.",
    "Fais 5 pompes immédiatement."
];

// Liste de prénoms aléatoires pour les joueurs
const randomNames = ["Léa", "Max", "Sophie", "Arthur", "Emma", "Lucas"];
let players = [];
let usedChallenges = new Set();

// Ajouter un joueur aléatoire
document.getElementById("addPlayer").addEventListener("click", () => {
    if (players.length >= randomNames.length) {
        alert("Nombre maximal de joueurs atteint !");
        return;
    }
    let name = randomNames[Math.floor(Math.random() * randomNames.length)];
    if (!players.includes(name)) {
        players.push(name);
        updatePlayersList();
    }
});

// Met à jour l'affichage des joueurs
function updatePlayersList() {
    const playersDiv = document.getElementById("players");
    playersDiv.innerHTML = "Joueurs : " + players.join(", ");
}

// Démarrer le jeu
document.getElementById("startGame").addEventListener("click", () => {
    if (players.length === 0) {
        alert("Ajoutez au moins un joueur !");
        return;
    }

    // Sélectionner un défi non utilisé
    let availableChallenges = challenges.filter(c => !usedChallenges.has(c));
    if (availableChallenges.length === 0) {
        usedChallenges.clear(); // Réinitialiser si tous ont été utilisés
        availableChallenges = challenges;
    }
    
    let challenge = availableChallenges[Math.floor(Math.random() * availableChallenges.length)];
    usedChallenges.add(challenge);

    // Sélectionner un joueur aléatoire
    let randomPlayer = players[Math.floor(Math.random() * players.length)];

    document.getElementById("challenge").innerText = `${randomPlayer}, ton défi est : ${challenge}`;
});
