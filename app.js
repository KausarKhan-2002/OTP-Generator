const otpInputs = document.querySelectorAll(".otp");
const otpGenerator = document.querySelector(".generator");
const otpReset = document.querySelector(".reset");
let yourOtp = document.getElementById("yourOtp")
// console.log(otp, otpGenerator, otpReset);

window.addEventListener("load", () => {
  otpInputs[0].focus();
});


const generateFourDigitNumber = () => {
  const randomOTP = Math.floor(1000 + Math.random() * 9000);
  return randomOTP
};

let otp = ""
otpInputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // Enter digit to add element and focus on next element
    if (e.target.nextElementSibling && e.key != "Backspace") {
      e.target.nextElementSibling.focus();
    }
    e.target.value = e.target.value[0];
    otp += e.target.value
    // console.log(e.target.value, e.target.value.length);
    // console.log(e);
    // console.log(otp);
    
    // Enter backspace to remove current element and focus on previous element
    if (e.key == "Backspace") {
      if (e.target.previousElementSibling) {
        e.target.previousElementSibling.focus();
      }
      e.target.value = "";
    }
  });
});


let otpDigit04
let displayOTP = document.getElementById("otp")
otpGenerator.addEventListener("click", () => {
  otpDigit04 = generateFourDigitNumber()
  displayOTP.innerHTML = otpDigit04
    yourOtp.style.right = ".5rem"
    
    setTimeout(() => {
      yourOtp.style.right = "-15rem"
    }, 2000)
})

const matchOTP = () =>  {
  displayOTP.innerHTML = otpDigit04
  let inputOTPCatch = ""
  otpInputs.forEach(input => inputOTPCatch += input.value)
  if (otpDigit04 == inputOTPCatch) {
    alert("OTP is matched successfully!")
  }
  else {
    alert("Oops! Incorrent OTP Try again")
  }
  console.log(otpDigit04, inputOTPCatch);
  
}

let submit = document.querySelector(".submit")
submit.addEventListener("click", () => {
  matchOTP()
})