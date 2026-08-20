import { app_shared_color_gray_dark } from "./app_shared_color_gray_dark.mjs";
import { html_display_grid } from "./html_display_grid.mjs";
import { html_style_gap } from "./html_style_gap.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_cursor_pointer } from "./html_cursor_pointer.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { html_style_background } from "./html_style_background.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_style_line_height } from "./html_style_line_height.mjs";
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
  html_display_grid(grid);
  html_style_set(grid, "grid-template-columns", "repeat(9, 1fr)");
  html_style_gap(grid, "3px");
  for (let couplet of song_image_couplets()) {
    let label = String(couplet.n) + song_image_couplet_mark(state, couplet.n);
    function lambda() {
      state.couplet = couplet.n;
      on_change();
    }
    let button = html_button(grid, label, lambda);
    html_style_padding(button, "4px 0");
    html_style_font_size(button, "11px");
    html_cursor_pointer(button);
    html_border_radius(button, "4px");
    html_style_set(
      button,
      "border",
      "1px solid " + app_shared_color_gray_dark(),
    );
    let open = equal(couplet.n, state.couplet);
    html_style_background(button, open ? "#ffe994" : "#1a1a1a");
    html_style_set(button, "color", open ? "#000000" : "#bebebe");
  }
  let current = song_image_couplet_get(state.couplet);
  let words = html_div(column);
  html_style_margin_top(words, "18px");
  html_style_font_size(words, "22px");
  html_style_line_height(words, "1.35");
  html_style_set(words, "color", "#ffe994");
  html_text_set(words, current.first + "<br>" + current.second);
  return current;
}
