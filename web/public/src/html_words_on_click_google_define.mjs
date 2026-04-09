import { error } from "../../../love/public/src/error.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_span_on_click_google_define } from "../../../love/public/src/html_span_on_click_google_define.mjs";
import { html_span_space } from "../../../love/public/src/html_span_space.mjs";
import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
export function html_words_on_click_google_define(top, text) {
  let split = text_split_space(text);
  function lambda2(item) {
    html_span_space(top);
    let search_term = error();
    html_span_on_click_google_define(top, item, search_term);
  }
  each(split, lambda2);
}
