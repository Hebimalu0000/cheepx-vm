// I made these for my new portfolio site. You might be able to 
// use this as a loading animation or something like that. I had this
// demo up here before but I think Codepen ate it. They do look 
// pretty tasty.

const container = document.getElementById('container');

function animation(){
  container.classList.add('loaded');
}

window.addEventListener('load', animation);
