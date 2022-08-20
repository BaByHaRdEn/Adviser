let advice=document.getElementById("advice");
let adviceID= document.getElementById("advice-id")
let dice= document.getElementById("dice")


const getApi= fetch("	https://api.adviceslip.com/advice")
.then(data=>{ return data.json();
})
.then(post=>{
   let data=()=>{advice.innerHTML=post.slip.advice;
    adviceID.innerHTML= post.slip.id}
    data();
})
.catch(error=>{
  console.error(error)
})

dice.addEventListener("click", ()=>{
  location.reload()
})
