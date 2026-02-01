import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_a_identifier_generic } from "../../../love/public/src/app_a_identifier_generic.mjs";
export function app_a_literal(a, component, node, on_change, raw) {
  marker("1");
  log({
    node,
  });
  let value = object_property_get(node, "value");
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
    on_change,
  );
}
