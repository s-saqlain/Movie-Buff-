
const facts=
    [
        "Spider-Man made his first appearance in 'Amazing Fantasy' #15 in 1962, created by writer Stan Lee and artist Steve Ditko.",
        "Iron Man's alter ego, Tony Stark, was inspired by Howard Hughes, the wealthy industrialist and inventor.",
        "The character of Wolverine was first introduced in 'The Incredible Hulk' #180 in 1974 before becoming a mainstay of the X-Men series.",
        "Marvel's Cinematic Universe (MCU) began with the release of 'Iron Man' in 2008, which was the first film in what would become a massive interconnected film series.",
        "The Hulk's alter ego, Bruce Banner, was named after two scientists: Robert Bruce, an early researcher on gamma rays, and the term 'banner' as a nod to the colorful aspect of comic books.",
        "Captain America was created during World War II as a patriotic character to support the American war effort, first appearing in 'Captain America Comics' #1 in 1941.",
        "Stan Lee, one of Marvel's most iconic creators, had cameo appearances in nearly every MCU film until his passing in 2018.",
        "The character of Black Panther, T'Challa, made his first appearance in 'Fantastic Four' #52 in 1966 and was the first Black superhero in mainstream American comics.",
        "Deadpool, known for his irreverent humor and breaking the fourth wall, was originally introduced as a villain in 'New Mutants' #98 in 1990.",
        "The character of Thor is based on the Norse god of thunder and was created by writer Stan Lee, artist Jack Kirby, and artist Larry Lieber, debuting in 'Journey into Mystery' #83 in 1962."
    ]

const quotes=[
    "Life is what happens when you're busy making other plans.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "You miss 100% of the shots you don’t take.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "It always seems impossible until it’s done.",
    "Don’t watch the clock; do what it does. Keep going."
];

const jokes=[
    "Why did Spider-Man break up with his girlfriend? Because she found him too clingy!",
    "Why doesn’t Thor like social media? Because he hates Twitterstorms!",
    "What is Groot’s favorite type of music? Heavy branching!",
    "Why don’t the Avengers use the Hulk to advertise? Because they’re afraid he’ll smash the competition!",
    "What did the Hulk say when he learned how to tie his shoes? Hulk tie!",
    "Why did Ant-Man get along with everyone at the party? Because he was always down to earth!",
    "What do you call Iron Man without his suit? Stark naked!",
    "Why does Black Panther always win at poker? Because he's got the purr-fect poker face!",
    "Why does Loki always play tricks on Thor? Because he loves to hammer home a point!",
    "What’s Captain America's favorite coffee? Americano, of course!"
  ]


  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('QuotesBox').textContent = quotes[randomIndex];
  }

  function displayRandomFact(){
    const randomIndex=Math.floor(Math.random()*facts.length);
    document.getElementById('FactsBox').textContent=facts[randomIndex];
  }

  function displayRandomJoke(){
    const randomIndex=Math.floor(Math.random()*jokes.length);
    document.getElementById('JokesBox').textContent=jokes[randomIndex];
  }

  displayRandomQuote()
  displayRandomFact()
  displayRandomJoke()

  setInterval(displayRandomFact,8000);
  setInterval(displayRandomQuote,8000);
  setInterval(displayRandomJoke,8000);

 
const correctAnswers = [
  "C",  "B", "B", "B", "C", "C", "C", "C", "C", "C" ];


function handleAnswerClick(event, questionIndex, answer) {
  const isCorrect = answer === correctAnswers[questionIndex];

  if (isCorrect) {
    event.target.style.color = "green";
  } else {
    event.target.style.color = "red";
  }
};

// Add event listeners to each option
document.querySelectorAll('.mcq').forEach((mcq, index) => {
  const options = mcq.querySelectorAll('span');
  
  options.forEach(option => {
    // Extract the answer (A, B, C, or D) from the text of the span
    const answer = option.textContent.trim().charAt(0);
    
    // Add click event listener to each option
    option.addEventListener('click', (event) => handleAnswerClick(event, index, answer));
  });
});


