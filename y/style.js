//https://api.nasa.gov/planetary/apod?api_key==Zzxy8zXpGKgL4hXQb7AvBQdtUBAzp0xo6d9NuRuH
let obj= document.getElementById('submit')
function getDate() {
    return document.getElementById('dateSearch').value
}

let mDown=function() { 
    obj.style.backgroundColor = "#ffffff";
    obj.innerHTML = "Submit";
   
  }
  
  function mUp() {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Thank You";
    setTimeout(mDown, 3000);
  }


async function call() {
    try{ 
        const respsone=await fetch(`https://api.nasa.gov/planetary/apod?api_key=Zzxy8zXpGKgL4hXQb7AvBQdtUBAzp0xo6d9NuRuH&date=`+getDate())
        if (respsone.status === 404){
            throw "404 not found";
        }
    const data=await respsone.json()
    console.log(data);
    p=document.getElementById('description')
    p.innerHTML=data.explanation
    img=document.getElementById('pic')
    img.src=data.url
} catch (error) {
    alert(error);
}
}

