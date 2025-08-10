import { each } from "./each.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_identifiers } from "./js_identifiers.mjs";
import { list_filter } from "./list_filter.mjs";
import { marker } from "./marker.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function function_identifier_replace(identifier_name) {
  await function_transform(f_name, (ast) => {
    let identifiers = js_identifiers(ast);
    let filtered = list_filter(
      identifiers,
      (i) => object_property_get(i, "name") === identifier_name,
    );
    marker();
    each(identifiers, (i) => object_replace(i));
  });
}
