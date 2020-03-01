function fibonacci(x) {
  let y;
  let f1 = 0;
  let f2 = 1;
  let fx;

  if (x === 0) {
    y = 0;
  } else if (x === 1) {
    y = 1;
  } else {
    for (i = 2; i < x + 1; i++) {
      fx = f1 + f2;
      f1 = f2;
      f2 = fx;
    }
    y = fx;
  }
  document.getElementById("x").innerText = "5";
  document.getElementById("y").innerText = y;
}
fibonacci(5);
