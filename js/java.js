// ==========================================
// INTRO PAGE: ENVELOPE LOGIC
// ==========================================
function openEnvelope() {
    const flap = document.getElementById('flap');
    const card = document.getElementById('card');
    const seal = document.getElementById('seal');
    const fadeOverlay = document.getElementById('fade-overlay');

    if (!flap || !card || !fadeOverlay) return;

    if(seal) seal.style.opacity = '0';

    flap.style.transform = 'rotateX(180deg)';
    flap.style.zIndex = '1';

    setTimeout(() => {
        card.style.transform = 'translateY(-120px)';
        card.style.zIndex = '5';
        
        setTimeout(() => {
            fadeOverlay.classList.add('active');
            setTimeout(() => {
                window.location.href = 'celebrate.html';
            }, 1000);
        }, 1200);
    }, 600);
}


// ==========================================
// CELEBRATE.HTML LOGIC
// ==========================================

// --- Theme Toggle ---
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const icon = document.getElementById('themeIcon');
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// --- Audio Controls ---
let isPlaying = false;
function toggleAudio() {
    const audio = document.getElementById("bgMusic");
    const icon = document.getElementById("audioIcon");
    if (!audio) return;

    if (isPlaying) {
        audio.pause();
        icon.classList.remove("fa-volume-high");
        icon.classList.add("fa-volume-xmark");
    } else {
        audio.play().catch(e => console.log("Audio play failed: ", e));
        icon.classList.remove("fa-volume-xmark");
        icon.classList.add("fa-volume-high");
    }
    isPlaying = !isPlaying;
}

// --- Minimal Candle Logic ---
let isCandleBlown = false;
function blowMinimalCandle() {
    if (isCandleBlown) return;
    isCandleBlown = true;
    
    const flame = document.getElementById('candleFlame');
    const wishText = document.getElementById('wishGranted');
    
    if (flame) flame.classList.add('out');
    if (wishText) wishText.classList.add('show');
    
    // Auto trigger effects
    setTimeout(() => {
        launchConfetti();
        magicSparkles();
    }, 500);
}

// --- Premium Title Sparkles ---
function createTitleSparkles() {
    const container = document.getElementById('titleSparkles');
    if (!container) return;

    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'title-sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(sparkle);
    }
}

// Initialize title sparkles on page load
document.addEventListener('DOMContentLoaded', createTitleSparkles);

// --- Soft Effects ---
function launchConfetti() {
    if (typeof confetti === "function") {
        confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.6 },
            colors: ['#ffd6d6', '#fde8b9', '#e6e6fa', '#d4f1f9', '#cc8e99']
        });
    }
}

function launchBalloons() {
    const container = document.getElementById("balloon-container");
    if(!container) return;

    const colors = ["#ffd6d6", "#fde8b9", "#e6e6fa", "#d4f1f9", "#e5989b"];
    
    for (let i = 0; i < 15; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * 90 + "vw";
        balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
        const scale = 0.8 + Math.random() * 0.4;
        balloon.style.transform = `scale(${scale})`;
        balloon.style.animationDuration = (6 + Math.random() * 4) + "s";
        
        container.appendChild(balloon);
        
        setTimeout(() => {
            if(balloon.parentNode) balloon.remove();
        }, 11000); 
    }
}

function magicSparkles() {
    const container = document.getElementById("sparkle-container");
    if(!container) return;

    for(let i=0; i<30; i++) {
        let sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");
        sparkle.style.left = Math.random() * 100 + "vw";
        sparkle.style.top = Math.random() * 100 + "vh";
        sparkle.style.animationDuration = (1 + Math.random() * 1.5) + "s";
        
        container.appendChild(sparkle);
        
        setTimeout(() => {
            if(sparkle.parentNode) sparkle.remove();
        }, 2500);
    }
}