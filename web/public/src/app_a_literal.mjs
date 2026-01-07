import { marker } from "../../../love/public/src/marker.mjs";
import { app_a_identifier_generic } from "../../../love/public/src/app_a_identifier_generic.mjs";
export function app_a_literal(a, component, node, on_change) {
  marker("1");
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
}
