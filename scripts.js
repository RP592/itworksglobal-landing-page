function closeMobileMenu() {
  var elem = document.getElementById('mobile-menu')
  elem.classList.add('hide')
}

function openMobileMenu() {
  var elem = document.getElementById('mobile-menu')
  elem.classList.remove('hide')
}