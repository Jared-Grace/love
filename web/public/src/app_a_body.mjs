import { list_map } from "../../../love/public/src/list_map.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { html_display_none_or_block } from "../../../love/public/src/html_display_none_or_block.mjs";
import { app_a_button_wide } from "../../../love/public/src/app_a_button_wide.mjs";
import { js_node_type_not_is } from "../../../love/public/src/js_node_type_not_is.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { list_first_is } from "../../../love/public/src/list_first_is.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { app_a_function_node_child_parent } from "../../../love/public/src/app_a_function_node_child_parent.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_body(node, parent, a) {
  let body = object_property_get(node, "body");
  let parent_new = parent;
  let imports = false;
  function lambda(b) {
    const t = "ImportDeclaration";
    let v = list_first_is(body, b);
    if (v) {
      let type = object_property_get(b, "type");
      if (equal(type, t)) {
        imports = true;
        parent_new = html_div(parent);
        let parent_new_saved = parent_new;
        let hidden = true;
        let buttons = null;
        function imports_refresh() {
          function lambda3(item2) {
            let text = null;
            if (hidden) {
              text = "Show";
            } else {
              text = "Hide";
            }
            text += " imports";
          }
          each(buttons, lambda3);
          html_display_none_or_block(hidden, parent_new_saved);
          hidden = not(hidden);
        }
        function lambda2(item) {
          app_a_button_wide(item, "", imports_refresh);
        }
        buttons = list_map([parent, parent_new_saved], lambda2);
        imports_refresh();
      }
    }
    if (imports) {
      let ti = js_node_type_not_is(b, t);
      if (ti) {
        imports = false;
        parent_new = parent;
      }
    }
    let div = html_div(parent_new);
    app_a_function_node_child_parent(a, b, div);
  }
  each(body, lambda);
}
