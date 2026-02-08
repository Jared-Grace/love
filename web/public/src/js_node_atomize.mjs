import { function_exists_strict } from "../../../love/public/src/function_exists_strict.mjs";
import { function_parse_strict_declaration } from "../../../love/public/src/function_parse_strict_declaration.mjs";
import { js_call_function_if } from "../../../love/public/src/js_call_function_if.mjs";
import { js_block_insert } from "../../../love/public/src/js_block_insert.mjs";
import { equal_by } from "../../../love/public/src/equal_by.mjs";
import { js_declare } from "../../../love/public/src/js_declare.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { object_copy } from "../../../love/public/src/object_copy.mjs";
import { js_identifier_unique } from "../../../love/public/src/js_identifier_unique.mjs";
import { js_return_name } from "../../../love/public/src/js_return_name.mjs";
import { function_parse_unaliased } from "../../../love/public/src/function_parse_unaliased.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
import { list_get_end } from "../../../love/public/src/list_get_end.mjs";
import { list_is } from "../../../love/public/src/list_is.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { assert_json } from "../../../love/public/src/assert_json.mjs";
export async function js_node_atomize(existing, v, variable_name) {
  let node = object_property_get(v, "node");
  let stack = object_property_get(v, "stack");
  if (js_node_type_is(node, "CallExpression")) {
    await js_call_function_if(node, lambda);
    async function lambda(name) {
      let v3 = await function_parse_unaliased(name);
      let ast_callee = object_property_get(v3, "ast");
      let return_name = js_return_name(ast_callee);
      if (return_name !== null) {
        variable_name = return_name;
      }
    }
  }
  let stack2 = list_get_end(stack, 2);
  if (js_node_type_is(stack2, "CallExpression")) {
    let stack1 = list_get_end(stack, 1);
    if (list_is(stack1)) {
      let callee = object_property_get(stack2, "callee");
      if (js_node_type_is(callee, "Identifier")) {
        let name = object_property_get(callee, "name");
        const v4 = await function_exists_strict(name);
        let exists = object_property_get(v4, "exists");
        if (exists) {
          let r = await function_parse_strict_declaration(name);
          let declaration = object_property_get(r, "declaration");
          let params = object_property_get(declaration, "params");
          let index = list_index_of(stack1, node);
          let param = list_get(params, index);
          let b = equal_by(stack1, params, list_size);
          assert_json(b, {
            name,
            message: "param counts must match",
          });
          let variable_name = object_property_get(param, "name");
        }
      }
    }
  }
  let unique = js_identifier_unique(existing, variable_name);
  let copy = object_copy(node);
  let assign = js_declare(unique, copy);
  js_block_insert(stack, assign);
  let v2 = js_parse_expression(unique);
  object_replace(node, v2);
}
