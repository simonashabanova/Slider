let slider = document.querySelector('#slider')
let div = document.querySelector('#kocka')
slider.addEventListener('input',e => {
   div.style.width=e.target.value+'px'
   div.style.height = e.target.value+'px';
})