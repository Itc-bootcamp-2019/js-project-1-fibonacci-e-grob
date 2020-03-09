const errorMsg = document.getElementById("error-50");
const errorFortyTwo = document.getElementById("errorFortyTwo");
let result = document.getElementById("result");
const inputBox = document.getElementById("userInput");
const loader = document.querySelector(".loader");

submitButton.addEventListener("click", () => {
  let inputNumber = parseInt(userInput.value);
  console.log(inputNumber);

  errorMsg.style.visibility = "hidden";
  errorFortyTwo.style.visibility = "hidden";
  result.style.visibility = "hidden";
  inputBox.classList.remove("red-text");

  if (inputNumber > 50) {
    printError50(errorMsg);
  } else {
    loader.style.visibility = "visible";

    fetch("http://localhost:5050/fibonacci/" + inputNumber)
      .then(response => {
        if (response.status === 400) {
          return response.text();
        } else {
          return response.json();
        }
      })

      //if response is a json(object) do first one, if text, do second one
      .then(data => {
        console.log(data);
        if (typeof data === "object") {
          loader.style.visibility = "hidden";
          result.style.visibility = "visible";
          result.innerText = data.result;
        } else {
          loader.style.visibility = "hidden";
          errorFortyTwo.style.visibility = "visible";
          errorFortyTwo.innerText = "Server Error: " + data;
          errorFortyTwo.classList.add("fortyTwo");
        }
      });
  }
});

function printError50(errorMsg) {
  errorMsg.innerText = "can't be larger than 50";
  errorMsg.classList.add("error-50-style", "red-text");
  inputBox.classList.add("red-text");
  errorMsg.style.visibility = "visible";
}

//local fibonacci func
function fibonacci(x) {
  let f1 = 0;
  let f2 = 1;
  let fx;

  if (x === 0) {
    fx = 0;
  } else if (x === 1) {
    fx = 1;
  } else {
    for (let i = 2; i <= x; i++) {
      fx = f1 + f2;
      f1 = f2;
      f2 = fx;
    }
  }
  return fx;
}
