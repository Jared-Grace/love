import { not } from "./not.mjs";
import { object_property_equals } from "./object_property_equals.mjs";
import { js_outside_move } from "./js_outside_move.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_code_call_args_await_maybe } from "./js_code_call_args_await_maybe.mjs";
import { list_remove_multiple } from "./list_remove_multiple.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_difference } from "./list_difference.mjs";
import { js_identifier_defineds } from "./js_identifier_defineds.mjs";
import { range } from "./range.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { js_declaration_to_block_body } from "./js_declaration_to_block_body.mjs";
import { js_node_types_includes } from "./js_node_types_includes.mjs";
import { list_any } from "./list_any.mjs";
import { js_parse_statement_module } from "./js_parse_statement_module.mjs";
import { js_code_declaration } from "./js_code_declaration.mjs";
import { list_range } from "./list_range.mjs";
import { marker_previous_index } from "./marker_previous_index.mjs";
import { js_marker_named_ast_arg } from "./js_marker_named_ast_arg.mjs";
import { marker_next_index } from "./marker_next_index.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { function_transform } from "./function_transform.mjs";
import { list_insert } from "./list_insert.mjs";
import { list_remove } from "./list_remove.mjs";
import { assert } from "./assert.mjs";
import { list_map } from "./list_map.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { functions_names } from "./functions_names.mjs";
export async function marker_functionize(m_name_from, m_name_to, f_name_new) {
  let f_name = await data_function_current_get();
  await function_transform(f_name, lambda_marker);
  async function lambda_marker(ast) {
    let a_from = js_marker_named_ast_arg(ast, m_name_from);
    let { index: index_from } = marker_next_index(a_from);
    let a_to = js_marker_named_ast_arg(ast, m_name_to);
    let { index: index_to } = marker_previous_index(a_to);
    let { stack2: stack2_from } = a_from;
    let { stack2: stack2_to } = a_to;
    assert(stack2_from === stack2_to);
    let range = list_range(stack2_from, index_from, index_to);
    function lambda(r) {
      let result = js_node_types_includes(r, "AwaitExpression");
      return result;
    }
    let async_is = list_any(range, lambda);
    const code_declaration = js_code_declaration(f_name_new, "", async_is);
    let declaration = js_parse_statement_module(code_declaration);
    let body_block = js_declaration_to_block_body(declaration);
    list_add_multiple(body_block, range);
    let { body } = ast;
    list_add(body, declaration);
    function lambda3(la) {
      function lambda2(v) {
        let defineds = js_identifier_defineds(v);
        let { node, stack } = v;
        let stack1 = list_get_end(stack, 1);
        if (js_node_type_is(stack1, "Property")) {
          if (object_property_equals(stack1, "key", node)) {
            return;
          }
        }
        let name = object_property_get(node, "name");
        let a = list_includes(defineds, name);
        if (not(a)) {
          la(name);
        }
      }
      js_visit_type(declaration, "Identifier", lambda2);
    }
    let missing = list_adder_unique(lambda3);
    list_remove(missing, f_name_new);
    let other = functions_names();
    missing = list_difference(missing, other);
    let list = object_property_get(declaration, "params");
    let items = list_map(missing, js_parse_expression);
    list_add_multiple(list, items);
    list_remove_multiple(range, stack2_from);
    let code = js_code_call_args_await_maybe(f_name_new, missing, declaration);
    let parsed = js_parse_statement(code);
    list_insert(stack2_from, index_from, parsed);
    await js_outside_move(ast);
  }
}
