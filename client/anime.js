// NAV BAR ANIMATION
// Using `querySelectorAll` to select everything under these classes
const navElements = document.querySelectorAll(".nav-anime, .nav-anime-letters")

// We need to use a loop with `querySelectorAll` to loop through all elements under the selected classes
navElements.forEach(animeAdd => {
    // Mouse enter animation
    animeAdd.addEventListener("mouseenter", () => {
        anime.timeline()
            .add({
                targets: animeAdd.querySelectorAll(".line"),
                scaleX: [0, 1],
                opacity: [0.5, 1],
                easing: "easeOutExpo",
                duration: 400,
            })
        })
    // Mouse leave animation
    animeAdd.addEventListener("mouseleave", () => {
        anime.timeline()
            .add({
                targets: animeAdd.querySelectorAll(".line"),
                opacity: 0,
                duration: 400,
                easing: "easeOutExpo",
                delay: 50,
            })
        })
})



// HERO TITLE ANIMATION
// Runs on page load only, no loop
anime.timeline()
.add({
    targets: ".hero-title .letters-left",
    opacity: [0,1],
    translateX: ["0.3em", 0],
    easing: "easeOutExpo",
    duration: 2000,
    offset: "+=300"
}).add({
    targets: ".hero-title .letters-right",
    opacity: [0,1],
    translateX: ["-0.3em", 0],
    easing: "easeOutExpo",
    duration: 2000,
    offset: "-=2000"
})