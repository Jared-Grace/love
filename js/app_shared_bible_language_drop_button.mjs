import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_bible_language_drop_reload } from "./app_shared_bible_language_drop_reload.mjs";
import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { html_style_margin_x } from "./html_style_margin_x.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_bible_language_drop_button(parent, code) {
  "The way past a language code nobody can make sense of: take it out of the link and read in the languages that are left.";
  "It stands beside the offered corrections rather than only appearing when there are none, because a reader may recognise that none of the guesses is theirs, and the page should not hold them there for it.";
  let text = text_combine_multiple(['Leave "', code, '" out']);
  function lambda() {
    app_shared_bible_language_drop_reload(code);
  }
  let component = app_shared_button(parent, text, lambda);
  let gap = app_shared_spaced_tiny_gap();
  html_style_margin_x(component, gap);
  return component;
}
