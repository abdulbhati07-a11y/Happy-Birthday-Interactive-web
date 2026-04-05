function launchConfetti() 
{
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });
}

function dance() 
{
    const bear = document.getElementById("bear");
    bear.classList.toggle("dance");
}

function launchBalloons() 
{
    const container = document.getElementById("balloon-container");

    for (let i = 0; i < 15; i++) 
        {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");

        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.background = randomColor();
        balloon.style.animationDuration = (4 + Math.random() * 4) + "s";

        container.appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, 6000);
    }
}

function randomColor() 
{
    const colors = ["#ff4e50", "#fc913a", "#f9d423", "#e1f5c4", "#00c9ff"];
    return colors[Math.floor(Math.random() * colors.length)];
}