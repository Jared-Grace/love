import { text_punctuation_apostrophe_kept_removed } from "./text_punctuation_apostrophe_kept_removed.mjs";
import { text_combine } from "./text_combine.mjs";
import { each } from "./each.mjs";
import { html_span_on_click_google_define } from "./html_span_on_click_google_define.mjs";
import { html_span_space } from "./html_span_space.mjs";
import { text_split_space } from "./text_split_space.mjs";
export function app_shared_bible_on_click_google_define(top, text) {
  "The word is shown exactly as the verse spells it, punctuation and all, and the search is made on the bare word, so a comma or a full stop the word happened to sit in front of never reaches Google";
  let split = text_split_space(text);
  function lambda(item) {
    html_span_space(top);
    let bare = text_punctuation_apostrophe_kept_removed(item);
    let search_term = text_combine(bare, " (Bible)");
    html_span_on_click_google_define(top, item, search_term);
  }
  each(split, lambda);
}
