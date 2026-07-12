import { html_button_list } from "./html_button_list.mjs";
import { html_div_centered } from "./html_div_centered.mjs";
export function html_button_list_centered(
  root,
  items,
  item_to_button_text,
  on_click,
) {
  let div = html_div_centered(root);
  let mapped = html_button_list(div, items, item_to_button_text, on_click);
  return mapped;
}
