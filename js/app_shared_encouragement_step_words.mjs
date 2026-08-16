import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_encouragement_step_words() {
  arguments_assert(arguments, 0);
  ("the words this app says to somebody who has just got ONE STEP right, with more of the same thing still in front of them");
  ("Every one of them says the step was right and none of them says anything is over. Congratulations and Well done are how a person is spoken to at the end of a thing, so said after the first of three steps they tell the learner they have finished, and the two steps that follow read as something going wrong rather than as the rest of the work.");
  ("Kept apart from the words said at the end for exactly that reason: the two lists are not two spellings of one thing that happened to drift, they are the difference between during and after, and a word that fits both is the exception rather than the rule.");
  let words = [
    "Correct",
    "That is right",
    "Right",
    "Exactly",
    "Yes",
    "Nice",
    "Good",
    "Keep it up",
  ];
  return words;
}
