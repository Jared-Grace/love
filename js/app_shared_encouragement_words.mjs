import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_encouragement_words() {
  arguments_assert(arguments, 0);
  ("the words this app says to somebody who has just FINISHED something they got right");
  ("They are words for an ending - Congratulations, Success, Well done are all said to a person who has arrived somewhere. A step in the middle of a piece of work is praised from app_shared_encouragement_step_words instead, which says the step was right without saying anything is over.");
  let words = [
    "Congratulations",
    "Success",
    "Good job",
    "Great job",
    "Well done",
    "Keep it up",
    "Amazing",
    "Way to go",
    "Awesome",
  ];
  return words;
}
