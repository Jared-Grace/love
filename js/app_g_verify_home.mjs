import { html_clear_context } from "./html_clear_context.mjs";
import { html_div } from "./html_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_margin_em } from "./html_margin_em.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_first } from "./list_first.mjs";
import { g_sermon_write_download } from "./g_sermon_write_download.mjs";
import { app_replace_button_list_centered } from "./app_replace_button_list_centered.mjs";
import { app_g_verify_view } from "./app_g_verify_view.mjs";
import { app_shared_text_deemphasized_color } from "./app_shared_text_deemphasized_color.mjs";
import { app_shared_font_serif } from "./app_shared_font_serif.mjs";
export async function app_g_verify_home(context) {
  let root = html_clear_context(context);
  let chapter_code = "1JN01";
  let downloaded = await g_sermon_write_download(chapter_code);
  let passages = property_get(downloaded, "passages");

  let wrap = html_div(root);
  html_style_set(wrap, "max-width", "48em");
  html_style_set(wrap, "margin", "0 auto");
  html_style_padding_x(wrap, "1.2em");
  html_style_padding_y(wrap, "2em");

  let title = html_p_text(wrap, "Sermon coverage &mdash; " + chapter_code);
  html_style_set(title, "font-family", app_shared_font_serif());
  html_style_set(title, "font-size", "1.5em");
  html_style_set(title, "font-weight", "600");
  html_margin_em(title, "0");

  let hint = html_p_text(
    wrap,
    "Pick a passage, then hover a line to light up the words it draws from; hover a word to see the lines that carry it. Underlined words are used by no line.",
  );
  html_font_color_set(hint, app_shared_text_deemphasized_color());
  html_style_set(hint, "font-size", "0.9em");
  html_margin_em(hint, "0");

  function passage_label(passage) {
    let verse_numbers = property_get(passage, "verse_numbers");
    return "v" + list_join_comma(verse_numbers);
  }
  function open_passage(passage) {
    let english = property_get(passage, "english");
    let lines = property_get(passage, "lines");
    app_g_verify_view(view, english, lines);
  }
  app_replace_button_list_centered(wrap, passages, passage_label, open_passage);
  let view = html_div(wrap);
  open_passage(list_first(passages));
}
