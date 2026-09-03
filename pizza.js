function orderPizza() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Out of dough!');
    }, 2000);
  });
}

// Async function to handle the promise
async function getPizza() {
  try {
    const result = await orderPizza();
    console.log(result);
  } catch (error) {
    console.log('oops', error);
  }
}
getPizza();

