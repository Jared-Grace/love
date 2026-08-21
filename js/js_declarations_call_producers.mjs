import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { js_identifier_name } from "./js_identifier_name.mjs";
import { list_add } from "./list_add.mjs";
export function js_declarations_call_producers(decls) {
  arguments_assert(arguments, 1);
  let producers = [];
  for (let decl of decls) {
    let name = property_get(decl, "name");
    let init = property_get(decl, "init");
    let value = init;
    let waited_is = js_node_type_is(init, "AwaitExpression");
    if (waited_is) {
      value = property_get(init, "argument");
    }
    let called_is = js_node_type_is(value, "CallExpression");
    if (not(called_is)) {
      continue;
    }
    let callee = property_get(value, "callee");
    let named_is = js_identifier_is(callee);
    if (not(named_is)) {
      continue;
    }
    let producer = js_identifier_name(callee);
    list_add(producers, {
      name,
      producer,
    });
  }
  return producers;
}
