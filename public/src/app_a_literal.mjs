import { not } from "../../../love/public/src/not.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
import { string_is } from "../../../love/public/src/string_is.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_a_identifier_generic } from "../../../love/public/src/app_a_identifier_generic.mjs";
export function app_a_literal(a, component, node, on_change, raw) {
  marker("1");
  let type_is = js_node_type_is(node, "TemplateLiteral");
  if (not(b)) {
  }
  let value = object_property_get(node, "value");
  let si2 = string_is(value);
  app_a_identifier_generic(
    a,
    component,
    raw,
    {
      shortcut: "e",
      text: "Edit",
      on_change,
    },
    si2,
    on_change,
  );
}
