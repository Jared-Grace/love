import { app_code_lesson_console_log_pair_generic } from "./app_code_lesson_console_log_pair_generic.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { integer_random } from "./integer_random.mjs";
import { range_map } from "./range_map.mjs";
import { add } from "./add.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
export function app_code_lesson_functions_console_log_plus_minus() {
  "mixing + and - in one expression: console.log(a + b - c) and console.log(a - b + c); + and - are the same strength, so it just works from left to right; the first number is 5..9 and the others 2..4 so the answer never drops below 0";
  let plus = js_operator_plus_symbol();
  let minus = js_operator_minus_symbol();
  function first_of(index) {
    "the possible first numbers 5 through 9 (big enough that taking one away stays at or above 0)";
    return add(index, 5);
  }
  function triple_of(first) {
    let b = integer_random(2, 4);
    let c = integer_random(2, 4);
    return [first, b, c];
  }
  function triples_get() {
    "four triples with four DIFFERENT first numbers, so the four questions are all distinct";
    let firsts = list_shuffle_take(range_map(5, first_of), 4);
    let triples = list_map(firsts, triple_of);
    return triples;
  }
  function above(root) {
    let box = app_code_container_light_blue(root);
    let intro = html_div(box);
    html_span_text(intro, "We can mix ");
    html_span_text_code_dark(intro, plus);
    html_span_text(intro, " and ");
    html_span_text_code_dark(intro, minus);
    html_span_text(intro, " in one expression");
    html_div_cycle_code(box, ["They are the same strength, so work from left to right"]);
    html_div_cycle_code(box, ["", "5 + 2 - 3", " is ", "7 - 3", ", then ", "4"]);
  }
  let lesson = app_code_lesson_console_log_pair_generic({
    symbol1: plus,
    symbol2: minus,
    word: " plus minus",
    above,
    triples_get,
  });
  return lesson;
}
