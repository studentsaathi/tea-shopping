// Add the coffee to local storage with key "coffee"
const url=`https://masai-mock-api.herokuapp.com/coffee/menu`
async function getData(){
    try{
        let res=await fetch(url)
        let alldata=await res.json()
        showdata(alldata.menu.data)
        console.log(alldata.menu)
       // 

    }catch(error){
       console.log("error",error)
    }

}
getData()
let bucket=JSON.parse(localStorage.getItem("coffee")) || []

async function showdata(data){
    let menu=document.getElementById("menu")
    data.forEach(function(el){
        let div=document.createElement("div")
        let image=document.createElement("img")
        image.src=el.image;
        let h1=document.createElement("h1")
        h1.innerText=`Price :- ${el.price}`
       
        var btn=document.createElement("button")
        btn.innerText="Add to Bucket"
        btn.id="add_to_bucket"
        btn.addEventListener("click",function(){
            addtoBucket(el)
        })
        div.append(image,h1,btn)
        menu.append(div)

    })
}

function addtoBucket(el){
    console.log(el)
    bucket.push(el);
    localStorage.setItem("coffee",JSON.stringify(bucket))
    window.location.reload()
    alert("items added to BUCKET")

}
let countnom=JSON.parse(localStorage.getItem("coffee"))
var total=countnom.reduce(function(sum,el){
    return sum+Number(el.price);


},0)
var totalitems=countnom.length;
 let coffee_count=document.getElementById("coffee_count")
 let totali=document.createElement("h3")
 totali.innerText=`Total Count :-${totalitems}`
 coffee_count.append(totali)