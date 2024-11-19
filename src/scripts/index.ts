function triggerBgAnimation() {
    const body = document.body;
    const rows = Math.ceil(window.innerHeight / 100);
    const cols = Math.ceil(window.innerWidth / 100);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.style.top = `${row * 100}px`;
            tile.style.left = `${col * 100}px`;
            tile.style.animationDelay = `${(row + col) * 0.1}s`;
            body.appendChild(tile);
        }
    }

    setTimeout(() => {
        body.classList.remove('fadeIn');
        document.querySelectorAll('.tile').forEach(tile => tile.remove());
    }, (rows + cols) * 100);
}

// Reverse animation function
function triggerReverseBgAnimation(callback: () => void) {
    const body = document.body;
    const rows = Math.ceil(window.innerHeight / 100);
    const cols = Math.ceil(window.innerWidth / 100);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const tile = document.createElement('div');
            tile.classList.add('tile-reverse');
            tile.style.top = `${row * 100}px`;
            tile.style.left = `${col * 100}px`;
            tile.style.animationDelay = `${(row + col) * 0.1}s`;
            body.appendChild(tile);
        }
    }

    setTimeout(() => {
        callback();  // Navigate to the new page after the animation completes
    }, (rows + cols) * 100);
}

// Trigger the animation on page load
document.addEventListener('DOMContentLoaded', () => {
    triggerBgAnimation();
});

// Reverse animation on link click
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();  // Prevent immediate navigation
        const target = event.target as HTMLAnchorElement;
        if (target && target.href) {
            const targetURL = target.href;  // Get the target URL

        triggerReverseBgAnimation(() => {
            window.location.href = targetURL;  // Navigate after the animation
        });
    }
    });
});

document.addEventListener("scroll", (e) => {
    const scroll = window.scrollY;
  
    const el = document.querySelector(".js-hero-image-scroller");
  
    if (el) {
  
      (el as HTMLElement).style.transform = `scale(${scroll / 500 + 1})`;
    }
  })