import { equal } from "../../../love/public/src/equal.mjs";
import { list_first_is } from "../../../love/public/src/list_first_is.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { app_a_function_node_child_parent } from "../../../love/public/src/app_a_function_node_child_parent.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_body(node, parent, a) {
  let body = object_property_get(node, "body");
  let imports = true;
  function lambda(b) {
    const t = "ImportDeclaration";
    let v = list_first_is(list, item);
    if (v) {
      let type = object_property_get(b, "type");
      if (equal(left, right)) {
      }
    }
    if (imports) {
      let ti = js_node_type_is(b, t);
      if (ti) {
        return;
      } else {
        log({
          b2: b,
        });
        imports = false;
      }
    }
    let div = html_div(parent);
    app_a_function_node_child_parent(a, b, div);
  }
  each(body, lambda);
}
