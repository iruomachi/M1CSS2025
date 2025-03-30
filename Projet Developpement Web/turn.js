document.querySelectorAll(".ripple-btn").forEach(button => {
    button.addEventListener("click", function(event) {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");

        // Récupère la position du clic
        const rect = this.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        this.appendChild(ripple);

        // Supprime l'effet après l'animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});