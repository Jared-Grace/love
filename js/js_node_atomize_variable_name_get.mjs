import { property_path_get_2 } from "./property_path_get_2.mjs";
import { not_equal } from "./not_equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_size } from "./list_size.mjs";
import { equal_by } from "./equal_by.mjs";
import { list_get } from "./list_get.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { function_parse_strict_declaration } from "./function_parse_strict_declaration.mjs";
import { function_exists } from "./function_exists.mjs";
import { list_is } from "./list_is.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { js_return_name } from "./js_return_name.mjs";
import { property_get } from "./property_get.mjs";
import { function_parse_unaliased } from "./function_parse_unaliased.mjs";
import { js_call_function_if } from "./js_call_function_if.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { text_combine } from "./text_combine.mjs";
export async function js_node_atomize_variable_name_get(
  node,
  variable_name,
  stack,
  offset,
) {
  "use return from called fn";
  if (js_node_type_is(node, "CallExpression")) {
    await js_call_function_if(node, lambda);
    async function lambda(name) {
      let v = await function_parse_unaliased(name);
      let ast_callee = property_get(v, "ast");
      let return_name = js_return_name(ast_callee);
      if (not_equal(return_name, null)) {
        variable_name = return_name;
      }
    }
  }
  ("use param name of containing fn");
  let index_from_end = text_combine(2, offset);
  let stack_ = list_get_end(stack, index_from_end);
  if (js_node_type_is(stack_, "CallExpression")) {
    let index_from_end2 = text_combine(1, offset);
    let stack_1 = list_get_end(stack, index_from_end2);
    if (list_is(stack_1)) {
      let callee = property_get(stack_, "callee");
      if (js_node_type_is(callee, "Identifier")) {
        let name = property_get(callee, "name");
        let v4 = await function_exists(name);
        let exists = property_get(v4, "exists");
        if (exists) {
          let r = await function_parse_strict_declaration(name);
          let params = property_path_get_2(r, "declaration", "params");
          let child = list_get_end(stack, offset);
          let index = list_index_of(stack_1, child);
          let param = list_get(params, index);
          let b = equal_by(stack_1, params, list_size);
          assert_json(b, {
            name,
            message: "param counts must match",
          });
          variable_name = property_get(param, "name");
        }
      }
    }
  }
  return variable_name;
}
