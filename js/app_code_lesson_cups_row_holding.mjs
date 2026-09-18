import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_cups_row } from "./app_code_cups_row.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { app_code_lesson_cup_fruit } from "./app_code_lesson_cup_fruit.mjs";
import { app_code_cup } from "./app_code_cup.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lesson_cups_row_holding(parent, pairs, names) {
  arguments_assert(arguments, 3);
  ("a row of cups standing side by side, each one drawn from what is in it and the name written on it");
  ("A row and the cups in it are one thing on a screen and were two in the code, so a screen wanting three cups wrote four lines and a screen wanting two wrote three. What a screen actually has to say is the list of cups, and the row is what a list of cups is drawn as.");
  ("Each cup is given as the word for what is in it and then the name on it, in that order, which is the order the cup itself is asked for in. Kept as a pair rather than as two lists, because a word and the name beside it are one cup, and two lists of them can be edited out of step without anything on the screen looking wrong.");
  ("No word means nothing is in that cup yet, and the cup is drawn empty. A screen that fills its cups one at a time has to draw the ones it has not filled, standing in the same row and in the same place as they will be standing in a moment - and a row that could only draw full cups made a screen draw the row twice in two different ways, which is two pictures of what has to be seen as one.");
  ("An empty cup is asked for as the plain cup rather than through the fruit, because the fruit refuses a word it draws nothing for and that refusal is worth keeping. A word with no picture is a mistake everywhere else on these screens; here there is no word at all, which is a different thing and says so.");
  ("The lesson's names are given to the row rather than to each cup, because the colour a name is written in is decided by where that name stands among the lesson's names - which is one fact about the lesson, not one per cup. Handed out cup by cup, the same row could have said two different things about the same name.");
  ("The names are not read off the pairs, although here they would come out right. A row can leave a cup out, draw them in another order, or show one cup twice, and any of those would quietly repaint a name that the code box further down is still drawing the old way. The lesson knows the order it introduced its names in; the picture only knows what it happens to be showing.");
  ("A screen with no colours yet hands in an empty list and every letter comes out the dark blue the cups have always been written in.");
  let row = app_code_cups_row(parent);
  function cup_of(pair) {
    "one cup of the row, drawn from the word it holds and the name written on it";
    let word = list_first(pair);
    let name = list_last(pair);
    let holding = text_empty_not_is(word);
    if (holding) {
      let filled = app_code_lesson_cup_fruit(row, word, name, names);
      return filled;
    }
    let empty = app_code_cup(row, word, name, names);
    return empty;
  }
  let cups = list_map(pairs, cup_of);
  return cups;
}
