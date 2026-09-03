const printHello = new Promise((resolve) => {
    resolve("Hello");
});

printHello.then((message) => {
    console.log(message);
});
