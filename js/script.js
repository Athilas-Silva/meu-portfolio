// MENU
let show = true; 

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toggle("on", show)
    show = !show;
})

const links = document.querySelectorAll("nav ul li a")

for(const link of links){
    link.addEventListener("click", () => {
        menuSection.classList.remove("on")
    })
}

// ScrollReveal: Mostrando elementos no scroll da pagina
const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 700,
    reset: false,
})

//Ordem de apresentação
scrollReveal.reveal(
    `header img, .container .menu-section,
    .presentation .container, .presentation div,
    .skill h3, .cards .card,
    main h3, .cards .card,
    footer p, footer a
    `, { interval: 100} 
)
