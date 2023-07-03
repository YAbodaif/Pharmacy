import {selectCategoriesShow}  from "./main.js";

var itemsInCart=[];
var numcart=0;
export async function logJSONData(catName) {
    let urldata="https://fakestoreapi.com/products" + catName ;
    const response = await fetch(urldata);
    const jsonData = await response.json();
    return jsonData;
  }
  var apidata=await logJSONData("");

  export async function logJSONDataCat() {
    const response = await fetch("https://fakestoreapi.com/products/categories");
    const jsonDataCat = await response.json();
    return jsonDataCat;
  }
  var apidataCat=await logJSONDataCat();

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
    let xyz= itemsInCart.filter((x)=>x.id == x3);
    if(xyz.length==0){
       itemsInCart.push (apidata.find((x)=>x.id==x3));
        let  v=Number( document.getElementById('no-in-cart').innerText);
        document.getElementById('no-in-cart').innerText=  ++v ;
    }
 }
 export async function apiFilter(catName,idName){
  if (document.getElementById(idName).checked != false){
  let urldata="https://fakestoreapi.com/products/category/" + catName ;
    const response = await fetch(urldata);
    const jsonData = await response.json();
   return selectCategoriesShow('showAllProductData', jsonData)
  }
   }

