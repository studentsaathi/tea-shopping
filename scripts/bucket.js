// On clicking remove button the item should be removed from DOM as well as localstorage.

let data =JSON.parse(localStorage.getItem("coffee"))
data.map(function(el,index){
    let bucket =document.getElementById("bucket")
let div =document.createElement("div")
let image=document.createElement("img")
image.src=el.image
let price=document.createElement("h3")
price.innerText=`Price :- ${el.price}`
let btn=document.createElement("button")
btn.innerText="Remove"
btn.id="remove_coffee"
btn.addEventListener("click",function(){
    removeTea(el.index)

})
div.append(image,price,btn)
bucket.append(div)

})
//console.log(data)
function removeTea(el,index){
    data.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(data))
    alert("Remove your Items")
    window.location.reload();

}


let countnom=JSON.parse(localStorage.getItem("coffee"))
var total=countnom.reduce(function(sum,el){
    return sum+Number(el.price);


},0)
var totalitems=countnom.length;
 let coffee_count=document.getElementById("amount")
 let total_amount=document.createElement("h3")
 total_amount.innerText=`Total Price :- ${total}`
 var iteamss=document.createElement("h3")
 iteamss.innerText=`Totel Items :-${totalitems}`
 coffee_count.append(total_amount,iteamss)


