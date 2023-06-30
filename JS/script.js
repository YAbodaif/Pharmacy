import * as myPages from "./main.js";
myPages.navView('main-nav');

document.getElementById('about-page').addEventListener('click',()=>myPages.aboutView('main-content'));
document.getElementById('home-page').addEventListener('click',()=>myPages.homeView('main-content'));

myPages.homeView('main-content');
myPages.footerView('main-foot');