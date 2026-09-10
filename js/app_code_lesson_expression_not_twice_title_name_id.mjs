import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_category_expressions } from "./app_code_category_expressions.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_expression_not_twice_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title: ! around another !, an Expressions lesson");
  ("The title paints the symbol rather than the word not, because the lesson is about the symbol - the word is only what the address is spelled with, where a symbol cannot go.");
  ("It is worded to sit under the lesson that walks the same line a press at a time, which wears the same words with Solve in front of them. That is the whole of how the home list tells a pressing lesson from the twin that asks for the answer in one go.");
  ("The three ! lessons of this run now read as one frame with the thing inside changed: ! around another !, ! around a comparison, ! around && or ||. A learner scanning for the one they left off at is looking for the same three words with the last part changed.");
  ("It used to be titled from a list of plain words, which put it under Operators while its twin sat under Expressions, so the pair could not be seen as a pair. The words could not carry a symbol either, and the mark this lesson is about is a symbol.");
  let symbol = js_operator_bang_symbol();
  function paint(parent) {
    html_cycle_code(parent, ["", symbol, " around another ", symbol]);
  }
  let left = app_code_category_expressions();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
