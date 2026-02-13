// Particle Effects
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = particle.style.height = Math.random() * 5 + 2 + 'px';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Quiz Logic
let currentQuestion = 1;
const answers = { q1: 'blue', q2: 'park', q3: 'pizza', q4: 'dancing', q5: '5' }; // Customize answers

function answer(question, choice) {
    if (choice === answers[question]) {
        document.getElementById('feedback').innerText = 'Correct! You really do pay attention. 💕';
    } else {
        document.getElementById('feedback').innerText = 'Oops! Someone needs a refresher course! 😘';
    }
    document.getElementById(question).classList.add('hidden');
    currentQuestion++;
    if (currentQuestion <= 5) {
        document.getElementById('q' + currentQuestion).classList.remove('hidden');
    } else {
        document.getElementById('result').classList.remove('hidden');
    }
}

// Proposal Logic
function moveNoButton() {
    const noButton = document.getElementById('no-button');
    noButton.style.position = 'absolute';
    noButton.style.left = Math.random() * 80 + '%';
    noButton.style.top = Math.random() * 80 + '%';
}

function sayYes() {
    document.getElementById('celebration').classList.remove('hidden');
    document.querySelector('.buttons').style.display = 'none';
}

// Initialize
document.addEvent
