import { html_display_grid } from "./html_display_grid.mjs";
import { html_align_items_center } from "./html_align_items_center.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_gap } from "./html_style_gap.mjs";
import { html_style_margin } from "./html_style_margin.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
export function html_buttons_biblehub_verse_grid(parent) {
  ("a centered two-column grid for the multi-verse biblehub link-kinds: left column holds the right-aligned labels, right column holds the verse-number buttons, so the numbers line up across Commentary / Parallel / Interlinear. Each ",
    fn_name("html_buttons_biblehub_verse_group"),
    " call fills one row (a label cell + a buttons cell)");
  let grid = html_div(parent);
  html_display_grid(grid);
  html_style_set(grid, "grid-template-columns", "auto auto");
  html_align_items_center(grid);
  html_style_set(grid, "width", "fit-content");
  let gap = app_shared_spaced_small_gap();
  html_style_gap(grid, gap);
  html_style_margin(grid, "0 auto");
  return grid;
}
