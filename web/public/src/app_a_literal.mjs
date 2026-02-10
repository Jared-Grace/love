import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
import { text_is } from "../../../love/public/src/text_is.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_a_identifier_generic } from "../../../love/public/src/app_a_identifier_generic.mjs";
export function app_a_literal(a, component, node, on_change, raw) {
  let lines_multiple = null;
  let type_is = js_node_type_is(node, "TemplateLiteral");
  if (type_is) {
    lines_multiple = true;
  } else {
    let value = property_get(node, "value");
    lines_multiple = text_is(value);
  }
  app_a_identifier_generic(
    a,
    component,
    raw,
    {
      shortcut: "e",
      text: "Edit",
      on_change,
    },
    lines_multiple,
    on_change,
  );
}
