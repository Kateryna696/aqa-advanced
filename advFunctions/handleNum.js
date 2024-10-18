function handleNum(n, callback1, callback2) {
  if (n % 2 == 0) {
    return callback1();
  }
  return callback2();
}

function handleEven() {
  console.log("number is even");
}

function handleOdd() {
  console.log("number is odd");
}

handleNum(4, handleEven, handleOdd);
handleNum(9, handleEven, handleOdd);
