export function app_shared_bible_verses_counts() {
  "The amounts of verses a reader is offered as something to press, rather than as a number to type.";
  "They are close together at the small end and far apart at the large one, because the difference between one verse and two is a different reading and the difference between twenty and twenty-one is not. A row that counted evenly would spend most of its width on distinctions nobody makes.";
  "Two surfaces ask this same question - the verses app asks how many to draw, and the sending page asks how many to put in a message - and there is no reason for a reader to meet two different rows of numbers for the one question.";
  let counts = [1, 2, 3, 4, 6, 8, 10, 20, 40];
  return counts;
}
