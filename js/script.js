const backUs = document.querySelector(".back-us")
const modalMain = document.querySelector(".modal")
const check = document.querySelectorAll("#checkbox")

backUs.addEventListener("click", ()=>{
    modalMain.classList.remove("visibility")
})


/** Modal checkbox event in jquery -  to togglen visibility for the pledge section */


    $('.first').click(()=>{
        if($('#first').prop("checked") == true){
            $('.one').removeClass('hide');
        }
        else if($('#first').prop("checked") == false){
            $('.one').addClass('hide');
        }
    })

    $('.second').click(()=>{
        if($('#second').prop("checked") == true){
            $('.two').removeClass('hide');
        }
        else if($('#second').prop("checked") == false){
            $('.two').addClass('hide');
        }
    })

    $('.third').click(()=>{
        if($('#third').prop("checked") == true){
            $('.three').removeClass('hide');
        }
        else if($('#third').prop("checked") == false){
            $('.three').addClass('hide');
        }
    })

