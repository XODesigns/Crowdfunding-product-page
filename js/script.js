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

backUs.addEventListener("click", () => {
  modalMain.classList.remove("visibility");
  radio.forEach((e) => {
    e.checked = false;
  });
});

btn.addEventListener("click", () => {
  thanks.classList.add("hide");
});

/** Modal checkbox events -  to togglen visibility for the pledge section */

label.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("one")) {
      pledge[0].classList.toggle("hide");
      radio[0].checked = true;
      pledge[1].classList.add("hide");
      pledge[2].classList.add("hide");
    } else if (e.classList.contains("two")) {
      pledge[1].classList.toggle("hide");
      radio[1].checked = true;
      pledge[0].classList.add("hide");
      pledge[2].classList.add("hide");
    } else if (e.classList.contains("three")) {
      pledge[2].classList.toggle("hide");
      radio[2].checked = true;
      pledge[1].classList.add("hide");
      pledge[0].classList.add("hide");
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
  amount.forEach((e) => {
    if (e.value) {
      /** sum up all input values to the landing page */
      bamboo()
      arr.push(e.value);
      let sum = arr.reduce((a, b) => Number(a) + Number(b));
      console.log(sum);

      //   let result = e.value;
      fund.innerHTML = `$ ${sum}`;
      modalMain.classList.add("visibility");
      thanks.classList.remove("hide");
      e.value = "";
      pledge[0].classList.add("hide");
      pledge[1].classList.add("hide");
      pledge[2].classList.add("hide");
    }
  });
});


function bamboo() {

  if (amount[0].value < 25) {
    alert("amount must be more than $25")
  } else if (amount[1].value < 75) {
    alert("amount must be more than $75")
  } else {
    e.value = "";
  }
}