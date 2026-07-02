import { each_next } from "../../../love/public/src/each_next.mjs";
import { identity } from "../../../love/public/src/identity.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { boolean_random } from "../../../love/public/src/boolean_random.mjs";
import { text_transform } from "../../../love/public/src/text_transform.mjs";
import { list_map_multiple } from "../../../love/public/src/list_map_multiple.mjs";
import { text_split_empty } from "../../../love/public/src/text_split_empty.mjs";
import { text_letters_only } from "../../../love/public/src/text_letters_only.mjs";
import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_digits_generic } from "../../../love/public/src/app_code_lesson_symbols_digits_generic.mjs";
import { ternary } from "../../../love/public/src/ternary.mjs";
import { text_upper_to } from "../../../love/public/src/text_upper_to.mjs";
export function app_code_lesson_symbols_space() {
  function lambda(root) {
    let c = app_code_container_light_blue(root);
    let div = html_div(c);
    html_span_text(
      div,
      "In English, when writing, we use spaces to separate words",
    );
    html_span_text(div, "For a computer, a space is considered a symbol");
  }
  function lambda2(word) {
    function lambda3(c2) {
      let u = boolean_random();
      let mapper = ternary(u, text_upper_to, identity);
      let r = mapper(c2);
      return r;
    }
    let joined = text_transform(word, lambda3);
    log(app_code_lesson_symbols_space.name, {
      joined,
    });
    return joined;
  }
  function batch_get() {
    let verse =
      "For God so loved the world that He gave His one and only Son, that everyone who believes in Him shall not perish but have eternal life";
    let split = text_split_space(verse);
    let mappers = [text_letters_only, lambda2, text_split_empty];
    let mapped = list_map_multiple(split, mappers);
    function lambda4(item, next) {}
    each_next(list, lambda4);
    return mapped;
  }
  let batch_symbols = batch_get;
  let r5 = app_code_lesson_symbols_digits_generic(
    "Symbols (Letters)",
    "symbols_letters",
    lambda,
    noop,
    batch_symbols,
  );
  return r5;
}
