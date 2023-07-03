// import * as myFun from "./functions.js";
import * as myPages from "./main.js";
import    {addtoCartNum ,selectAll,unselectAll,logJSONData,logJSONDataCat,apiFilter} from "./functions.js";

var apidata=await logJSONData("");
var apidataCat=await logJSONDataCat();
// var nameOfCat=[];
// for (const i of await apidataCat) {
//   nameOfCat="/category/" + i + "?limit=5";
// }

myPages.navView('main-nav');
document.getElementById('about-page').addEventListener('click',()=>myPages.aboutView('main-content'));
document.getElementById('home-page').addEventListener('click',()=>myPages.homeView('main-content'));
let apidata1=await logJSONData("/category/jewelery?limit=5");
document.getElementById('beauty-page').addEventListener('click', () => myPages.categoriesShow('main-content', apidata1, apidataCat,'Beauty'));
let apidata2=await logJSONData("/category/electronics?limit=5");
document.getElementById('personal-care-page').addEventListener('click',()=>myPages.categoriesShow('main-content',apidata2,apidataCat,'Personal Care'));
let apidata3=await logJSONData("/category/men's clothing?limit=5");
document.getElementById('mom-baby-page').addEventListener('click',()=>myPages.categoriesShow('main-content',apidata3,apidataCat));
let apidata4=await logJSONData("/category/women's clothing?limit=5");
document.getElementById('vitamins-page').addEventListener('click',()=>myPages.categoriesShow('main-content',apidata4,apidataCat));
// document.getElementById('beauty-page').addEventListener('click',()=>myPages.categoriesShow('main-content',apidata,apidataCat));


//   let datainfo=[];
//   datainfo=await logJSONData();
myPages.homeView('main-content');
myPages.footerView('main-foot');

