
// the main class
export default class cnavView{
  constructor() { 
    this.itemsInCart=[];
    // this.numcart=0;
    this.abouthtml=`
   <div class="container">
       <img src="./IMAGES/about-us.jpg" class="img-fluid" alt="">
       <div class="row">
           <div class="col-3 text-end">
             <h2>عرض الأسبوع</h2>
             <img src="" alt="عرض الأسبوع" srcset="">
             <p>اطلب استشارة شخصية من أحد صيادلة العزبي في أي فرع من فروعنا مجاناً</p>
             <h3>تابعونا علي الفيسبوك</h3>
           </div>
           <div class="col-8 text-end">
               <h2>نبذة عنا</h2>
               <p>تقود صيدليات العزبي مجال منتجات الرعاية الصحية والشخصية في مصر، ويمثل تاريخها قصة نجاح عظيمة، فقد بدأت المجموعة عام 1975 بصيدلية واحدة، ثم واصلت تطورها حتى أصبحت واحدة من أهم مؤسسات قطاع الرعاية الصحية في مصر. وتمتد خبرة المجموعة إلى أكثر من 40 عاماً، والجدير بالذكر أن صدليات العزبي تسعى دائماً للمزيد من التوسع وترسيخ قيادتها في قطاع الصيدلة على المستويين المحلي والإقليمي.
 
                   نجحت رؤية د. العزبي في النهوض بمهنة الصيدلة في مصر، فمن خلال تقديم نماذج عملية جديدة كلياً وطرح مجموعة غير مسبوقة من الخدمات، مثل توصيل الدواء للمنازل، وتقديم الاستشارة والدعم للمرضى، والإسهام في رفع الوعي الصحي، استطاعت صيدليات العزبي الارتقاء بمستوى الرعاية الصحية في مصر والتقدم يوماً بعد يوم منذ بداية أعمالها في سوق الدواء المصري.
                   
                   وإيماناً من المجموعة بأن النجاح ينطلق دائماً من داخل المؤسسة، أنشأنا مركز لتنمية المهارات على أحدث مستوى لدعم مواهب العاملين بمجموعة صيدليات العزبي. ويعمل بالمركز مجموعة من الخبراء لتدريب العاملين والصيادلة لضمان أفضل مستوى من الأداء والتشغيل ومواكبة المعايير الدولية. ومن خلال تعيين أفضل الكوادر ودعم مهاراتهم باستمرار، يتميز فريق عمل العزبي باعتباره مصدراً موثوقاً للنصح والدعم في مجال الخدمات الصيدلية.
                   
                   واليوم، تقود صيدليات العزبي سوق الدواء المصري من خلال توفير أجود منتجات الرعاية الصحية، وذلك عبر فروع المجوعة المنتشرة في جميع أنحاء الجمهورية والتي يصل عددها إلى 90 فرعاً، فضلاً عن مخازن صيدليات العزبي ومركز رعاية الطفل التابع لها.</p>
           </div>
       </div>
   </div>
 
    `;
    this.homehtml=`
 <div class="container">
     <img src="./IMAGES/banner.jpg" class="img-fluid" alt="">
     <div class="row text-end">
             <h2>الرئيسية</h2>
             <p class="fs-5">      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum eum praesentium mollitia doloremque veritatis officia est excepturi possimus aliquam reprehenderit ipsa natus quisquam totam ut accusantium, voluptate magni nisi dicta laudantium earum! Sapiente sint voluptas, enim rem dignissimos quod nesciunt asperiores totam fugiat dolorum eum quia est corrupti non, debitis maiores exercitationem libero voluptate distinctio numquam dolorem iusto, quis quo animi. Quo id blanditiis repellat natus aliquid accusamus! Ut magni natus delectus sint? Atque numquam quasi enim ex neque magni, dolorum exercitationem nobis nulla sit? Vero mollitia odit maxime esse laboriosam atque quod sunt! Totam perferendis, veritatis, blanditiis quod cum aspernatur, quis soluta magni tenetur dolores nesciunt maxime iste. Mollitia sed, corrupti sit accusantium ab incidunt ducimus minus inventore perspiciatis, tenetur rem magnam voluptates. Blanditiis ducimus eius, excepturi commodi saepe et. Corrupti, alias velit. Nobis nihil porro assumenda aliquam omnis, veniam est iure ipsa dolore ab tempora architecto adipisci ea animi harum quam in corporis fuga minus necessitatibus natus cum autem corrupti. Pariatur expedita architecto fugit! Laboriosam adipisci culpa neque animi reiciendis esse non iusto in ab, laudantium quisquam incidunt minima hic laborum velit doloremque. Et, ea soluta vero perferendis eligendi nam eius cupiditate deleniti. Officiis veniam debitis exercitationem. 
             </p>
     </div>
 </div>
    `;
   }

aboutView(navid){
 document.getElementById(navid).innerHTML=this.abouthtml;
}
homeView(navid){
 document.getElementById(navid).innerHTML=this.homehtml;
}
categoriesShow(navid,apiData,apiDataCat,pageTitle){
 if (apiData.length>0){
 let {id,title,price,image,category}=apiData;
 let categoriesShowhtml=`
 <div class="container-fluid  p-2 text-center text-bg-secondary my-0   text-danger-emphasis">
 <h1>${pageTitle}</h1>
 </div>
 <div class="container-fluid row flex-nowrap h-100 mt-1">
     <div class="col-4  h-100 shadow">
             <div class="container p-1   ">
                     <div class="Brandes-Filter">
                     <div class="text-primary py-3 my-1"> <h4> Filter Proudects By Brands </h4></div>
                     <div class="d-flex justify-content-between">
                     <h5 class="d-inline-block">Select Brandes</h5>
                     <div class="fs-5 fw-bolder text-black px-3 text-end">
                     <i class="bi bi-check-all" id="all-brands" onclick="selectAll('brand-check')"></i>
                     <i class="bi bi-x-square" id="none-brands"></i>
                     </div>
                     </div> 
                     <ul class="list-group">
                     `
 if (apiDataCat.length>0){
   let i2=1;
    for (const i of apiDataCat) {
       categoriesShowhtml +=`
                       <li class="list-group-item">
                         <input class="form-check-input me-1 brand-check" type="checkbox" value="" id="chck${i2}" >
                         <label class="form-check-label stretched-link"  for="chck${i2}">${i}</label>
                       </li>
                       `
        i2++ ;
       }}
       categoriesShowhtml +=`
                     </ul>
                     </div></div></div>

   <div class="col-8 shadow  ">  
       <div class="text-center shadow  fs-4 " >
       <span>Your Cart </span><i class="bi bi-cart4 fs-2 text-primary position-relative d-inline-block" id="the-in-cart"> </i>
       <span class="position-absolute top-10 start-10 rounded bg-transparent text-danger fs-5 fw-bolder" id="no-in-cart"> 0</span>  
       </div>
       <div class="products row" id="showAllProductData">

       `
       for (const i of apiData) {
         categoriesShowhtml +=`
   
             <div class="col-sm-6 col-md-4 col-lg-3  border-1 mt-2 shadow ">
               <div class="position-relative w-100 h-100 text-center border-dark-subtle border align-items-center ">

               <div class="h-50 ">
                   <img  width="100px" height="150px" src=${i.thumbnail} class="py-1">
               </div>
                <span class="position-absolute top-0 end-0  p-1 rounded-circle   text-center fw-bolder bg-warning bg-opacity-75">${i.price} LE</span>  

                <div class="h-25 py-2">
                <p class="fw-boder ">${i.title}</p> 
                </div>

                <div class="h-25 py-2 align-bootom ">
                   <button class="btn btn-primary mt-3 add-cart-btns"  id="addcard${i.id}">Add to cart</button>
                </div>
            
               </div>
               
           </div> 
 `;

}
categoriesShowhtml +=`</div> </div></div> </div>`
document.getElementById(navid).innerHTML=categoriesShowhtml;
document.getElementById('all-brands').addEventListener('click',()=>selectAll('brand-check'));
document.getElementById('none-brands').addEventListener('click',()=>unselectAll('brand-check'));
let btcadd =document.getElementsByClassName('add-cart-btns');
let num1=0
for (const i of apiData) {
 btcadd[num1].addEventListener('click',()=>addtoCartNum(i.id));
 num1++
 }
 let catClick =document.getElementsByClassName('brand-check');
 let num2=1
 for (const i of apidataCat) {
  let idOfElement ="chck"+num2;
  catClick[num2-1].addEventListener('click',()=>this.apiFilter(i,idOfElement));
  num2++
  }

}
}
selectCategoriesShow(navid,apiData){

 if (apiData.length>0){
 let {id,title,price,thumbnail,category}=apiData;
 let categoriesShowhtml="";
       for (const i of apiData) {
         categoriesShowhtml +=`
   <div class="col-sm-6 col-md-4 col-lg-3  border-1 mt-2 shadow ">
     <div class="position-relative w-100 h-100 text-center border-dark-subtle border align-items-center ">
       <div class="h-50 ">
         <img  width="100px" height="150px" src=${i.thumbnail} class="py-1">
       </div>
         <span class="position-absolute top-0 end-0  p-1 rounded-circle   text-center fw-bolder bg-warning bg-opacity-75">${i.price} LE</span>  
       <div class="h-25 py-2">
          <p class="fw-boder ">${i.title}</p> 
       </div>
       <div class="h-25 py-2 align-bootom ">
         <button class="btn btn-primary mt-3 add-cart-btns"  id="addcard${i.id}">Add to cart</button>
       </div>
     </div>
   </div> 
 `;

}
document.getElementById(navid).innerHTML=categoriesShowhtml;
let btcadd =document.getElementsByClassName('add-cart-btns');
let num1=0
for (const i of apiData) {
 btcadd[num1].addEventListener('click',()=>addtoCartNum(i.id));
 num1++
 }
}
}

apiFilter(catName,idName){
 if (document.getElementById(idName).checked != false){
let apidatac=apidata.filter((x)=>x.category==catName);
//  console.log("dc" , apidatac , " -data " , apidata);
 return  this.selectCategoriesShow('showAllProductData', apidatac)
 }
  }
}
// call the main class
class xxxx  extends cnavView{
  constructor() {
      super();
    } 
};
var cnavViewnew =new xxxx;

// the main fuctions

export async function logJSONData(catName) {
    let urldata="https://dummyjson.com/products" + catName ;
    const response = await fetch(urldata);
    const jsonData = await response.json();
    return jsonData.products ;
}
  var apidata=await logJSONData("");
  console.log(apidata);
export async function logJSONDataCat() {
    const response = await fetch("https://dummyjson.com/products/categories");
    const jsonDataCat = await response.json();
    return jsonDataCat;
}
  var apidataCat=await logJSONDataCat();
  console.log(apidataCat);
export function selectAll(x){
    let m=document.getElementsByClassName(x);
    for (const i of m){
    i.checked =true;
    }
}
export function unselectAll(x){
    let m=document.getElementsByClassName(x);
    for (const i of m){
    i.checked =false;
}
}
export function addtoCartNum(x3){
    let xyz= cnavViewnew.itemsInCart.filter((x)=>x.id == x3);
    if(xyz.length==0){
      apidata.find((x)=>x.id==x3).qu=1
      cnavViewnew.itemsInCart.push (apidata.find((x)=>x.id==x3));
       console.log(cnavViewnew.itemsInCart);
        let  v=Number( document.getElementById('no-in-cart').innerText);
        document.getElementById('no-in-cart').innerText=  ++v ;
    }else{
      apidata.find((x)=>x.id==x3).qu=Number( apidata.find((x)=>x.id==x3).qu)+1
      cnavViewnew.itemsInCart.push (apidata.find((x)=>x.id==x3));
      console.log(cnavViewnew.itemsInCart);
       let  v=Number( document.getElementById('no-in-cart').innerText);
       document.getElementById('no-in-cart').innerText=  ++v ;
    }
}




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


