import * as myPages from "./main.js";
async function logJSONData() {
    const response = await fetch("https://fakestoreapi.com/products?limit=5");
    const jsonData = await response.json();
    return jsonData;
  }
  var apidata=await logJSONData();
  console.log(apidata);
myPages.navView('main-nav');

document.getElementById('about-page').addEventListener('click',()=>myPages.aboutView('main-content'));
document.getElementById('home-page').addEventListener('click',()=>myPages.homeView('main-content'));
document.getElementById('beauty-page').addEventListener('click',()=>myPages.beautyView('main-content',apidata));


//   let datainfo=[];
//   datainfo=await logJSONData();
myPages.homeView('main-content');
myPages.footerView('main-foot');