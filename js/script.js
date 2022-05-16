const backUs = document.querySelector(".back-us")
const modalMain = document.querySelector(".modal")
const pledgeSect = document.querySelectorAll("label")
const visible = document.querySelectorAll("#visible")

backUs.addEventListener("click", ()=>{
    modalMain.classList.remove("visibility")
})


pledgeSect.forEach((e)=>{
    e.addEventListener("click", ()=>{
    
    //    let check = e.checked = true

    //    if(check){
    //     pledge.classList.toggle("hide")
    //    }

  
    

        
    })
})

