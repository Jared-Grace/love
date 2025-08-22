import { object_property_get } from "./object_property_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
export function js_declaration_asyncify(declaration, other) {
  object_property_set(
    declaration,
    "async",
    object_property_get(other, "async"),
  );
}
