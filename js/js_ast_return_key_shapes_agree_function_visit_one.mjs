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
  "Every distinct record one function hands back, and the union of the names those records are keyed by. A record met twice is counted once, because the same node reached down two paths is one record and not two disagreeing ones. The union is what the caller compares each record against: a name in the union missing from one record is the whole shape of the fault being looked for, which is a function whose answer carries a different set of names depending on which way out it took.";
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
