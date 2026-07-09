import { app_code_symbols_separated_on_question_numbered } from "../../../love/public/src/app_code_symbols_separated_on_question_numbered.mjs";
import { app_code_lesson_symbols_batch_digits } from "../../../love/public/src/app_code_lesson_symbols_batch_digits.mjs";
import { html_cycle_mono_list_between_comma_space_before_after } from "../../../love/public/src/html_cycle_mono_list_between_comma_space_before_after.mjs";
import { html_span_text_bold } from "../../../love/public/src/html_span_text_bold.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_code_lesson_symbols_counting } from "../../../love/public/src/app_code_lesson_symbols_counting.mjs";
import { app_code_lesson_name_id } from "../../../love/public/src/app_code_lesson_name_id.mjs";
export function app_code_lesson_symbols_digits_numbered() {
  let name_id = app_code_lesson_name_id("symbols", ["digits", "numbered"]);
  let r = app_code_lesson_symbols_counting(
    name_id,
    above,
    app_code_lesson_symbols_batch_digits,
    app_code_symbols_separated_on_question_numbered,
  );
  return r;
  function above(root) {
    let c = app_code_container_light_blue(root);
    let p = html_div(c);
    let ds = digits();
    html_cycle_mono_list_between_comma_space_before_after(
      p,
      "The numbers ",
      ds,
      " are called ",
    );
    html_span_text_bold(p, "digits");
    let p2 = html_div(c);
    html_cycle_mono_list_between_comma_space_before_after(
      p2,
      "In a number, its digits (",
      [0, 1, 2],
      [", ..., ", 9, ") are examples of "],
    );
    html_span_text_bold(p2, "symbols");
    html_div_text(
      c,
      "When we write computer programs, we use symbols, including numbers",
    );
  }
}
