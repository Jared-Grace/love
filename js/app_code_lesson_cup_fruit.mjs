import { app_code_cup } from "./app_code_cup.mjs";
import { app_code_lesson_fruit_emoji } from "./app_code_lesson_fruit_emoji.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_cup_fruit(parent, word, name) {
  arguments_assert(arguments, 3);
  ("a cup with a name written on it and the fruit that word names drawn inside it");
  (
    "Asked for by the word, so a screen names what is in the cup once and the picture follows. Four screens used to fetch the picture themselves and hand it over beside the word, which is the same fact carried twice and two chances to carry it wrong."
  );
  (
    "The plain cup keeps its own name for the screens that draw one with nothing in it, which is a picture rather than a fruit and has no word to be asked by."
  );
  let emoji = app_code_lesson_fruit_emoji(word);
  let cup = app_code_cup(parent, emoji, name);
  return cup;
}
