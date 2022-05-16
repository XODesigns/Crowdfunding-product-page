const backUs = document.querySelector(".back-us")
const modalMain = document.querySelector(".modal")
const pledgeSect = document.querySelectorAll("label")
const visible = document.querySelectorAll(".pledge")

backUs.addEventListener("click", ()=>{
    modalMain.classList.remove("visibility")
})



pledgeSect.forEach((e)=>{
    e.addEventListener("click", ()=>{
for(let i = 0; i<visible;i++){
    visible[i].classList.remove("hide")
}
  
})
        
    })

