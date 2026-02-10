import { property_get } from "../../../love/public/src/property_get.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
export function js_declaration_asyncify(declaration, other) {
  let value = property_get(other, "async");
  property_set(declaration, "async", value);
}
