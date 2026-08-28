import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { js_null } from "./js_null.mjs";
import { js_property_key_value } from "./js_property_key_value.mjs";
import { list_add } from "./list_add.mjs";
export function js_ast_return_key_shapes_agree_function_visit_record(
  records,
  wanted,
) {
  arguments_assert(arguments, 2);
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
