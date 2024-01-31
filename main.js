function outPageAnimation(){
  const outPage = document.querySelectorAll('.custom-Header');
  for(let i = 0; i < outPage.length; i++){
    outPage[i].classList.add('animate__animated', 'animate__fadeOutDown');
  }
}

function homePage(){
  outPageAnimation()
  setTimeout(() => {
    // Change the URL to the desired destination
    window.location.href = 'index.html';
}, 2000);
}

function howPage(){
  outPageAnimation()
  
  setTimeout(() => {
    // Change the URL to the desired destination
    window.location.href = 'howItWork.html';
}, 1000);
}
function integPage(){
  outPageAnimation()
  
  setTimeout(() => {
    // Change the URL to the desired destination
    window.location.href = 'integration.html';
}, 1000);
}