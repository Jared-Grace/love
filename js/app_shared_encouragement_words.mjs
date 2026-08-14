import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_encouragement_words() {
  arguments_assert(arguments, 0);
  ("the words this app says to somebody who has just got something right");
  ("One list for every place that praises, so a lesson praising a single step and a quiz praising a finished question sound like the same voice rather than like two apps.");
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
