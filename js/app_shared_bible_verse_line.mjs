import { bible_verse_words_none_token_is } from "./bible_verse_words_none_token_is.mjs";
import { app_shared_bible_verse_words_none_text } from "./app_shared_bible_verse_words_none_text.mjs";
import { html_div } from "./html_div.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_font_color_set_or_remove } from "./html_font_color_set_or_remove.mjs";
import { html_text_direction_set } from "./html_text_direction_set.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { html_span } from "./html_span.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_shared_bible_on_click_google_define } from "./app_shared_bible_on_click_google_define.mjs";
export function app_shared_bible_verse_line(parent, name, text, color) {
  "a verse the translation printed no words for arrives here carrying the token that says so, and the token is not words: the sentence that says so takes its place before anything measures or draws it, the reading direction included, which would otherwise be worked out from a mark belonging to no language at all";
  let words_none = bible_verse_words_none_token_is(text);
  let shown = words_none ? app_shared_bible_verse_words_none_text() : text;
  let line = html_div(parent);
  ("a null colour means read in the page's default text colour, so leave the property alone rather than writing one in");
  let colored = null_not_is(color);
  html_font_color_set_or_remove(colored, line, color);
  ("every line says its own direction out loud, both ways round, so the label sits at that language's reading start and its words run that language's natural way");
  html_text_direction_set(line, shown);
  let has_name = text_empty_not_is(name);
  if (has_name) {
    ("color the language name with the language color so it matches its verse text");
    let text2 = text_combine(name, ": ");
    let name_span = html_span_text(line, text2);
    ("deemphasize the label by fading it, keeping the language hue rather than graying it out");
    html_style_opacity(name_span, "0.6");
  }
  ("hold the verse words in their own isolated run so a right-to-left script like Urdu or Arabic reads in its own direction, detected from the text itself, without the Latin label flipping it");
  let text_holder = html_span(line);
  html_attribute_set(text_holder, "dir", "auto");
  if (words_none) {
    ("a sentence about the verse is not the verse, so it steps back into the same grey every note on these pages steps back into - and it is left untappable on purpose, because there is no word of scripture in it for a dictionary to be asked about");
    html_span_text(text_holder, shown);
    app_shared_text_deemphasized(text_holder);
    return line;
  }
  app_shared_bible_on_click_google_define(text_holder, shown);
  return line;
}
