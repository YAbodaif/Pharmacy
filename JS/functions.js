var itemsInCart=[];
var numcart=0;
export async function logJSONData() {
    const response = await fetch("https://fakestoreapi.com/products?limit=5");
    const jsonData = await response.json();
    return jsonData;
  }
  var apidata=await logJSONData();
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
    if(  itemsInCart.filter((x)=>x.id == x3)){
    itemsInCart.push (apidata.find((x)=>x.id==x3));
    let  v=Number( document.getElementById('no-in-cart').innerText);
    document.getElementById('no-in-cart').innerText=  ++v ;
   
     console.log( apidata ,itemsInCart )
    }
   
 }

