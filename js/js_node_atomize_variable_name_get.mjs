import { assert_json } from "./assert_json.mjs";
import { list_size } from "./list_size.mjs";
import { equal_by } from "./equal_by.mjs";
import { list_get } from "./list_get.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { function_parse_strict_declaration } from "./function_parse_strict_declaration.mjs";
import { function_exists_strict } from "./function_exists_strict.mjs";
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
      let v3 = await function_parse_unaliased(name);
      let ast_callee = property_get(v3, "ast");
      let return_name = js_return_name(ast_callee);
      if (return_name !== null) {
        variable_name = return_name;
      }
    }
  }
  ("use param name of containing fn");
  let stack_2 = list_get_end(stack, text_combine(2, offset));
  if (js_node_type_is(stack_2, "CallExpression")) {
    let stack_1 = list_get_end(stack, text_combine(1, offset));
    if (list_is(stack_1)) {
      let callee = property_get(stack_2, "callee");
      if (js_node_type_is(callee, "Identifier")) {
        let name = property_get(callee, "name");
        let v4 = await function_exists_strict(name);
        let exists = property_get(v4, "exists");
        if (exists) {
          let r = await function_parse_strict_declaration(name);
          let declaration = property_get(r, "declaration");
          let params = property_get(declaration, "params");
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
