// recupère le menu
let menu = document.getElementById('menu')

// Ajouter un évènement au clic
menu.addEventListener('click', () => {
    menu.classList.toggle('open')
})