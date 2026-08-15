import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { hash_object_read_name } from "./hash_object_read_name.mjs";
import { property_equals } from "./property_equals.mjs";
import { list_add } from "./list_add.mjs";
export function js_hash_object_names_declared(v, names) {
  arguments_assert(arguments, 2);
  let node = property_get(v, "node");
  let init = property_get_or_null(node, "init");
  if (null_is(init)) {
    return;
  }
  let call = js_node_type_is(init, "CallExpression");
  if (not(call)) {
    return;
  }
  let callee = property_get(init, "callee");
  let plain = js_node_type_is(callee, "Identifier");
  if (not(plain)) {
    return;
  }
  let property_value = hash_object_read_name();
  let reads = property_equals(callee, "name", property_value);
  if (not(reads)) {
    return;
  }
  let id = property_get(node, "id");
  let simple = js_node_type_is(id, "Identifier");
  if (not(simple)) {
    return;
  }
  let held = property_get(id, "name");
  list_add(names, held);
}
