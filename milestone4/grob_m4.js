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

submitButton.addEventListener("click", () => {
  let a = parseInt(userInput.value);
  let b = fibonacci(a);
  document.getElementById("result").innerText = b;
});
