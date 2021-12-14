var navmenu = document.getElementById("nav-menu")
    togglemenu = document.getElementById("toggle-menu")
    closeMenu = document.getElementById("close-menu")

togglemenu.addEventListener('click', () => {
    navmenu.classList.toggle('show')
})
closeMenu.addEventListener('click', () => {
    navmenu.classList.remove('show')
})
  AOS.init();
