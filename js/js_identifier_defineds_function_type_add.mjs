import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
export function js_identifier_defineds_function_type_add(item, f_type, la) {
  arguments_assert(arguments, 3);
  if (js_node_type_is(item, f_type)) {
    let id = property_get(item, "id");
    let ii = js_identifier_is(id);
    if (ii) {
      let value = property_get(id, "name");
      la([value]);
    }
  }
}
