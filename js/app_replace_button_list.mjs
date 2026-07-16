import { list_map } from "../../love/js/list_map.mjs";
import { app_shared_button } from "../../love/js/app_shared_button.mjs";
export function app_replace_button_list(parent, items, item_to_text, on_click) {
  function lambda(item) {
    let text = item_to_text(item);
    function lambda2() {
      on_click(item);
    }
    let component = app_shared_button(parent, text, lambda2);
    return component;
  }
  let mapped = list_map(items, lambda);
  return mapped;
}
