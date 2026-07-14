import { list_size } from "./list_size.mjs";
import { html_div } from "./html_div.mjs";
import { html_width_full } from "./html_width_full.mjs";
import { html_subset_ordered_row } from "./html_subset_ordered_row.mjs";
export function html_subset_ordered_selected(
  parent,
  chosen,
  name_property,
  changed,
) {
  ("full-width list so each row's center is the card's center; the arrows sit just left of that line and the names just right, so name length never moves the arrows");
  let container = html_div(parent);
  html_width_full(container);
  let size = list_size(chosen);
  for (let i = 0; i < size; i++) {
    html_subset_ordered_row(container, chosen, i, name_property, changed);
  }
}
