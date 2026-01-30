export default {
  id: "q7",
  text: `You work in a postal office where customer requests are accepted only through a website form.
An elderly man comes in and says a package he sent was never delivered.
He doesn’t understand the website and has no tracking number, but he has the receipt.
He asks you to help investigate.`,
  answers: [
    { text: "I politely reject the request, because I don’t want to violate procedure or complicate my life.", agency: -1, abstraction: -1 },
    { text: "I explain there’s nothing I can do. Some people just don’t understand that if everyone behaved like this, the system would collapse.", agency: -1, abstraction: 1 },
    { text: "I file the request on his behalf, because helping him matters more than the procedure.", agency: 1, abstraction: 1 },
    { text: "It’s not my fault he can’t figure out the website. If he wants extra service, he has to pay extra. I refer him to a friend who works nearby to solve the issue and submit the request on his behalf for a fee.", agency: 1, abstraction: -1 }
  ]
};
