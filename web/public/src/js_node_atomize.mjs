import { js_call_function_if } from "./js_call_function_if.mjs";
import { js_block_insert } from "./js_block_insert.mjs";
import { assert_message } from "./assert_message.mjs";
import { equal_by } from "./equal_by.mjs";
import { js_declare } from "./js_declare.mjs";
import { function_exists } from "./function_exists.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { object_copy } from "./object_copy.mjs";
import { js_identifier_unique } from "./js_identifier_unique.mjs";
import { js_return_name } from "./js_return_name.mjs";
import { function_parse } from "./function_parse.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { list_is } from "./list_is.mjs";
import { list_get } from "./list_get.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_size } from "./list_size.mjs";
export async function js_node_atomize(existing, v) {
  let variable_name = "v";
  let { node } = v;
  let { stack } = v;
  if (js_node_type_is(node, "CallExpression")) {
    await js_call_function_if(node, lambda);
    async function lambda(name) {
      let { ast: ast_callee } = await function_parse(name);
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
      let { callee } = stack2;
      if (js_node_type_is(callee, "Identifier")) {
        let { name } = callee;
        const { exists } = await function_exists(name);
        if (exists) {
          let { declaration } = await function_parse_declaration(name);
          let { params } = declaration;
          let index = list_index_of(stack1, node);
          let param = list_get(params, index);
          let b = equal_by(stack1, params, list_size);
          assert_message(b, "param counts must match");
          variable_name = object_property_get(param, "name");
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
