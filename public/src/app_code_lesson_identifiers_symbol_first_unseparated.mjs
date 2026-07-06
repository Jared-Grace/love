import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { html_span_text_code_dark } from "../../../love/public/src/html_span_text_code_dark.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_code_symbol_separated_curried } from "../../../love/public/src/app_code_symbol_separated_curried.mjs";
import { app_code_symbol_curried } from "../../../love/public/src/app_code_symbol_curried.mjs";
import { text_split_empty } from "../../../love/public/src/text_split_empty.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { text_pad_space } from "../../../love/public/src/text_pad_space.mjs";
import { emoji_arrow_right } from "../../../love/public/src/emoji_arrow_right.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_code_container_light_blue_text } from "../../../love/public/src/app_code_container_light_blue_text.mjs";
import { app_code_lesson_same_message } from "../../../love/public/src/app_code_lesson_same_message.mjs";
import { app_code_lesson_identifiers_symbol_first_generic } from "../../../love/public/src/app_code_lesson_identifiers_symbol_first_generic.mjs";
export function app_code_lesson_identifiers_symbol_first_unseparated() {
  let name = "Identifiers (first symbol, unseparated)";
  let id = "identifiers_symbol_first_unseparated";
  let r = app_code_lesson_identifiers_symbol_first_generic(
    name,
    id,
    above,
    html_text_set,
  );
  function above(root) {
    let text = app_code_lesson_same_message("the symbols are not separated");
    app_code_container_light_blue_text(root, text);
    let c = app_code_container_light_blue(root);
    let batch = property_get(r, "batch");
    let b = batch();
    let first = list_first(b);
    let question = property_get(first, "question");
    let split = text_split_empty(question);
    html_div_text(c, "For example, instead of: ");
    let div3 = html_div(c);
    let before = html_span_text_code_dark(div3);
    let lambda$item2 = app_code_symbol_separated_curried(before);
    each(split, lambda$item2);
    html_span_text(div3, " , ");
    let s = emoji_arrow_right();
    let padded = text_pad_space("➡");
    html_div_text(c, "You will now see: ");
    let div4 = html_div(c);
    let after = html_span_text_code_dark(div4);
    let lambda$item = app_code_symbol_curried(after);
    each(split, lambda$item);
    log(app_code_lesson_identifiers_symbol_first_unseparated.name, {
      question,
    });
  }
  return r;
}
