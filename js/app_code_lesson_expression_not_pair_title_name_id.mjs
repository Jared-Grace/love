import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
export function app_code_lesson_expression_not_pair_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: ! around && or ||, an Expressions lesson");
  ("The title paints the symbols rather than the words, because the lesson is about the symbols - the words are only what the address is spelled with, where a symbol cannot go.");
  ("It is worded to sit beside the lesson that puts a ! around a comparison, because that is what it is the next of: same mark outside, a different kind of thing inside. A learner scanning the home list for the two of them is looking for the same three words with the last one changed.");
  ("Both operators are painted even though a line only ever holds one of them, because the home list is read before the lesson is opened and it is what says which lines are inside. Named as one, the learner would have to open it to find out the other was there too.");
  let symbol = js_operator_bang_symbol();
  let and_symbol = js_operator_and_symbol();
  let or_symbol = js_operator_or_symbol();
  function paint(parent) {
    html_cycle_code(parent, [
      "",
      symbol,
      " around ",
      and_symbol,
      " or ",
      or_symbol,
    ]);
  }
  let rights = ["not around and or"];
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(rights, left, paint);
  return built;
}
