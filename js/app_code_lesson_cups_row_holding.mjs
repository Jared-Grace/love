import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { app_code_cup } from "./app_code_cup.mjs";
import { app_code_cups_row } from "./app_code_cups_row.mjs";
import { app_code_lesson_cup_fruit } from "./app_code_lesson_cup_fruit.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lesson_cups_row_holding(parent, pairs) {
  arguments_assert(arguments, 2);
  ("a row of cups standing side by side, each one drawn from what is in it and the name written on it");
  ("A row and the cups in it are one thing on a screen and were two in the code, so a screen wanting three cups wrote four lines and a screen wanting two wrote three. What a screen actually has to say is the list of cups, and the row is what a list of cups is drawn as.");
  ("Each cup is given as the word for what is in it and then the name on it, in that order, which is the order the cup itself is asked for in. Kept as a pair rather than as two lists, because a word and the name beside it are one cup, and two lists of them can be edited out of step without anything on the screen looking wrong.");
  ("No word means nothing is in that cup yet, and the cup is drawn empty. A screen that fills its cups one at a time has to draw the ones it has not filled, standing in the same row and in the same place as they will be standing in a moment - and a row that could only draw full cups made a screen draw the row twice in two different ways, which is two pictures of what has to be seen as one.");
  ("An empty cup is asked for as the plain cup rather than through the fruit, because the fruit refuses a word it draws nothing for and that refusal is worth keeping. A word with no picture is a mistake everywhere else on these screens; here there is no word at all, which is a different thing and says so.");
  let row = app_code_cups_row(parent);
  function cup_of(pair) {
    "one cup of the row, drawn from the word it holds and the name written on it";
    let word = list_first(pair);
    let name = list_last(pair);
    let holding = text_empty_not_is(word);
    if (holding) {
      let filled = app_code_lesson_cup_fruit(row, word, name);
      return filled;
    }
    let empty = app_code_cup(row, word, name);
    return empty;
  }
  let cups = list_map(pairs, cup_of);
  return cups;
}
