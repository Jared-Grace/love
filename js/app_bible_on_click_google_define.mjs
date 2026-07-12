import { text_combine } from "./text_combine.mjs";
import { each } from "./each.mjs";
import { html_span_on_click_google_define } from "./html_span_on_click_google_define.mjs";
import { html_span_space } from "./html_span_space.mjs";
import { text_split_space } from "./text_split_space.mjs";
export function app_bible_on_click_google_define(top, text) {
  let split = text_split_space(text);
  function lambda(item) {
    html_span_space(top);
    let search_term = text_combine(item, " (Bible)");
    html_span_on_click_google_define(top, item, search_term);
  }
  each(split, lambda);
}
