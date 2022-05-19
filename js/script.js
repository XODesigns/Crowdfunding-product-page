const backUs = document.querySelector(".back-us")
const modalMain = document.querySelector(".modal")
const label = document.querySelectorAll(".label")
const pledge = document.querySelectorAll("#visible")
const radio = document.querySelectorAll("input[type='radio']")
const proceed = document.querySelectorAll(".continue")
const thanks = document.querySelector(".thanks")

backUs.addEventListener("click", ()=>{
    modalMain.classList.remove("visibility")
    radio.forEach((e)=>{
        e.checked=false
    })
    
})



/** Modal checkbox events -  to togglen visibility for the pledge section */
 
    label.forEach((e)=>{
    e.addEventListener("click", ()=>{
        if(e.classList.contains("one")){
            pledge[0].classList.toggle('hide')
            radio[0].checked=true
            pledge[1].classList.add('hide')
            pledge[2].classList.add('hide')
        } else if(e.classList.contains("two")){
            pledge[1].classList.toggle('hide')
            radio[1].checked=true
            pledge[0].classList.add('hide')
            pledge[2].classList.add('hide')

        } else if(e.classList.contains("three")){
            pledge[2].classList.toggle('hide')
            radio[2].checked=true
            pledge[1].classList.add('hide')
            pledge[0].classList.add('hide')

        }
        })
    })

    /** continue buttons on the modal */
proceed.forEach((e)=>{
    e.addEventListener("click", (evt)=>{
       evt.preventDefault()
       modalMain.classList.add("visibility")
        thanks.classList.remove('hide')
    })
})
