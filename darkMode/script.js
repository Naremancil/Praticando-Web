// pegar a checkbox e fazer um evento baseado na ativação ou não dela

const checkbtn = document.querySelector("#change-theme")
const checkLight = document.querySelector("#change-name")

function toggleDarkMode(){
    document.body.classList.toggle("dark")
    document.querySelector("header").classList.toggle("dark-header")
    
    checkLight.innerText.includes("Dark Mode") ? checkLight.innerText = "Ligh Mode" : checkLight.innerText = "Dark Mode"
}

function isDarkMode(){
    const DarkMode = localStorage.getItem("dark")

    if(DarkMode){
        toggleDarkMode()
    }
}

checkbtn.addEventListener("change", function (){
    toggleDarkMode();

    localStorage.removeItem("dark")

    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1)
    }
})

isDarkMode()