import { js_functionize_params_missing_add } from "./js_functionize_params_missing_add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_statements_span_outputs_closure_assert } from "./js_statements_span_outputs_closure_assert.mjs";
import { js_statements_outer_assign_assert } from "./js_statements_outer_assign_assert.mjs";
import { js_statements_span_outputs } from "./js_statements_span_outputs.mjs";
import { js_statements_await_any_is } from "./js_statements_await_any_is.mjs";
import { js_statements_escapes_unmatched } from "./js_statements_escapes_unmatched.mjs";
import { js_statements_escapes_unmatched_returns_not } from "./js_statements_escapes_unmatched_returns_not.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_slice_from_indices } from "./list_slice_from_indices.mjs";
import { list_max } from "./list_max.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { js_code_function_declaration } from "./js_code_function_declaration.mjs";
import { js_parse_statement_module } from "./js_parse_statement_module.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { js_code_names_object_or_single } from "./js_code_names_object_or_single.mjs";
import { js_statement_return } from "./js_statement_return.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { list_remove_multiple } from "./list_remove_multiple.mjs";
import { js_code_call_args_await_maybe } from "./js_code_call_args_await_maybe.mjs";
import { js_code_let_assign } from "./js_code_let_assign.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { list_min } from "./list_min.mjs";
import { list_insert } from "./list_insert.mjs";
export async function js_functionize_local_generic(
  stack_,
  indices,
  f_name_new,
  ast,
  returning,
) {
  arguments_assert(arguments, 5);
  ("The whole of the cutting, with the caller saying whether the run being cut closes the function it is coming out of.");
  ("Two things turn on that one answer and nothing else does. A return inside the run is refused when the run is called from the middle of a body and allowed when the run closes the function; and the line left behind is a plain call in the first case and a returning call in the second. Everything between - what the run reaches for, what it hands back, what the new function has to be handed - is the same work either way, which is why it is held here once rather than copied.");
  let span = list_slice_from_indices(stack_, indices);
  ("A run of lines that jumps out of itself is refused before anything is written. A return in the run would go on returning, but from the new function instead of the one the reader was looking at, and the caller would carry quietly on to the next line - the failure with no error. The places are given as how far into the file they are written.");
  ("Where the run closes the function, that particular failure cannot happen: there is no next line to carry on to, and the call left in its place returns what the new function returns. So the returns are left out of the refusal there and only the two loop jumps are asked about.");
  let escapes = returning
    ? js_statements_escapes_unmatched_returns_not(span)
    : js_statements_escapes_unmatched(span);
  list_empty_is_assert_json(escapes, {
    hint: "this run of lines returns, breaks, or goes round again in a way that leaves the run, and a function of its own has nowhere for that to land. Would you like to choose ends that hold the whole loop, or that stop short of the jump?",
    f_name_new,
  });
  ("A run of lines that reaches back into a name bound above it is refused too, and refused here, beside the other refusal and before a single thing has been written. Why that write cannot travel, and why refusing all of them is right rather than only the ones that turn out to matter, is written where the judging lives.");
  js_statements_outer_assign_assert(span, f_name_new);
  let index_max = list_max(indices);
  let index_after = index_max + 1;
  let tail = list_skip(stack_, index_after);
  ("A run of lines that hands back a name somebody goes on writing to is refused here, as late as this because it is the first place the lines behind the run are known. The other two refusals only had to look at the run itself.");
  js_statements_span_outputs_closure_assert(span, tail, f_name_new);
  let outputs = js_statements_span_outputs(span, tail);
  let outputs_any = list_empty_not_is(outputs);
  let async_is = js_statements_await_any_is(span);
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
  let missing = await js_functionize_params_missing_add(
    declaration,
    f_name_new,
    ast,
    span,
  );
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
  ("Where the run closed the function, the line left in its place hands the answer straight back. Anything the run returned now returns from the new function, so the caller has to return it in turn or the answer is worked out and dropped.");
  let parsed = returning
    ? js_statement_return(code_call)
    : js_parse_statement(code_statement);
  let m = list_min(indices);
  list_insert(stack_, m, parsed);
}
