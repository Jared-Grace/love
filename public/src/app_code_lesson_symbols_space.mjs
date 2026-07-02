import { each_next } from "../../../love/public/src/each_next.mjs";
import { list_text_insert_between_spaces_random } from "../../../love/public/src/list_text_insert_between_spaces_random.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_code_lesson_symbols_letters_batch_get } from "../../../love/public/src/app_code_lesson_symbols_letters_batch_get.mjs";
import { identity } from "../../../love/public/src/identity.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_digits_generic } from "../../../love/public/src/app_code_lesson_symbols_digits_generic.mjs";
export function app_code_lesson_symbols_space() {
  function lambda(root) {
    let c = app_code_container_light_blue(root);
    let div = html_div(c);
    html_div_text(
      div,
      "In English, when writing, we use spaces to separate words",
    );
    html_div_text(div, "For a computer, a space is considered a symbol");
  }
  function batch_get() {
    let mapped = app_code_lesson_symbols_letters_batch_get(identity);
    function lambda5(item3) {
      let split = list_text_insert_between_spaces_random(item3);
      function lambda2(item, next) {
        return;
      }
      each_next(list, lambda2);
      return split;
    }
    let mapped2 = list_map(mapped, lambda5);
    return mapped2;
  }
  let r5 = app_code_lesson_symbols_digits_generic(
    "Symbols (Space)",
    "symbols_space",
    lambda,
    noop,
    batch_get,
  );
  return r5;
}
