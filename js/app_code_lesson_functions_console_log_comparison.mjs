import { app_code_lesson_functions_console_log_generic } from "./app_code_lesson_functions_console_log_generic.mjs";
import { app_code_binary_next_arg } from "./app_code_binary_next_arg.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_container_light_blue_cycle_code } from "./app_code_container_light_blue_cycle_code.mjs";
import { each } from "./each.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_code_lesson_symbol_set } from "./app_code_lesson_symbol_set.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
export function app_code_lesson_functions_console_log_comparison(params) {
  let operator = property_get(params, "operator");
  let question_middle = property_get(params, "question_middle");
  let pair = property_get_or_null(params, "pair");
  let name_id_rights = property_get(params, "name_id_rights");
  let closing = property_get(params, "closing");
  let preamble = property_get(params, "preamble");
  let explanation = property_get(params, "explanation");
  let symbol = property_get(operator, "operator");
  let next_arg = property_get_or_null(params, "next_arg");
  let next_arg_missing = null_is(next_arg);
  if (next_arg_missing) {
    next_arg = app_code_binary_next_arg(symbol, pair);
  }
  var r = app_code_lesson_functions_console_log_generic({
    above,
    lambda$code: js_code_statement,
    name_id_rights,
    next_arg,
    example_count: 2,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: 2,
  });
  let fn_name = property_get(r, "fn_name");
  let lesson = property_get(r, "lesson");
  let lesson_symbol = app_code_lesson_symbol_set(lesson, symbol);
  return lesson_symbol;
  function above(root) {
    function render_lines(container, lines) {
      let present = null_not_is(lines);
      if (present) {
        function render_line(line) {
          html_div_cycle_code(container, line);
        }
        each(lines, render_line);
      }
    }
    let has_preamble = null_not_is(preamble);
    if (has_preamble) {
      let preamble_container = app_code_container_light_blue(root);
      render_lines(preamble_container, preamble);
    }
    let c = app_code_container_light_blue(root);
    let tail = text_combine_multiple([
      " asks a question: is the left number ",
      question_middle,
      " the right number?",
    ]);
    html_div_cycle_code(c, ["The symbol ", symbol, tail]);
    render_lines(c, explanation);
    let parts = closing(fn_name);
    app_code_container_light_blue_cycle_code(root, parts);
  }
}
