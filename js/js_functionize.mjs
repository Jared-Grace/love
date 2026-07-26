import { list_max } from "./list_max.mjs";
import { list_skip } from "./list_skip.mjs";
import { js_statements_declared_names } from "./js_statements_declared_names.mjs";
import { js_statements_referenced_names } from "./js_statements_referenced_names.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { js_code_names_object_or_single } from "./js_code_names_object_or_single.mjs";
import { js_statement_return } from "./js_statement_return.mjs";
import { js_code_call_args_await_maybe } from "./js_code_call_args_await_maybe.mjs";
import { js_code_let_assign } from "./js_code_let_assign.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
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
  stack_,
  index_from,
  index_to,
) {
  let indices = [index_from, index_to];
  let range = list_slice_from_indices(stack_, indices);
  ("A span that declares a name the rest of the block still reads cannot simply");
  ("leave — the name would go with it and the reader behind would be left pointing");
  ("at nothing. Those names are the ones the new function hands back, which is the");
  ("mirror of the free names it takes in.");
  let index_max = list_max(indices);
  let index_after = index_max + 1;
  let tail = list_skip(stack_, index_after);
  let declared = js_statements_declared_names(range);
  let referenced = js_statements_referenced_names(tail);
  let outputs = list_intersection(declared, referenced);
  let outputs_any = list_empty_not_is(outputs);
  function lambda(r) {
    let result = js_node_types_includes(r, "AwaitExpression");
    return result;
  }
  let async_is = list_any(range, lambda);
  let code_declaration = js_code_function_declaration(f_name_new, "", async_is);
  let declaration = js_parse_statement_module(code_declaration);
  let body_block = js_function_declaration_to_block_body(declaration);
  list_add_multiple(body_block, range);
  if (outputs_any) {
    let code_outputs = js_code_names_object_or_single(outputs);
    let statement_return = js_statement_return(code_outputs);
    list_add(body_block, statement_return);
  }
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
  list_remove_multiple(stack_, range);
  let code_call = js_code_call_args_await_maybe(
    f_name_new,
    missing,
    declaration,
  );
  let code_statement = code_call;
  if (outputs_any) {
    let left = js_code_names_object_or_single(outputs);
    code_statement = js_code_let_assign(left, code_call);
  }
  let parsed = js_parse_statement(code_statement);
  let m = list_min(indices);
  list_insert(stack_, m, parsed);
  await js_outside_move(ast);
  await js_imports_fix(ast);
}
