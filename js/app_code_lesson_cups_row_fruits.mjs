import { app_code_cups_row } from "./app_code_cups_row.mjs";
import { app_code_lesson_cup_fruit } from "./app_code_lesson_cup_fruit.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lesson_cups_row_fruits(parent, pairs) {
  arguments_assert(arguments, 2);
  ("a row of cups standing side by side, each one drawn from what is in it and the name written on it");
  ("A row and the cups in it are one thing on a screen and were two in the code, so a screen wanting three cups wrote four lines and a screen wanting two wrote three. What a screen actually has to say is the list of cups, and the row is what a list of cups is drawn as.");
  ("Each cup is given as the word for what is in it and then the name on it, in that order, which is the order the cup itself is asked for in. Kept as a pair rather than as two lists, because a word and the name beside it are one cup, and two lists of them can be edited out of step without anything on the screen looking wrong.");
  let row = app_code_cups_row(parent);
  function cup_of(pair) {
    "one cup of the row, drawn from the word it holds and the name written on it";
    let word = list_first(pair);
    let name = list_last(pair);
    let cup = app_code_lesson_cup_fruit(row, word, name);
    return cup;
  }
  let cups = list_map(pairs, cup_of);
  return cups;
}
