import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button_inline } from "./app_shared_button_inline.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_content_edge_gap } from "./app_shared_content_edge_gap.mjs";
import { app_shared_style_control_font_size } from "./app_shared_style_control_font_size.mjs";
import { list_add } from "./list_add.mjs";
import { app_g_view_render_study_style_word } from "./app_g_view_render_study_style_word.mjs";
export function app_g_view_render_study_fresh_word_button(
  words_div,
  word,
  i,
  lambda,
  word_bs,
  current,
) {
  "One word of the passage put on the screen as something a person can press, kept on the list of words already put there, and dressed for where the reading has got to.";
  "THE PLACE THE READING HAS GOT TO IS HANDED IN RATHER THAN LOOKED UP, so this is told once, at the moment the word is drawn, and never reads a number that has moved on since.";
  "THE LIST OF WORDS IS ADDED TO HERE ON PURPOSE, because the dressing of a word asks the list for its neighbours, so a word has to be on the list before it can be dressed.";
  arguments_assert(arguments, 6);
  let b = app_shared_button_inline(words_div, word, lambda);
  html_style_assign(b, {
    "padding-left": app_shared_content_edge_gap(),
    "padding-right": app_shared_content_edge_gap(),
    "font-size": app_shared_style_control_font_size(),
  });
  list_add(word_bs, b);
  app_g_view_render_study_style_word(i, word_bs, current);
}
