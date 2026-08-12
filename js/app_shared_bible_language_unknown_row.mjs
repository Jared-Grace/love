import { app_shared_bible_language_drop_button } from "./app_shared_bible_language_drop_button.mjs";
import { app_shared_bible_language_suggestion_button } from "./app_shared_bible_language_suggestion_button.mjs";
import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { ebible_language_code_suggestions } from "./ebible_language_code_suggestions.mjs";
import { each } from "./each.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_bible_language_unknown_row(parent, code) {
  "One unrecognised language code, said back to the reader with everything they can do about it.";
  "The code is quoted rather than described, because it is what they can see in their own address bar - a reader matching the page against the link needs the same letters in both places.";
  let row = html_div(parent);
  let gap = app_shared_spaced_tiny_gap();
  html_style_margin_y(row, gap);
  let said = text_combine_multiple(['The link says "', code, '"']);
  html_div_text_bold(row, said);
  let suggestions = ebible_language_code_suggestions(code);
  let none = list_empty_is(suggestions);
  let asked = "Did you mean:";
  if (none) {
    asked = "No language we have is spelled anything like it.";
  }
  app_shared_text_body(row, asked);
  let buttons = html_div(row);
  function draw(suggestion) {
    app_shared_bible_language_suggestion_button(buttons, code, suggestion);
  }
  each(suggestions, draw);
  app_shared_bible_language_drop_button(buttons, code);
  return row;
}
