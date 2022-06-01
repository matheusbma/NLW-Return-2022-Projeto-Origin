window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(depositions)
}

function showNavOnScroll() {
  let div = document.querySelector('#navigation')
  if (scrollY > 0) {
    div.classList.add('scroll')
  } else {
    div.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 700) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // Verifica de seção passou da linha
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // Verificar se estar abaixo da linha alvo
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // Limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'bottom',
  distance: '30px',
  duration: 700
}).reveal(
  `#home, 
#home img, 
#home stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content,
#depositions header,
#depositions .cards,
#depositions .companies,
#contact,
#contact header,
#contact .content
`
)
