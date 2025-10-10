import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
export function js_declaration_asyncify(declaration, other) {
  let value = object_property_get(other, "async");
  object_property_set(declaration, "async", value);
}
