import { app_shared_button_list } from "../../love/js/app_shared_button_list.mjs";
import { html_div_centered } from "../../love/js/html_div_centered.mjs";
export function app_shared_button_list_centered(
  root,
  items,
  item_to_button_text,
  on_click,
) {
  let div = html_div_centered(root);
  let mapped = app_shared_button_list(
    div,
    items,
    item_to_button_text,
    on_click,
  );
  return mapped;
}
