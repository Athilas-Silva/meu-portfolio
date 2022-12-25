// MENU
const menuSection = document.querySelector(".menu-section");
const menuToggle = document.querySelectorAll(".menu-toggle");

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
});

//Ordem de apresentação
scrollReveal.reveal(
    `header img, .container .menu-section,
    .presentation .container, .presentation div,
    .skill h3, .cards .card,
    main h3, #projects .cards,
    footer p, footer a
    `, { interval: 100} 
);

const textProject = document.querySelector("#projects .cards");

fetch("projects.json").then((res) => {
    res.json().then((dados) => {
        dados.projects.map((project) => {
            textProject.innerHTML += 
            `
                <div class="card">
                    <h2>${project.name}</h2>
                    <div class="image">
                        <img src="${project.img}" alt="Poster da aplicação">
                    </div>

                    <div class="content">
                        <p class="title text--medium">
                            ${project.description}
                        </p>
                        <div class="info">
                            <a class="button" href="${project.link}" target="_blank">Ver projeto</a>
                        </div>
                    </div>
                </div>
            `;
        })
    });
});