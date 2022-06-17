const backUs = document.querySelector(".back-us");
const modalMain = document.querySelector(".modal");
const label = document.querySelectorAll(".label");
const pledge = document.querySelectorAll("#visible");
const radio = document.querySelectorAll("input[type='radio']");
const proceed = document.querySelectorAll(".continue");
const thanks = document.querySelector(".thanks");
const amount = document.querySelectorAll("input[type='number']");
const form = document.querySelector("#form");
const fund = document.querySelector(".amount-backed");
const btn = document.querySelector(".got-it");
const rewardBtn = document.querySelector(".reward")
const rewardBtnTwo = document.querySelector(".reward2")
const pledger = document.querySelectorAll(".pledger")
const pledgerSec = document.querySelectorAll(".pledgerSec")
const bookmark = document.querySelector(".bookmark")
const progressBar = document.querySelector(".bar")
const backers = document.querySelector(".total-backers")
const containerPledge = document.querySelectorAll(".pledge-container")
const closeBtn = document.querySelector(".close")
const mobileMenu = document.querySelector(".mobile")
const burger = document.querySelector("#burger")
const closeMenu = document.querySelector(".menu-close")



backUs.addEventListener("click", () => {
  modalMain.classList.remove("visibility");
  radio.forEach((e) => {
    e.checked = false;
  });
});

/**Mobile menu toggle */

mobileMenu.style.display = "none"
// burger.style.display = "block"

closeMenu.addEventListener("click", () => {
  mobileMenu.style.display = "none"
  burger.classList.remove("hideBurger")
})

burger.addEventListener("click", () => {
  mobileMenu.style.display = "grid"
  burger.classList.add("hideBurger")
})

/**Accessing the x from the form to close it when clicked */

closeBtn.addEventListener("click", () => {
  modalMain.classList.add("visibility");
})


/**bookmark button color change when clicked*/
bookmark.addEventListener("click", (evt) => {
  evt.preventDefault();
  const active = document.querySelector(".active")
  const focus = document.querySelector(".focus")
  bookmark.classList.toggle("bookmarked")
  active.classList.toggle("deactive")
  focus.classList.toggle("deactive")
})


btn.addEventListener("click", () => {
  thanks.classList.add("hide");
});


rewardBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  modalMain.classList.remove("visibility");

  if (rewardBtn) {
    pledge[1].classList.remove("hide")
    pledge[0].classList.add("hide");
    radio[1].checked = true;
    pledge[2].classList.add("hide");
    containerPledge[1].style.borderColor = "hsl(176, 50%, 47%)"
    containerPledge[0].style.borderColor = "hsl(0,0%,90%)"
    containerPledge[2].style.borderColor = "hsl(0,0%,90%)"
  }
})

rewardBtnTwo.addEventListener("click", (evt) => {
  evt.preventDefault();
  modalMain.classList.remove("visibility");

  if (rewardBtnTwo) {
    pledge[2].classList.remove("hide")
    pledge[0].classList.add("hide");
    radio[2].checked = true;
    pledge[1].classList.add("hide");
    containerPledge[2].style.borderColor = "hsl(176, 50%, 47%)"
    containerPledge[0].style.borderColor = "hsl(0,0%,90%)"
    containerPledge[1].style.borderColor = "hsl(0,0%,90%)"

  }
})




/**Total Backers */
let number = 5007;
let nf = new Intl.NumberFormat('en-US');
let backersLeft = nf.format(number);

backers.innerHTML = `${backersLeft}`

/**Backing Amount */
let funding = 86914
// Create our number formatter.
let formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0,
});

let funds = formatter.format(funding)
fund.innerHTML = `${funds}`

/** Declare and place pledgers amount on the page */
let firstCount = 101
let secCount = 64
let left = "left"
pledger[0].innerHTML = `${firstCount} <span>${left}</span>`
pledger[1].innerHTML = `${secCount} <span>${left}</span>`
pledgerSec[0].innerHTML = `${firstCount} <span>${left}</span>`
pledgerSec[1].innerHTML = `${secCount} <span>${left}</span>`


/** Progress Bar placeholder laoder */

let placeHolder = funding / 1000
progressBar.style.width = `${placeHolder}%`

/** Modal checkbox events -  to togglen visibility for the pledge section */

label.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("one")) {
      pledge[0].classList.toggle("hide");
      radio[0].checked = true;
      pledge[1].classList.add("hide");
      pledge[2].classList.add("hide");
      containerPledge[0].style.borderColor = "hsl(176, 50%, 47%)"
      containerPledge[1].style.borderColor = "hsl(0,0%,90%)"
      containerPledge[2].style.borderColor = "hsl(0,0%,90%)"
    } else if (e.classList.contains("two")) {
      pledge[1].classList.toggle("hide");
      radio[1].checked = true;
      pledge[0].classList.add("hide");
      pledge[2].classList.add("hide");
      containerPledge[1].style.borderColor = "hsl(176, 50%, 47%)"
      containerPledge[0].style.borderColor = "hsl(0,0%,90%)"
      containerPledge[2].style.borderColor = "hsl(0,0%,90%)"
    } else if (e.classList.contains("three")) {
      pledge[2].classList.toggle("hide");
      radio[2].checked = true;
      pledge[1].classList.add("hide");
      pledge[0].classList.add("hide");
      containerPledge[2].style.borderColor = "hsl(176, 50%, 47%)"
      containerPledge[0].style.borderColor = "hsl(0,0%,90%)"
      containerPledge[1].style.borderColor = "hsl(0,0%,90%)"
    }
  });
});

/** continue buttons on the modal */
// proceed.forEach((e)=>{
//     e.addEventListener("click", (evt)=>{
//        evt.preventDefault()

//     })
// })

/**update the fund amount on the home page when the input has been passed through */
const arr = [];

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  // bamboo()

  /**update the pledges left */




  //   (e.value)
  // secCount++
  totalBackers()

  amount.forEach((e) => {

    let value = Number(amount[0].value)
    let valueTwo = Number(amount[1].value)

    if (value >= 25 || valueTwo >= 75) {
      backed()
      console.log(typeof value)
      /** sum up all input values to the landing page */
      // bamboo()
      arr.push(funding)
      arr.push(e.value);
      let sum = arr.reduce((a, b) => a + Number(b));
      console.log(sum);

      /**progress bar */
      let progress = e.value / 1000
      let bar = placeHolder + progress

      progressBar.style.width = `${bar}%`
      console.log(`${bar}%`)


      fund.innerHTML = ` ${formatter.format(sum)}`;
      modalMain.classList.add("visibility");
      thanks.classList.remove("hide");
      e.value = "";
      pledge[0].classList.add("hide");
      pledge[1].classList.add("hide");
      pledge[2].classList.add("hide");

    }

  });

});



/**function that checks if the amount entered into the inputs equals to the starting amount 
 * The second function is used to update the number of backers left
 * the third is to update the total backers 
 */

// function bamboo() {

//   if (amount[0].value < Number(25)) {
//     amount.value = "";
//   } else if (amount[1].value < Number(75)) {
//     amount.value = "";
//   } else {

//   }
// }

function backed() {
  if (amount[0].value) {
    let x = firstCount - 1
    console.log(x)
    pledger[0].innerHTML = `${x} left`
    pledgerSec[0].innerHTML = `${x} left`
  } else if (amount[1].value) {
    let y = secCount - 1
    pledger[1].innerHTML = `${y} left`
    pledgerSec[1].innerHTML = `${y} left`
  }

}

function totalBackers() {
  if (amount) {
    let x = number + 1
    backers.innerHTML = `${nf.format(x)}`
  }


}