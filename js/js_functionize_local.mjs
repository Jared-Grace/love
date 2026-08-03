import { js_statements_escapes_unmatched } from "./js_statements_escapes_unmatched.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { js_declaration_names_unbound } from "./js_declaration_names_unbound.mjs";
import { list_slice_from_indices } from "./list_slice_from_indices.mjs";
import { list_max } from "./list_max.mjs";
import { list_skip } from "./list_skip.mjs";
import { js_statements_declared_names } from "./js_statements_declared_names.mjs";
import { js_statements_referenced_names } from "./js_statements_referenced_names.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { js_node_types_includes } from "./js_node_types_includes.mjs";
import { list_any } from "./list_any.mjs";
import { js_code_function_declaration } from "./js_code_function_declaration.mjs";
import { js_parse_statement_module } from "./js_parse_statement_module.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { js_code_names_object_or_single } from "./js_code_names_object_or_single.mjs";
import { js_statement_return } from "./js_statement_return.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { list_remove } from "./list_remove.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_map } from "./list_map.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { list_remove_multiple } from "./list_remove_multiple.mjs";
import { js_code_call_args_await_maybe } from "./js_code_call_args_await_maybe.mjs";
import { js_code_let_assign } from "./js_code_let_assign.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { list_min } from "./list_min.mjs";
import { list_insert } from "./list_insert.mjs";
export async function js_functionize_local(stack_, indices, f_name_new, ast) {
  let span = list_slice_from_indices(stack_, indices);
  ("A run of lines that jumps out of itself is refused before anything is written. A return in the run would go on returning, but from the new function instead of the one the reader was looking at, and the caller would carry quietly on to the next line - the failure with no error. The places are given as how far into the file they are written.");
  let escapes = js_statements_escapes_unmatched(span);
  list_empty_is_assert_json(escapes, {
    hint: "this run of lines returns, breaks, or goes round again in a way that leaves the run, and a function of its own has nowhere for that to land. Would you like to choose ends that hold the whole loop, or that stop short of the jump?",
    f_name_new,
  });
  ("A span that declares a name the rest of the block still reads cannot simply");
  ("leave — the name would go with it and the reader behind would be left pointing");
  ("at nothing. Those names are the ones the new function hands back, which is the");
  ("mirror of the free names it takes in.");
  let index_max = list_max(indices);
  let index_after = index_max + 1;
  let tail = list_skip(stack_, index_after);
  let declared = js_statements_declared_names(span);
  let referenced = js_statements_referenced_names(tail);
  let outputs = list_intersection(declared, referenced);
  let outputs_any = list_empty_not_is(outputs);
  function lambda(r) {
    let result = js_node_types_includes(r, "AwaitExpression");
    return result;
  }
  let async_is = list_any(span, lambda);
  let code_declaration = js_code_function_declaration(f_name_new, "", async_is);
  let declaration = js_parse_statement_module(code_declaration);
  let body_block = js_function_declaration_to_block_body(declaration);
  list_add_multiple(body_block, span);
  if (outputs_any) {
    let code_outputs = js_code_names_object_or_single(outputs);
    let statement_return = js_statement_return(code_outputs);
    list_add(body_block, statement_return);
  }
  let body = property_get(ast, "body");
  list_add(body, declaration);
  let missing = js_declaration_names_unbound(declaration);
  list_remove(missing, f_name_new);
  let other = await functions_names();
  missing = list_difference(missing, other);
  let list = property_get(declaration, "params");
  let items = list_map(missing, js_parse_expression);
  list_add_multiple(list, items);
  list_remove_multiple(stack_, span);
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
}
