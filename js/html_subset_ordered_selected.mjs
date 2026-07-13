import { list_size } from "./list_size.mjs";
import { html_subset_ordered_row } from "./html_subset_ordered_row.mjs";
export function html_subset_ordered_selected(
  parent,
  chosen,
  name_property,
  changed,
) {
  let size = list_size(chosen);
  for (let i = 0; i < size; i++) {
    html_subset_ordered_row(parent, chosen, i, name_property, changed);
  }
}
