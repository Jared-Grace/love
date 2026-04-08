import { list_map } from "../../../love/public/src/list_map.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
export function html_button_list(parent, items, item_to_text, on_click) {
  function lambda(item) {
    let text = item_to_text(item);
    function lambda2() {
      on_click(item);
    }
    let component = html_button(parent, text, lambda2);
    return component;
  }
  let mapped = list_map(items, lambda);
  return mapped;
}
