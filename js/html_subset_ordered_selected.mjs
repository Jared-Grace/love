import { html_div } from "./html_div.mjs";
import { html_width_full } from "./html_width_full.mjs";
import { html_display_grid } from "./html_display_grid.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { html_subset_ordered_row } from "./html_subset_ordered_row.mjs";
export function html_subset_ordered_selected(
  parent,
  chosen,
  name_property,
  changed,
) {
  "full-width list so each row's center is the card's center; the arrows sit just left of that line and the names just right, so name length never moves the arrows";
  let container = html_div(parent);
  html_width_full(container);
  ("ONE GRID HOLDS EVERY ROW, so the crosses stand in one column just after the longest name rather than out at the card's edge. The first column is half the card, so the arrows still end on the card's center and the names still start there, and no name's length moves the arrows. The names' column is as wide as the longest of them, the crosses' column follows it, and whatever is left over sits empty at the end.");
  html_display_grid(container);
  html_style_set(container, "grid-template-columns", "50% auto auto 1fr");
  html_align_items_center(container);
  let size = list_size(chosen);
  for (let i = 0; less_than(i, size); i++) {
    html_subset_ordered_row(container, chosen, i, name_property, changed);
  }
}
