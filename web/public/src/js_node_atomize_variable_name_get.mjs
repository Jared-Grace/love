import { assert_json } from "../../../love/public/src/assert_json.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { equal_by } from "../../../love/public/src/equal_by.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { function_parse_strict_declaration } from "../../../love/public/src/function_parse_strict_declaration.mjs";
import { function_exists_strict } from "../../../love/public/src/function_exists_strict.mjs";
import { list_is } from "../../../love/public/src/list_is.mjs";
import { list_get_end } from "../../../love/public/src/list_get_end.mjs";
import { js_return_name } from "../../../love/public/src/js_return_name.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_parse_unaliased } from "../../../love/public/src/function_parse_unaliased.mjs";
import { js_call_function_if } from "../../../love/public/src/js_call_function_if.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
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
  let stack2 = list_get_end(stack, 2 + offset);
  if (js_node_type_is(stack2, "CallExpression")) {
    let stack1 = list_get_end(stack, 1 + offset);
    if (list_is(stack1)) {
      let callee = property_get(stack2, "callee");
      if (js_node_type_is(callee, "Identifier")) {
        let name = property_get(callee, "name");
        const v4 = await function_exists_strict(name);
        let exists = property_get(v4, "exists");
        if (exists) {
          let r = await function_parse_strict_declaration(name);
          let declaration = property_get(r, "declaration");
          let params = property_get(declaration, "params");
          let child = list_get_end(stack, offset);
          let index = list_index_of(stack1, child);
          let param = list_get(params, index);
          let b = equal_by(stack1, params, list_size);
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
