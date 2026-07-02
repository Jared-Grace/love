import { list_map } from "../../../love/public/src/list_map.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_to_indices_skip_1 } from "../../../love/public/src/list_to_indices_skip_1.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { integer_random } from "../../../love/public/src/integer_random.mjs";
import { list_random_item_count } from "../../../love/public/src/list_random_item_count.mjs";
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
      let skipped = list_to_indices_skip_1(item3);
      let max = list_size(skipped);
      let r2 = integer_random(1, max);
      let items = list_random_item_count(skipped, r2);
      log(app_code_lesson_symbols_space.name, {
        items,
        item3,
      });
      return item3;
    }
    function lambda2(item) {}
    let mapped2 = list_map(list, lambda2);
    return mapped;
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
