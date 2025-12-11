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
    log({});
    if (imports) {
      let type = object_property_get(b, "type");
      let ti = js_node_type_is(b, "ExportNamedDeclaration");
      if (ti) {
        return;
      } else {
        imports = false;
      }
    }
    let div = html_div(parent);
    app_a_function_node_child_parent(a, b, div);
  }
  each(body, lambda);
}
