// MENU
const menuSection = document.querySelector(".menu-section")
const menuToggle = document.querySelectorAll(".menu-toggle")

for(const element of menuToggle){
    element.addEventListener("click", () => {
        menuSection.classList.toggle("on")
    })
}

//Removendo o menu ao clicar em um dos links
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
