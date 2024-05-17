import './style.css';
import homeTab from './home.js';
import menuTab from './menu.js';
import aboutTab from './about.js';

const content = document.getElementById('content');

document.getElementById('home').addEventListener('click', ()=>{
    clearContent();
    content.appendChild(homeTab());
});

document.getElementById('menu').addEventListener('click', ()=> {
    clearContent();
    content.appendChild(menuTab());
});

document.getElementById('about').addEventListener('click',()=>{
    clearContent();
    content.appendChild(aboutTab());
})

function clearContent(){
    content.innerHTML = '';
}

content.appendChild(homeTab());