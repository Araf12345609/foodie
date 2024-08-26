const menu = document.querySelector('.navbar')

document.getElementById('menu-icon').onclick = () =>{
    menu.classList.toggle('active');
    
 
}
window.onscroll = () =>{
    menu.classList.remove('active')
} 