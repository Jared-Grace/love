import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_identifier_unique_ast } from "../../../love/public/src/js_identifier_unique_ast.mjs";
import { js_assign_object_property_get } from "../../../love/public/src/js_assign_object_property_get.mjs";
import { js_call_object_property_get } from "../../../love/public/src/js_call_object_property_get.mjs";
import { each_reverse } from "../../../love/public/src/each_reverse.mjs";
import { list_size_1_assert } from "../../../love/public/src/list_size_1_assert.mjs";
import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
export async function js_dollar_g({
  remaining,
  node,
  stack1,
  stack2,
  ast,
  afters,
}) {
  let r = list_first_remaining(remaining);
  let property_names = property_get(r, "remaining");
  let object_name = property_get(r, "first");
  async function lambda2(property_name) {
    if (js_node_type_is(stack1, "ExpressionStatement")) {
      let unique = js_identifier_unique_ast(ast, property_name);
      let assign = js_assign_object_property_get(
        property_name,
        object_name,
        stack2,
        stack1,
        unique,
      );
      function lambda() {
        object_replace(stack1, assign);
      }
      list_add(afters, lambda);
    } else {
      let parsed = js_call_object_property_get(property_name, object_name);
      list_size_1_assert(remaining);
      function lambda() {
        object_replace(node, parsed);
      }
      list_add(afters, lambda);
    }
  }
  each_reverse(property_names, lambda2);
  if (js_node_type_is(stack1, "ExpressionStatement")) {
    list_remove(stack2, stack1);
  }
}
