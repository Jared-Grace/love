import { arguments_assert } from "./arguments_assert.mjs";
import { js_return_object_expression_try } from "./js_return_object_expression_try.mjs";
import { not } from "./not.mjs";
import { js_object_expression_key_names } from "./js_object_expression_key_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
export function js_ast_return_key_shapes_agree_function_visit_one(
  returns,
  node,
  records,
) {
  arguments_assert(arguments, 3);
  let objects = [];
  let wanted = [];
  for (let one of returns) {
    let object_node = js_return_object_expression_try(one, node);
    if (not(object_node)) {
      continue;
    }
    let names = js_object_expression_key_names(object_node);
    if (not(names)) {
      continue;
    }
    let seen = list_includes(objects, object_node);
    if (seen) {
      continue;
    }
    list_add(objects, object_node);
    let record = {
      object_node,
      names,
    };
    list_add(records, record);
    for (let name of names) {
      let held = list_includes(wanted, name);
      if (held) {
        continue;
      }
      list_add(wanted, name);
    }
  }
  return wanted;
}
