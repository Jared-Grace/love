import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_returns_own } from "./js_function_returns_own.mjs";
import { js_return_object_expression_try } from "./js_return_object_expression_try.mjs";
import { not } from "./not.mjs";
import { js_object_expression_key_names } from "./js_object_expression_key_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { js_null } from "./js_null.mjs";
import { js_property_key_value } from "./js_property_key_value.mjs";
export function js_ast_return_key_shapes_agree_function_visit(visited) {
  arguments_assert(arguments, 1);
  let node = property_get(visited, "node");
  let returns = js_function_returns_own(node);
  let records = [];
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
  let count = list_size(records);
  let several = greater_than(count, 1);
  if (not(several)) {
    return;
  }
  for (let record of records) {
    let object_node = property_get(record, "object_node");
    let names = property_get(record, "names");
    let properties = property_get(object_node, "properties");
    for (let name of wanted) {
      let held = list_includes(names, name);
      if (held) {
        continue;
      }
      let key = js_identifier_expression(name);
      let value = js_null();
      let property = js_property_key_value(key, value);
      list_add(properties, property);
    }
  }
}
