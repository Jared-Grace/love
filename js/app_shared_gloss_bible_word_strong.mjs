import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { gloss_entry_strong_key } from "./gloss_entry_strong_key.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_entry_root_key } from "./gloss_entry_root_key.mjs";
import { html_span_colon_2 } from "./html_span_colon_2.mjs";
import { app_shared_color_gray } from "./app_shared_color_gray.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { biblehub_strong_lettered_url } from "./biblehub_strong_lettered_url.mjs";
import { window_open } from "./window_open.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_shared_gloss_bible_word_strong(e, div) {
  arguments_assert(arguments, 2);
  ("At the end of a word's row, after its explanation: a separator, then a button naming the word's root word and its Strong's number, which opens that root word on BibleHub in a new tab - and nothing at all where the word has no number stored.");
  ("★ ASKED FOR BY THE HUMAN, with the separator coloured like every other one in the row, so the button reads as one more part of the row rather than something stuck on.");
  ("The button's words are the root word and the number themselves rather than a sentence in the reader's language, because both are the same in every language and they are what the reader is choosing between rows by.");
  ("A store written before numbers were copied in carries none, and the row closes up, so one row serves every store.");
  let property = gloss_entry_strong_key();
  let strong = property_get_or_null(e, property);
  if (null_is(strong)) {
    return;
  }
  let property2 = gloss_entry_root_key();
  let root = property_get_or_null(e, property2);
  if (null_is(root)) {
    return;
  }
  let colon = html_span_colon_2(div);
  let gray = app_shared_color_gray();
  html_font_color_set(colon, gray);
  let url = biblehub_strong_lettered_url(strong);
  function open() {
    window_open(url);
  }
  let label = list_join_space([root, strong]);
  let button = app_shared_button(div, label, open);
  return button;
}
