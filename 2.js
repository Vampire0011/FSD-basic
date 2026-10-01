/*
question 2 :Design an Online Ticket Booking
Simulator
to
demonstrate asynchronous programming
using
callbacks, Promises, and async/await.*/

const bookTicket = (callback) => {
    setTimeout(() => callback("Ticket booked successfully!"), 2000);
};

// Callback
bookTicket(message => console.log(message));

// Promise
const bookTicketPromise = () => new Promise(resolve => {
    setTimeout(() => resolve("Ticket booked using Promise!"), 2000);
});

bookTicketPromise().then(message => console.log(message));

// Async/Await
const bookTicketAsync = async () => {
    const message = await bookTicketPromise();
    console.log(message);
};

bookTicketAsync();