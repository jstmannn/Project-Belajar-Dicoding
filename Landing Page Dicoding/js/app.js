document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-list a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            alert(`You clicked on ${this.textContent}`);
        });
    });
});