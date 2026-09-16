import { hebrew_translit_voice_spelling } from "./hebrew_translit_voice_spelling.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_entry_translit_key } from "./gloss_entry_translit_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { html_span_colon_2 } from "./html_span_colon_2.mjs";
import { app_shared_color_gray } from "./app_shared_color_gray.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_on_click_when } from "./html_on_click_when.mjs";
export function app_shared_gloss_bible_word_translit(e, div, play) {
  "Draw how a word is said, written in English letters, straight after the word itself - and draw nothing at all where the word has no pronunciation stored.";
  "★ IT SITS AGAINST THE WORD RATHER THAN AT THE END OF THE ROW, because it is a way of reading the word and not another fact about it: a reader sounding a word out is looking at the two together, and anything put between them has to be read past.";
  "★ IT ANSWERS THE SAME PRESS AS THE WORD, so a reader who reaches for the pronunciation because they want to know how it sounds gets the sound. Showing the saying and refusing to say it would be the one arrangement nobody wants.";
  "It is always laid out left to right, whatever the row does, because it is written in English letters and a Hebrew row would otherwise gather it into the backwards run around it and show the syllables in reverse.";
  "A store written before pronunciations existed carries none, and the row simply closes up - which is what lets one row serve that store and this one without being told which it is looking at.";
  arguments_assert(arguments, 3);
  let key = gloss_entry_translit_key();
  let translit = property_get_or_null(e, key);
  let absent = null_is(translit);
  if (absent) {
    return;
  }
  let colon = html_span_colon_2(div);
  let gray = app_shared_color_gray();
  html_font_color_set(colon, gray);
  let said = hebrew_translit_voice_spelling(translit);
  let span = html_span_text(div, said);
  html_attribute_set(span, "dir", "ltr");
  html_font_color_set(span, "#0f766eff");
  html_on_click_when(span, play);
}
