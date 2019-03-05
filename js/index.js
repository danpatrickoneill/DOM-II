// Your code goes here

const images = document.querySelectorAll('img');
console.log(images)

images.forEach(img => img.addEventListener('mouseover', function(event) {
  event.target.style.opacity = .5;
}))

images.forEach(img => img.addEventListener('mouseleave', function(event) {
  event.target.style.opacity = 1;
}))