import { js_statements_declared_names } from "./js_statements_declared_names.mjs";
import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
import { js_assigned_names } from "./js_assigned_names.mjs";
import { js_global_names } from "./js_global_names.mjs";
import { js_statements_span_outputs } from "./js_statements_span_outputs.mjs";
import { js_function_declaration_params_add } from "./js_function_declaration_params_add.mjs";
import { js_statements_await_any_is } from "./js_statements_await_any_is.mjs";
import { js_module_names_reachable } from "./js_module_names_reachable.mjs";
import { js_function_arguments_assert_add } from "./js_function_arguments_assert_add.mjs";
import { js_statements_escapes_unmatched } from "./js_statements_escapes_unmatched.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { js_declaration_names_unbound } from "./js_declaration_names_unbound.mjs";
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
import { list_remove } from "./list_remove.mjs";
import { list_difference } from "./list_difference.mjs";
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
  ("A run of lines that writes to a name it did not itself bring into being is refused, and refused here, before a single thing has been written. Such a name belongs to the block the run is leaving. Moved into a function of its own, the writing lands on a copy that dies with the call, and everything behind goes on reading the value the name had before the run - which is the failure with no error, because the lines come out looking exactly right.");
  ("Measured, before this stood: a mark walking through a pool of people was declared above a loop, moved along inside the run that was cut, and read at the top of every turn round. The cut left the mark standing still, so every turn drew from the top of the pool, the same faces were met again and again, and the count of people placed fell from two hundred and forty three to two hundred and thirty four. Nothing went red. It was caught only because a run of the whole thing had been written down beforehand and the two were compared by hand, which is not a thing anybody does twice.");
  ("What is handed back covers only names the run brings into being, which is why it could not see this. The two questions look alike and are not: one asks what leaves with the run, the other asks what the run reaches back into.");
  ("Every such write is refused rather than the ones that turn out to matter, because whether it matters cannot be decided by looking at the lines behind. A run inside a loop reads the name again through its own first line on the next turn round, so the reading is not behind the run at all - and that is exactly the case that was measured. A refusal costs a message and a second choice of ends; being wrong here costs a change nobody sees.");
  let born = js_statements_declared_names(span);
  let written = list_map_concat_multiple(span, js_assigned_names);
  let carried = list_difference(written, born);
  list_empty_is_assert_json(carried, {
    hint: "this run of lines gives a new value to a name that was brought into being above it, and a function of its own would give that value to a copy instead - so the lines behind would carry on with the old one. Would you like to choose ends that hold the line where that name was brought into being, or to hand the name back by hand once the run is out?",
    f_name_new,
  });
  let index_max = list_max(indices);
  let index_after = index_max + 1;
  let tail = list_skip(stack_, index_after);
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
  let missing = js_declaration_names_unbound(declaration);
  list_remove(missing, f_name_new);
  let reachable = await js_module_names_reachable(ast);
  missing = list_difference(missing, reachable);
  ("What the language itself provides is not passed in. A name like console or Error is bound everywhere already, so handing it over as a parameter binds it a second time - and a parameter wearing the name of something already in scope is the one thing this repo forbids outright, because every line under it reads the handed-in thing rather than the one it was written against.");
  ("It reads as a missing name for the same reason a repo function would: nothing in the file binds it and nothing imports it. Only the two answers above were subtracted, so everything the language gives came through as a parameter - console and Error were both handed over that way in one afternoon's cutting. The lifting twin already asked this question; the two now agree.");
  let provided = js_global_names();
  missing = list_difference(missing, provided);
  js_function_declaration_params_add(declaration, missing);
  ("The count is written once the parameters are settled, so it says how many the new function really takes.");
  js_function_arguments_assert_add(declaration);
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
