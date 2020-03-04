/*function getData() {
  fetch("http://localhost:5050/fibonacci/7")
    .then(response => response.json())
    // Transform the data into json
    .then(function(data) {
      // Create and append the li's to the ul
      console.log(data);
    });
}
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
}*/

// submitButton.addEventListener("click", () => {
//   let inputNumber = parseInt(userInput.value);
//   console.log(inputNumber);

//   fetch("http://localhost:5050/fibonacci/" + inputNumber)
//     .then(response => response.json())
//     .then(function(data) {
//       console.log(data);
//       document.getElementById("result").innerText = data.result;
//     });
//});

submitButton.addEventListener("click", () => {
  let inputNumber = parseInt(userInput.value);
  console.log(inputNumber);

  fetch("http://localhost:5050/fibonacci/" + inputNumber)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      document.getElementById("result").innerText = data.result;
    });
});
