import { object_replace } from "./object_replace.mjs";
import { integer_to } from "./integer_to.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_parse } from "./js_parse.mjs";
import { list_single } from "./list_single.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { assert } from "./assert.mjs";
import { marker_next_get } from "./marker_next_get.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_get } from "./list_get.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { log } from "./log.mjs";
import { list_insert } from "./list_insert.mjs";
import { list_remove } from "./list_remove.mjs";
import { function_transform_marker } from "./function_transform_marker.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function marker_call_replace(arg_index, code_replacement) {
  arg_index = integer_to(arg_index);
  let f_name = await data_function_current_get();
  return list_adder_async(async (la) => {
    await function_transform_marker(f_name, lambda);
    function lambda(a) {
      let next = marker_next_get(a);
      if (!js_node_type_is(next, "ExpressionStatement")) {
        return;
      }
      let { expression } = next;
      if (js_node_type_is(expression, "AwaitExpression")) {
        expression = object_property_get(expression, "argument");
      }
      if (!js_node_type_is(expression, "CallExpression")) {
        return;
      }
      let { arguments: arguments2 } = expression;
      let arg_index_at = list_get(arguments2, arg_index);
      let replacement = js_parse_expression(code_replacement);
      object_replace(arg_index_at, replacement);
      la(js_unparse(expression));
      return;
      let { declarations } = next;
      let declaration = list_single(declarations);
      let init = js_parse_expression(init_code);
      object_property_set(declaration, "init", init);
    }
  });
}
