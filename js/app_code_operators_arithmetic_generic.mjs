import { app_code_operators_word_list } from "./app_code_operators_word_list.mjs";
import { list_to_and_list_word } from "./list_to_and_list_word.mjs";
import { js_operators_arithmetic } from "./js_operators_arithmetic.mjs";
export function app_code_operators_arithmetic_generic(parent, operator_map) {
  let operators = js_operators_arithmetic();
  let word_relationship = list_to_and_list_word();
  app_code_operators_word_list(
    parent,
    operators,
    word_relationship,
    operator_map,
  );
}
