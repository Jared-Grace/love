import { html_style_left_centered } from "../../../love/public/src/html_style_left_centered.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { app_replace_button_wide } from "../../../love/public/src/app_replace_button_wide.mjs";
import { add_1 } from "../../../love/public/src/add_1.mjs";
import { text_get } from "../../../love/public/src/text_get.mjs";
export function app_replace_buttons_numbered(
  root,
  rule_sets,
  text_get,
  on_click,
) {
  function each_item(item, index) {
    let name = text_get(item);
    let a = add_1(index) + ".";
    let b = app_replace_button_wide(root, "", lambda);
    html_style_left_centered(b, a, name);
    function lambda() {
      on_click(index);
    }
  }
  each_index(rule_sets, each_item);
}
