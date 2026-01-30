export default {
  id: "q1",
  text: `You are finally home and relaxing after a difficult day.
A friend calls and asks you to come over immediately. They sound distressed but can’t explain why.`,
  answers: [
    { text: "I try to reason with them and suggest postponing, because I really need rest.", agency: 1, abstraction: -1 },
    { text: "I immediately agree to come, because it’s my friend.", agency: -1, abstraction: 1 },
    { text: "I try to reason with them and suggest postponing, because they need to learn to solve their own problems.", agency: 1, abstraction: 1 },
    { text: "I immediately agree to come, because I expect the favor to be returned in the future.", agency: -1, abstraction: -1 }
  ]
};
