// import * as myFun from "./functions.js";
import * as myPages from "./main.js";
import    {addtoCartNum ,selectAll,unselectAll,logJSONData,logJSONDataCat} from "./functions.js";

var apidata=await logJSONData();
var apidataCat=await logJSONDataCat();

  myPages.navView('main-nav');

document.getElementById('about-page').addEventListener('click',()=>myPages.aboutView('main-content'));
document.getElementById('home-page').addEventListener('click',()=>myPages.homeView('main-content'));
document.getElementById('beauty-page').addEventListener('click',()=>myPages.beautyView('main-content',apidata,apidataCat));


//   let datainfo=[];
//   datainfo=await logJSONData();
myPages.homeView('main-content');
myPages.footerView('main-foot');

