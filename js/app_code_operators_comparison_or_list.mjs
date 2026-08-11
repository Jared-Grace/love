import { app_code_operators_word_list } from "./app_code_operators_word_list.mjs";
import { js_operator_symbol } from "./js_operator_symbol.mjs";
import { js_operators_comparison } from "./js_operators_comparison.mjs";
import { list_to_or_list_word } from "./list_to_or_list_word.mjs";
export function app_code_operators_comparison_or_list(parent) {
  "the six comparison operators as code tiles joined by or - what the word comparison names, rendered the one way every lesson renders it";
  "Or rather than and, because a single comparison uses exactly one of them. A lesson enumerating all six at once would want and, but no lesson does that: every site saying this is telling the learner what one comparison may be built from";
  let operators = js_operators_comparison();
  let word_relationship = list_to_or_list_word();
  app_code_operators_word_list(
    parent,
    operators,
    word_relationship,
    js_operator_symbol,
  );
}
