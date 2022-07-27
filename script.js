const hamburgerBar = document.querySelector('.hamburguer-bar');

const hamburgerX = document.querySelector('.hamburguer-x');

const menu = document.querySelector('.cabecalho-links');

hamburgerBar.addEventListener('click', () => {
  menu.classList.toggle('active');
    hamburgerBar.classList.toggle('active');
    hamburgerX.classList.toggle('active');


        hamburgerX.addEventListener('click', () => {
       menu.classList.remove('active');
         hamburgerBar.classList.remove('active');
            hamburgerX.classList.remove('active');

        });
    
});


function typeWriter (elemento) {
    const textArrayNome = elemento.innerHTML.split('');
    elemento.innerHTML = '';
textArrayNome.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i);
 })
}

const name = document.querySelector('.name');
typeWriter(name)

