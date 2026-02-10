import { list_min } from "../../../love/public/src/list_min.mjs";
import { list_slice_from_indices } from "../../../love/public/src/list_slice_from_indices.mjs";
import { js_outside_move } from "../../../love/public/src/js_outside_move.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
import { js_parse_statement } from "../../../love/public/src/js_parse_statement.mjs";
import { js_code_call_args_await_maybe } from "../../../love/public/src/js_code_call_args_await_maybe.mjs";
import { list_remove_multiple } from "../../../love/public/src/list_remove_multiple.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_difference } from "../../../love/public/src/list_difference.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { list_adder_unique } from "../../../love/public/src/list_adder_unique.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { js_identifier_defineds_includes } from "../../../love/public/src/js_identifier_defineds_includes.mjs";
import { property_equals } from "../../../love/public/src/property_equals.mjs";
import { js_node_type_is } from "../../../love/public/src/js_node_type_is.mjs";
import { list_get_end } from "../../../love/public/src/list_get_end.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { js_declaration_to_block_body } from "../../../love/public/src/js_declaration_to_block_body.mjs";
import { js_parse_statement_module } from "../../../love/public/src/js_parse_statement_module.mjs";
import { js_code_declaration } from "../../../love/public/src/js_code_declaration.mjs";
import { list_any } from "../../../love/public/src/list_any.mjs";
import { js_node_types_includes } from "../../../love/public/src/js_node_types_includes.mjs";
import { range } from "../../../love/public/src/range.mjs";
export async function js_functionize(
  ast,
  f_name_new,
  stack2,
  index_from,
  index_to,
) {
  const indices = [index_from, index_to];
  let range = list_slice_from_indices(stack2, indices);
  function lambda(r) {
    let result = js_node_types_includes(r, "AwaitExpression");
    return result;
  }
  let async_is = list_any(range, lambda);
  const code_declaration = js_code_declaration(f_name_new, "", async_is);
  let declaration = js_parse_statement_module(code_declaration);
  let body_block = js_declaration_to_block_body(declaration);
  list_add_multiple(body_block, range);
  let body = object_property_get(ast, "body");
  list_add(body, declaration);
  function lambda3(la) {
    function lambda2(v) {
      let stack = object_property_get(v, "stack");
      let node = object_property_get(v, "node");
      let stack1 = list_get_end(stack, 1);
      if (js_node_type_is(stack1, "Property")) {
        if (property_equals(stack1, "key", node)) {
          return;
        }
      }
      let name = object_property_get(node, "name");
      let a = js_identifier_defineds_includes(v, name);
      if (not(a)) {
        la(name);
      }
    }
    js_visit_type(declaration, "Identifier", lambda2);
  }
  let missing = list_adder_unique(lambda3);
  list_remove(missing, f_name_new);
  let other = await functions_names();
  missing = list_difference(missing, other);
  let list = object_property_get(declaration, "params");
  let items = list_map(missing, js_parse_expression);
  list_add_multiple(list, items);
  list_remove_multiple(stack2, range);
  let code = js_code_call_args_await_maybe(f_name_new, missing, declaration);
  let parsed = js_parse_statement(code);
  let m = list_min(indices);
  list_insert(stack2, m, parsed);
  await js_outside_move(ast);
}
