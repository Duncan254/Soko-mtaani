

function backToTop(){

 const top = document.querySelector(".back-to-top" );
 top.addEventListener('click', backToTop);
  window.scrollTo(0,0);
}