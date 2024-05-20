
//Fonctionnalité 1 - 1bis
let clickCount = 1;
var footer = document.querySelector('footer');
footer.addEventListener('click', function(){
  console.log('clic numéro ' + clickCount);
  clickCount++;
})

//Fonctionnalité 2
var hamburgerButton = document.querySelector('.navbar-toggler');
var navbarHeader = document.getElementById('navbarHeader');
hamburgerButton.addEventListener('click', function() {
  navbarHeader.classList.toggle('collapse');
})

//Fonctionnalité 3
var firstCard = document.querySelector('.col-md-4');
var editButton = firstCard.querySelector('.btn-outline-secondary');

editButton.addEventListener('click', function(){
  firstCard.style.color = 'red';
})

//Fonctionnalité 4
var secondCard = document.querySelectorAll('.col-md-4')[1];
var editButtonSecondCard = secondCard.querySelector('.btn-outline-secondary');

editButtonSecondCard.addEventListener('click', function(){
  if (secondCard.style.color === 'green') {
    secondCard.style.color = '';
  } else {
    secondCard.style.color = 'green';
  }
})