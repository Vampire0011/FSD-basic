let count = 1;

const id = setInterval(() => {
  console.log(count);
  count++;
  
  if (count > 5) {
    clearInterval(id);
  }
}, 1000);