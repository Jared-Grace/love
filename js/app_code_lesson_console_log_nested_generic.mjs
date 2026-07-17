import { js_code_statement } from "./js_code_statement.mjs";
import { app_code_lesson_functions_console_log_generic } from "./app_code_lesson_functions_console_log_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_map } from "./list_map.mjs";
import { list_join } from "./list_join.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_console_log_name } from "./js_console_log_name.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
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
    let texts = list_map(triple, text_to);
    let joined = list_join(texts, separator);
    return joined;
  }
  function refill() {
    let triples = triples_get();
    let list = list_map(triples, triple_to_code);
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = title_name_id();
  var r = app_code_lesson_functions_console_log_generic({
    above,
    lambda$code: js_code_statement,
    name_id_rights: [],
    name_id,
    next_arg,
    example_count: 2,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  let lesson = property_get(r, "lesson");
  return lesson;
  function title_name_id() {
    "the home title is console.log nested <operator>";
    let console_name = js_console_log_name();
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text_code_dark(parent, console_name);
        html_span_text(parent, " nested ");
        html_span_text_code_dark(parent, symbol);
      }
      return render;
    }
    let rights = [console_name, word];
    let built = app_code_lesson_name_id_generic(rights, "expressions", title_get);
    return built;
  }
  function above(root) {
    let c = app_code_container_light_blue(root);
    let line_seen = html_div(c);
    let seen_text = text_combine_multiple([
      "We've already seen how to ",
      verb,
      " two numbers: ",
    ]);
    html_span_text(line_seen, seen_text);
    html_span_text_code_dark(line_seen, triple_to_code(pair));
    let line_more = html_div(c);
    let more_text = text_combine_multiple([
      "We can ",
      verb,
      " more than two numbers together like this: ",
    ]);
    html_span_text(line_more, more_text);
    html_span_text_code_dark(line_more, triple_to_code(example_triple));
    let line_name = html_div(c);
    html_span_text(line_name, "Code like this is called an expression");
    let line_between = html_div(c);
    html_span_text(line_between, "Put one ");
    html_span_text_code_dark(line_between, symbol);
    html_span_text(line_between, " between each number");
  }
}
