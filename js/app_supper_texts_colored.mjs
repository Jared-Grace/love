import { each_index } from "./each_index.mjs";
import { list_size } from "./list_size.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_supper_verse_color } from "./app_supper_verse_color.mjs";
export function app_supper_texts_colored(parent, texts) {
  let count = list_size(texts);
  function lambda(text, index) {
    let p = html_p_text(parent, text);
    let color = app_supper_verse_color(index, count);
    html_font_color_set(p, color);
  }
  each_index(texts, lambda);
}
