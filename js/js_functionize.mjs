import { js_code_call_args_await_maybe_parse_statement } from "./js_code_call_args_await_maybe_parse_statement.mjs";
import { list_min } from "./list_min.mjs";
import { list_slice_from_indices } from "./list_slice_from_indices.mjs";
import { js_outside_move } from "./js_outside_move.mjs";
import { js_imports_fix } from "./js_imports_fix.mjs";
import { list_insert } from "./list_insert.mjs";
import { list_remove_multiple } from "./list_remove_multiple.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_map } from "./list_map.mjs";
import { list_difference } from "./list_difference.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_remove } from "./list_remove.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { js_visit_identifiers } from "./js_visit_identifiers.mjs";
import { not } from "./not.mjs";
import { js_identifier_defineds_includes } from "./js_identifier_defineds_includes.mjs";
import { property_equals } from "./property_equals.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { js_parse_statement_module } from "./js_parse_statement_module.mjs";
import { js_code_function_declaration } from "./js_code_function_declaration.mjs";
import { list_any } from "./list_any.mjs";
import { js_node_types_includes } from "./js_node_types_includes.mjs";
import { range } from "./range.mjs";
export async function js_functionize(
  ast,
  f_name_new,
  stack_2,
  index_from,
  index_to,
) {
  let indices = [index_from, index_to];
  let range = list_slice_from_indices(stack_2, indices);
  function lambda(r) {
    let result = js_node_types_includes(r, "AwaitExpression");
    return result;
  }
  let async_is = list_any(range, lambda);
  let code_declaration = js_code_function_declaration(f_name_new, "", async_is);
  let declaration = js_parse_statement_module(code_declaration);
  let body_block = js_function_declaration_to_block_body(declaration);
  list_add_multiple(body_block, range);
  let body = property_get(ast, "body");
  list_add(body, declaration);
  function lambda3(la) {
    function lambda2(v) {
      let stack = property_get(v, "stack");
      let node = property_get(v, "node");
      let stack_1 = list_get_end(stack, 1);
      if (js_node_type_is(stack_1, "Property")) {
        if (property_equals(stack_1, "key", node)) {
          return;
        }
      }
      let name = property_get(node, "name");
      let a = js_identifier_defineds_includes(v, name);
      if (not(a)) {
        la(name);
      }
    }
    js_visit_identifiers(declaration, lambda2);
  }
  let missing = list_adder_unique(lambda3);
  list_remove(missing, f_name_new);
  let other = await functions_names();
  missing = list_difference(missing, other);
  let list = property_get(declaration, "params");
  let items = list_map(missing, js_parse_expression);
  list_add_multiple(list, items);
  list_remove_multiple(stack_2, range);
  let parsed = js_code_call_args_await_maybe_parse_statement(
    f_name_new,
    missing,
    declaration,
  );
  let m = list_min(indices);
  list_insert(stack_2, m, parsed);
  await js_outside_move(ast);
  await js_imports_fix(ast);
}
