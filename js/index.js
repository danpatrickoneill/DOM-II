// Your code goes here

const imgBus = document.querySelector('.intro img');
imgBus.addEventListener('dragenter', function(event) {
  TweenMax.to(event.target, 1, {y:-50})
})
imgBus.addEventListener('dragleave', function(event) {
  TweenMax.to(event.target, 1.5, {y:0, ease:Bounce.easeOut});;
})

// Nav collection and events
const navLinks = document.querySelectorAll('nav a')
console.log(navLinks)
let defaultSize = navLinks[0].style.fontSize
navLinks.forEach(a => a.addEventListener('focus', function(event) {
  event.target.style.fontSize = '2rem'
}))
navLinks.forEach(a => a.addEventListener('blur', function(event) {
  event.target.style.fontSize = defaultSize
}))

// Header collection and events
const headers = document.querySelectorAll('h2')
console.log(headers)
headers.forEach(h =>  {
  h.draggable = true;
  h.addEventListener('drag', function(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  })
  h.addEventListener('dragend', function(event) {
    event.target.style.display = 'none'
  })
})

// Image collection and events
const images = document.querySelectorAll('img');
console.log(images)

images.forEach(img => img.addEventListener('mouseover', function(event) {
  event.target.style.opacity = .5;
}))

images.forEach(img => img.addEventListener('mouseleave', function(event) {
  event.target.style.opacity = 1;
}))

// Bottom content collection and events

const destinations = document.querySelectorAll('.content-pick')
console.log(destinations)
destinations.forEach(div => div.addEventListener('wheel', function(event) {
  event.target.style.justifyContent = 'flex-end'
}))

// Footer collection and events
const footerPara = document.querySelector('footer p');
console.log(footerPara)
footerPara.addEventListener('dblclick', function(event) {
  event.target.textContent = "Copyright Fun Bus 2019"
})