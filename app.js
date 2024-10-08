const button = document.getElementsByTagName("button")[0];
const image = document.getElementsByTagName("img")[0];
const quote = document.getElementById("quote");
const person = document.getElementById("Person");
button.addEventListener("click", switchQuote);
function switchQuote() {
  const quotes = [
    "We don't make mistakes; we just have happy accidents.",
    "You can put it in a JSON file.",
    "I don't stop when I'm tired, I stop when I'm done.",
    "The best revenge is massive success.",
    "In real life, I assure you, there is no such thing as algebra.",
  ];
  const persons = [
    "Bob Ross",
    "Preston Cessna",
    "David Goggins",
    "Frank Sinatra",
    "Fran Lebowitz",
  ];
  const images = [
    "./media/Bob-Ross.jpg",
    "./media/Preston.jpg",
    "./media/David_Goggins.jpg",
    "./media/frank-sinatra.jpg",
    "./media/Fran_Lebowitz.jpg",
  ];
  let number = Math.floor(Math.random() * 5);
  image.src = images[number];
  quote.innerText = quotes[number];
  person.innerText = persons[number];
}
