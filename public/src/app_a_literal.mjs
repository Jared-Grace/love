import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { app_a_identifier_generic } from "../../../love/public/src/app_a_identifier_generic.mjs";
export function app_a_literal(a, component, raw, node) {
  marker("1");
  let raw2 = object_property_get(v3, "raw");
  app_a_identifier_generic(
    a,
    component,
    raw,
    {
      shortcut: "e",
      text: "Edit",
      on_change,
    },
    true,
  );
  function on_change(value_new) {
    object_property_set(node, "raw", value_new);
  }
}
