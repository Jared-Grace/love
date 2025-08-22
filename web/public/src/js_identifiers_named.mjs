import { object_property_get } from "./object_property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_identifiers } from "./js_identifiers.mjs";
export function js_identifiers_named(ast, identifier_name) {
  let identifiers = js_identifiers(ast);
  let identifiers_named = list_filter(
    identifiers,
    (i) => object_property_get(i, "name") === identifier_name,
  );
  return identifiers_named;
}
