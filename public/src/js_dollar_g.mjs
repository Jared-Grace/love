import { each_reverse } from "../../../love/public/src/each_reverse.mjs";
import { list_size_1_assert } from "../../../love/public/src/list_size_1_assert.mjs";
import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_declare } from "../../../love/public/src/js_declare.mjs";
import { js_identifier_unique_ast } from "../../../love/public/src/js_identifier_unique_ast.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_code_call_args } from "../../../love/public/src/js_code_call_args.mjs";
import { js_code_string } from "../../../love/public/src/js_code_string.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { list_index_of_next_outside } from "../../../love/public/src/list_index_of_next_outside.mjs";
export async function js_dollar_g({
  remaining,
  node,
  stack1,
  stack2,
  ast,
  afters,
}) {
  let { first: object_name, remaining: property_names } =
    list_first_remaining(remaining);
  function lambda2(property_name) {
    let code_string = js_code_string(property_name);
    let code = js_code_call_args(object_property_get.name, [
      object_name,
      code_string,
    ]);
    let parsed = js_parse_expression(code);
    if (js_node_type_is(stack1, "ExpressionStatement")) {
      let unique = js_identifier_unique_ast(ast, property_name);
      let assign = js_declare(unique, parsed);
      let index = list_index_of_next_outside(stack2, stack1);
      list_insert(stack2, index, assign);
      function lambda() {
        object_replace(stack1, assign);
      }
      list_add(afters, lambda);
    } else {
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
