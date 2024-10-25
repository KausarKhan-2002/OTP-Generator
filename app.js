const otpInputs = document.querySelectorAll(".otp");
const otpGenerator = document.querySelector(".generator");
const otpReset = document.querySelector(".reset");
let yourOtp = document.getElementById("yourOtp");


window.addEventListener("load", () => {
  otpInputs[0].focus();
});

const generateFourDigitNumber = () => {
  const randomOTP = Math.floor(1000 + Math.random() * 9000);
  return randomOTP;
};

otpInputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // Enter digit to add element and focus on next element
    if (e.key == "Tab") {
      e.target.focus();
    }

    // If key is number then compare from 0 other compare from NaN which will show always false
    if (Number(e.key) >= 0) {
      e.target.value = e.target.value[0];
      e.target.nextElementSibling
        ? e.target.nextElementSibling.focus()
        : e.target.focus();
    }

    else if (typeof e.key == "string" && e.key != "Backspace") {
      otpInputs.forEach(input => {
        input.value = ""
      })
      otpInputs[0].focus()
    }

    // Enter backspace to remove current element and focus on previous element
    if (e.key == "Backspace") {
      if (e.target.previousElementSibling) {
        e.target.previousElementSibling.focus();
      }
    }
  });
});


let otpDigit04;
// It will generate OTP and show as an alert as well as focus on first input field
otpGenerator.addEventListener("click", () => {
  otpDigit04 = generateFourDigitNumber();
  alert(`Your OTP is: ${otpDigit04}`);
  otpInputs[0].focus();
});

const matchOTP = () => {
  // Matching OTP based on condition
  let inputOTPCatch = "";
  otpInputs.forEach((input) => (inputOTPCatch += input.value));
  if (otpDigit04 == inputOTPCatch) {
    yourOtp.innerHTML = `OTP is correct 😁`;
    yourOtp.style.right = ".5rem";

    setTimeout(() => {
      yourOtp.style.right = "-15rem";
    }, 2000);
    otpInputs.forEach((input) => (input.value = ""));
  } else if (inputOTPCatch.length < 4) {
    yourOtp.innerHTML = `Oops! not filled box 🤦‍♂️`;
    yourOtp.style.right = ".5rem";
    yourOtp.style.borderBottom = "4px solid orange";

    setTimeout(() => {
      yourOtp.style.right = "-40rem";
    }, 2000);
  } else {
    yourOtp.innerHTML = `Incorrect OTP 😧`;
    yourOtp.style.right = ".5rem";
    yourOtp.style.borderBottom = "4px solid orange";

    setTimeout(() => {
      yourOtp.style.right = "-40rem";
    }, 2000);
  }
};

let submit = document.querySelector(".submit");
submit.addEventListener("click", () => {
  matchOTP();
});