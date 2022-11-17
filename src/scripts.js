function closeMobileMenu() {
  var elem = document.getElementById('mobile-nav')
  elem.classList.add('hide')
}

function openMobileMenu() {
  var elem = document.getElementById('mobile-nav')
  elem.classList.remove('hide')
}