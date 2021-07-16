// Modo Escuro
// Pegando os elementos no html
const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

// Pegando os estilos no CSS
const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style)

const initialColors = {
    backgroundColor: getStyle(html, "--background-color"),
    headerColor: getStyle(html, "--header-color"),
    titleColor: getStyle(html, "--title-color"),
    textColor: getStyle(html, "--text-color"),
    textAlt: getStyle(html, "--text-alt"),
    buttonColor: getStyle(html, "--button-color"),
    cardColor: getStyle(html, "--card-color"),
    textCard: getStyle(html, "--text-card"),
    footerColor: getStyle(html, "--footer-color")
}

const darkMode = {
    backgroundColor: "#333333",
    headerColor: "#14004d",
    titleColor: "#ffffff",
    textColor: "#ffffff",
    textAlt: "#DCDCDC",
    buttonColor: "#14004d",
    cardColor: "#000",
    textCard: "#f8f8ff",
    footerColor: "#14004d"
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key])
    )
}

//Verificando Mudanças no botão Checkbox
checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})

// Salvando o modo escuro no localStorage
const isExistLocalStorage = (key) => localStorage.getItem(key) != null

const createOrEditLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value))

const getValueLocalStorage = (key) => JSON.parse(localStorage.getItem(key))

checkbox.addEventListener("change", ({target}) => {
    if(target.checked){
        changeColors(darkMode)
        createOrEditLocalStorage("modo", "darkMode")
    }
    else{
        changeColors(initialColors)
        createOrEditLocalStorage("modo", "initialColors")
    }
})

if(!isExistLocalStorage("modo")) createOrEditLocalStorage("modo", "initialColors")

if(getValueLocalStorage("modo") === "initialColors"){
    checkbox.removeAttribute("checked")
    changeColors(initialColors)
}
else{
    checkbox.setAttribute("checked", "")
    changeColors(darkMode)
}