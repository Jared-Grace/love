import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_bold_mild } from "./html_bold_mild.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { app_shared_color_red } from "./app_shared_color_red.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_shared_gloss_bible_word_span(parent, word) {
  arguments_assert(arguments, 2);
  ("Draw one original word the way a word row draws it: mildly bold, red, and held in its own run of direction.");
  ("★ ONE PLACE FOR THE LOOK, asked for by the human: the word as the verse spells it and its root word on the BibleHub button are drawn alike, so a reader sees at once that the two are the same word in two forms.");
  ("each piece is held in its own run, detected from itself, so an english word inside an urdu row reads forwards and does not turn the row around it");
  let span = html_span_text(parent, word);
  html_bold_mild(span);
  html_attribute_set(span, "dir", "auto");
  let red = app_shared_color_red();
  html_font_color_set(span, red);
  return span;
}
