import { html_span_text } from "./html_span_text.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { ternary } from "./ternary.mjs";
import { text_is } from "./text_is.mjs";
import { list_to_or_list_generic } from "./list_to_or_list_generic.mjs";
export function app_code_operators_word_list(
  parent,
  operators,
  word_relationship,
  operator_map,
) {
  "render a list of operators as code tiles joined by a relationship word (and / or): each operator gets its own dark code tile, and the commas and the final and/or are plain text. operator_map turns one operator into the symbol shown in its tile. Extracted from the arithmetic-operators title so any lesson can list its operators the same way.";
  "The joining words are written exactly as the list builder hands them over, spaces and all. Padded a second time here they came out with a space in front of every comma - the one place English never puts one - and with the word between the last two doubled apart from both of them.";
  let concated = list_to_or_list_generic(operators, word_relationship);
  function lambda(item) {
    let condition = text_is(item);
    let result = ternary(condition, html_span_text, html_span_text_code_dark);
    if (not(condition)) {
      item = operator_map(item);
    }
    result(parent, item);
  }
  each(concated, lambda);
}
