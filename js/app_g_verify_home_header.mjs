import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_verify_home_chapter_grid } from "./app_g_verify_home_chapter_grid.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_shared_font_serif } from "./app_shared_font_serif.mjs";
import { html_font_set } from "./html_font_set.mjs";
import { app_g_verify_title_font_size } from "./app_g_verify_title_font_size.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_bold_semi } from "./html_bold_semi.mjs";
import { html_margin_em } from "./html_margin_em.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_g_verify_hint_font_size } from "./app_g_verify_hint_font_size.mjs";
export function app_g_verify_home_header(wrap, chapter_codes, chapter_code) {
  "Everything above the passage on the verify screen: the band of chapter buttons, the line naming which chapter is open, and the sentence telling a reviewer what hovering a line or a word will show them.";
  arguments_assert(arguments, 3);
  app_g_verify_home_chapter_grid(wrap, chapter_codes, chapter_code);
  let title = html_p_text(wrap, "Sermon coverage &mdash; " + chapter_code);
  let value = app_shared_font_serif();
  html_font_set(title, value);
  let value7 = app_g_verify_title_font_size();
  html_style_font_size(title, value7);
  html_bold_semi(title);
  html_margin_em(title, "0");
  let hint = html_p_text(
    wrap,
    "Pick a passage, then hover a line to light up the words it draws from; hover a word to see the lines that carry it. Underlined words are used by no line.",
  );
  app_shared_text_deemphasized(hint);
  let value8 = app_g_verify_hint_font_size();
  html_style_font_size(hint, value8);
  html_margin_em(hint, "0");
}
