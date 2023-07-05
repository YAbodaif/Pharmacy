import cnavView, {addtoCartNum ,selectAll,unselectAll,logJSONData,logJSONDataCat} from "./main.js";

var apidata=await logJSONData("");
var apidataCat=await logJSONDataCat();

class xxxx  extends cnavView{
    constructor() {
        super();
      } 
};
var cnavViewnew =new xxxx;
document.getElementById('about-page').addEventListener('click',()=>cnavViewnew.aboutView('main-content'));
document.getElementById('home-page').addEventListener('click',()=>cnavViewnew.homeView('main-content'));
let apidata0=apidata.filter((x)=>x.category==apidataCat[0]);
document.getElementById('beauty-page').addEventListener('click', () => cnavViewnew.categoriesShow('main-content', apidata0, apidataCat,'Beauty'));
let apidata1=apidata.filter((x)=>x.category==apidataCat[1]);
document.getElementById('personal-care-page').addEventListener('click',()=>cnavViewnew.categoriesShow('main-content',apidata1,apidataCat,'Personal Care'));
let apidata2=apidata.filter((x)=>x.category==apidataCat[2]);
document.getElementById('mom-baby-page').addEventListener('click',()=>cnavViewnew.categoriesShow('main-content',apidata2,apidataCat));
let apidata3=apidata.filter((x)=>x.category==apidataCat[3]);
document.getElementById('vitamins-page').addEventListener('click',()=>cnavViewnew.categoriesShow('main-content',apidata3,apidataCat));
  
  


// cnavViewnew.homeView('main-content');
// cnavViewnew.footerView('main-foot');

