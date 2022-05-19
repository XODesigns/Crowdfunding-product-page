const backUs = document.querySelector(".back-us")
const modalMain = document.querySelector(".modal")
const label = document.querySelectorAll(".label")
const pledge = document.querySelectorAll("#visible")
const radio = document.querySelectorAll("input[type='radio']")

backUs.addEventListener("click", ()=>{
    modalMain.classList.remove("visibility")
    radio.forEach((e)=>{
        e.checked=false
    })
    
})



/** Modal checkbox event in jquery -  to togglen visibility for the pledge section */


    // $('.first').click(()=>{
    //     if($('#first').prop("checked") == true){
    //         $('.one').removeClass('hide');
    //         $('.four').addClass('border')
            
    //     }
    //     else if($('#first').prop("checked") == false){
    //         $('.one').addClass('hide');
    //     }
    // })

    // $('.second').click(()=>{
    //     if($('#second').prop("checked") == true){
    //         $('.two').removeClass('hide');
    //         $('.five').addClass('border')
    //     }
    //     else if($('#second').prop("checked") == false){
    //         $('.two').addClass('hide');
    //     }
    // })

    // $('.third').click(()=>{
    //     if($('#third').prop("checked") == true){
    //         $('.three').removeClass('hide');
    //         $('.five').addClass('border')
    //     }
    //     else if($('#third').prop("checked") == false){
    //         $('.three').addClass('hide');
    //     }
    // })
    
    label.forEach((e)=>{
    e.addEventListener("click", ()=>{
        if(e.classList.contains("one")){
            pledge[0].classList.toggle('hide')
            radio[0].checked=true
        } else if(e.classList.contains("two")){
            pledge[1].classList.toggle('hide')
            radio[1].checked=true
        } else if(e.classList.contains("three")){
            pledge[2].classList.toggle('hide')
            radio[2].checked=true
        }
        })
    })