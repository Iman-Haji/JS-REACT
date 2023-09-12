function decisionMake() {
  const questionInput = document.querySelector("#userQuestion");
  const answerText = document.querySelector("#answer");
  let text = "";

  let number = Math.random() * 10;
  number = Math.floor(number) + 1;

  switch (number) {
    case 0:
      text=
      "Yes, the odds are in your favour."
      break;
    case 1:
      text=
      "Ask again."
      break;
    case 2:
      text=
      "Hard to say, ask again later."
      break;
    case 3:
      text=
      "Possibly, the odds are in your favour!"
      break;
    case 4:
      text=
      "Perhaps not."
      break;
    case 5:
      text=
      "Why not? Go out there and give it a shot."
      break;
    case 6:
      text=
      "Have patience, you'll get the clarity you were asking for."
      break;
    case 7:
      text=
      "Not clear, try again."
      break;
    case 8:
      text=
      "I say go for it, it\'s your lucky day!"
      break;
    case 9:
      text=
      "It looks promising!"
      break;
  } 
  answerText.textContent= text;
  
}