let current = 1;

const timerId = setInterval(() => {
  console.log(current);

  if (current === 5) {
    clearInterval(timerId);
    process.exit();
  }

  current++;
}, 1000);
