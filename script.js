
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

//Fonctionnalité 5

var navbar = document.querySelector('.navbar');
navbar.addEventListener('dblclick', function() {
  var bootstrapLink = document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]');
  if (bootstrapLink) {
    bootstrapLink.parentNode.removeChild(bootstrapLink);
  } else {
    var head = document.querySelector('head');
    var newBootstrapLink = document.createElement('link');
    newBootstrapLink.rel = 'stylesheet';
    newBootstrapLink.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
    head.appendChild(newBootstrapLink);
    }
});

// Fonctionnalité 6

document.addEventListener('DOMContentLoaded', (event) => {
  var cards = document.querySelectorAll('.col-md-4');

  for (let i = 0; i < cards.length; i++) {
      let card = cards[i];
      let viewButton = card.querySelector('.btn-success');
      let cardImage = card.querySelector('.card-img-top');
      let cardText = card.querySelector('.card-text');

      let isCardReduced = false;
      let hoverTimer;

      viewButton.addEventListener('mouseover', function() {
          if (!isCardReduced && !hoverTimer) {
              hoverTimer = setTimeout(function() {
                  cardImage.style.width = '20%';
                  cardText.style.display = 'none';

                  isCardReduced = true;
              }, 200); // Délai de 200 millisecondes
          }
      });

      viewButton.addEventListener('mouseout', function() {
          if (isCardReduced && hoverTimer) {
              clearTimeout(hoverTimer);
              hoverTimer = null;

              cardImage.style.width = '';
              cardText.style.display = '';

              isCardReduced = false;
          }
      });
  }
});


//Fonctionnalité 7 et 8
const nextButton = document.querySelector('.btn.btn-secondary');
  
nextButton.addEventListener('click', () => {
  const cardContainer = document.querySelector('.album .container .row');
  const cards = document.querySelectorAll('.album .container .row .col-md-4');
  const lastCard = cards[cards.length - 1];
  cardContainer.insertBefore(lastCard, cards[0]);
});

const prevButton = document.querySelector('.btn.btn-primary');

prevButton.addEventListener('click', (event) => {
  event.preventDefault();
  const cardContainer = document.querySelector('.album .container .row');
  const cards = document.querySelectorAll('.album .container .row .col-md-4');
  const firstCard = cards[0];
  cardContainer.insertBefore(firstCard, null);
});