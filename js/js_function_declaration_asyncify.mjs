import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function js_function_declaration_asyncify(declaration, other) {
  let value = property_get(other, "async");
  property_set(declaration, "async", value);
}
