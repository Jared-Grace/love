import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { song_image_couplets } from "./song_image_couplets.mjs";
import { song_image_couplet_mark } from "./song_image_couplet_mark.mjs";
import { html_button } from "./html_button.mjs";
import { equal } from "./equal.mjs";
import { song_image_couplet_get } from "./song_image_couplet_get.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function song_image_nav_column_grid_words(column, state, on_change) {
  arguments_assert(arguments, 3);
  let grid = html_div(column);
  html_style_set(grid, "display", "grid");
  html_style_set(grid, "grid-template-columns", "repeat(9, 1fr)");
  html_style_set(grid, "gap", "3px");
  for (let couplet of song_image_couplets()) {
    let label = String(couplet.n) + song_image_couplet_mark(state, couplet.n);
    function lambda() {
      state.couplet = couplet.n;
      on_change();
    }
    let button = html_button(grid, label, lambda);
    html_style_set(button, "padding", "4px 0");
    html_style_set(button, "font-size", "11px");
    html_style_set(button, "cursor", "pointer");
    html_style_set(button, "border-radius", "4px");
    html_style_set(button, "border", "1px solid #333333");
    let open = equal(couplet.n, state.couplet);
    html_style_set(button, "background", open ? "#ffe994" : "#1a1a1a");
    html_style_set(button, "color", open ? "#000000" : "#bebebe");
  }
  let current = song_image_couplet_get(state.couplet);
  let words = html_div(column);
  html_style_set(words, "margin-top", "18px");
  html_style_set(words, "font-size", "22px");
  html_style_set(words, "line-height", "1.35");
  html_style_set(words, "color", "#ffe994");
  html_text_set(words, current.first + "<br>" + current.second);
  return current;
}
