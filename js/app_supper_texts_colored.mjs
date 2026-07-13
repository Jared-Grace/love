import { list_size } from "./list_size.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_interleave_halves } from "./list_interleave_halves.mjs";
import { list_get } from "./list_get.mjs";
import { each_index } from "./each_index.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_margin_0 } from "./html_margin_0.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_supper_verse_color } from "./app_supper_verse_color.mjs";
export function app_supper_texts_colored(parent, texts) {
  let count = list_size(texts);
  function color_get(text, index) {
    let color = app_supper_verse_color(index, count);
    return color;
  }
  let colors = list_map_index(texts, color_get);
  let colors_reordered = list_interleave_halves(colors);
  function lambda(text, index) {
    let p = html_p_text(parent, text);
    html_margin_0(p);
    let color = list_get(colors_reordered, index);
    html_font_color_set(p, color);
  }
  each_index(texts, lambda);
}
