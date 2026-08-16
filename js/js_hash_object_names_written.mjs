import { js_identifier_name_add } from "./js_identifier_name_add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_in_list } from "./property_in_list.mjs";
import { not } from "./not.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
export function js_hash_object_names_written(v, handed, names) {
  arguments_assert(arguments, 3);
  let node = property_get(v, "node");
  let id = property_get_or_null(node, "id");
  if (null_is(id)) {
    return;
  }
  let hands = property_in_list(id, "name", handed);
  if (not(hands)) {
    return;
  }
  let params = property_get(node, "params");
  if (list_empty_is(params)) {
    return;
  }
  let param = list_first(params);
  js_identifier_name_add(param, names);
}
