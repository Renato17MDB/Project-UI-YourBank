/*BOTÃO MENU*/

const btnMenu = document.querySelector('.btn-menu');       
const menuList = document.querySelector('.menu-list');

btnMenu.addEventListener('click', () => {
    menuList.classList.toggle('show');
    btnMenu.classList.toggle('active');
});



/*LOAD FAQ BTN*/
const faqBtn = document.querySelector('.btn-load-faq');
const containerFaq = document.querySelector('.items-container');
const text = faqBtn.querySelector('.text-btn');

faqBtn.addEventListener('click', () => {
    const isOpen = containerFaq.classList.toggle('is-open');
    faqBtn.classList.toggle('is-open');

    faqBtn.setAttribute('aria-expanded', isOpen);

    text.textContent = isOpen ? "Collapse FAQ's" : "Load All FAQ's";
});

//MENSAGEM DE MANUTENÇÃO
// document.querySelectorAll('a').forEach(link => {
//     link.addEventListener('click', function(event){
//         if(link.id === 'home-link') return; // ignora o Home
//         event.preventDefault();
//         alert('Esta página está em manutenção');
//     });
// });