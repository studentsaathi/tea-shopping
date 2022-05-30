let countnom=JSON.parse(localStorage.getItem("coffee"))
var total=countnom.reduce(function(sum,el){
    return sum+Number(el.price);


},0)
var totalitems=countnom.length;
 let coffee_count=document.getElementById("bucket")
 let total_amount=document.createElement("h3")
 total_amount.innerText=`Total Price :- ${total}`
 var iteamss=document.createElement("h3")
 iteamss.innerText=`Totel Items :-${totalitems}`
 coffee_count.append(total_amount,iteamss)


 function on(){
    setInterval(function(){
        alert("Your order is accepted")
        
    },0)
     //alert(" ")
     setInterval(function() {
         alert("Your order is being Prepared ")
     }, 3000);
     setTimeout(function(){
         alert("Your order is being packed")
     },8000)
     setInterval(function(){
         alert("Your order is out for delivery")
         
     },10000)
     setInterval(function(){
        alert("Order delivered")
        
    },1000)

 }