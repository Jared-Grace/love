import { html_style_set } from "./html_style_set.mjs";
export function html_align_items_start(component) {
  "hold every child of this row against its top edge, so a child that grows taller than its neighbours lengthens the row downwards and leaves the others where they were";
  html_style_set(component, "align-items", "flex-start");
}
