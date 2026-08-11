import { app_code_lesson_console_log_nested_generic_title_name_id } from "./app_code_lesson_console_log_nested_generic_title_name_id.mjs";
import { list_map_join_separator } from "./list_map_join_separator.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_map } from "./list_map.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div } from "./html_div.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_console_log_nested_generic(params) {
  "a reusable console.log lesson for a NESTED expression: three numbers joined by one operator (x op y op z, which is really (x op y) op z); the caller passes the operator symbol, a word for the id, an example triple for the intro, and triples_get which returns four DISTINCT [x,y,z] triples per refill so no two examples come out the same";
  let symbol = property_get(params, "symbol");
  let word = property_get(params, "word");
  let verb = property_get(params, "verb");
  let pair = property_get(params, "pair");
  let example_triple = property_get(params, "example_triple");
  let triples_get = property_get(params, "triples_get");
  let separator = text_combine_multiple([" ", symbol, " "]);
  function triple_to_code(triple) {
    let joined = list_map_join_separator(triple, text_to, separator);
    return joined;
  }
  function refill() {
    let triples = triples_get();
    let list = list_map(triples, triple_to_code);
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = app_code_lesson_console_log_nested_generic_title_name_id(
    symbol,
    word,
  );
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
  });
  return lesson;
  function above(root) {
    let c = app_code_container_light_blue(root);
    let line_seen = html_div(c);
    let seen_text = text_combine_multiple([
      "We've already seen how to ",
      verb,
      " two numbers: ",
    ]);
    html_span_text(line_seen, seen_text);
    let text = triple_to_code(pair);
    html_span_text_code_dark(line_seen, text);
    let line_more = html_div(c);
    let more_text = text_combine_multiple([
      "We can ",
      verb,
      " more than two numbers together like this: ",
    ]);
    html_span_text(line_more, more_text);
    let text2 = triple_to_code(example_triple);
    html_span_text_code_dark(line_more, text2);
    let line_name = html_div(c);
    html_span_text(line_name, "Code like this is called an expression");
    let line_between = html_div(c);
    html_span_text(line_between, "Put one ");
    html_span_text_code_dark(line_between, symbol);
    html_span_text(line_between, " between each number");
  }
}
