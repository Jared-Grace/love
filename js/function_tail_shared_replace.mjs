import { function_transform_checked_done } from "./function_transform_checked_done.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_shared_run_read_or_null } from "./js_function_declaration_shared_run_read_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { js_function_declaration_tail_shared_verdict_or_null } from "./js_function_declaration_tail_shared_verdict_or_null.mjs";
import { not } from "./not.mjs";
import { add } from "./add.mjs";
import { js_function_declaration_tail_unbroken_is } from "./js_function_declaration_tail_unbroken_is.mjs";
import { js_code_let_call } from "./js_code_let_call.mjs";
import { js_function_node_find_named_node } from "./js_function_node_find_named_node.mjs";
import { js_function_declaration_statements_working_without_arguments_assert } from "./js_function_declaration_statements_working_without_arguments_assert.mjs";
import { list_take_last } from "./list_take_last.mjs";
import { list_take } from "./list_take.mjs";
import { list_first } from "./list_first.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { js_statements_delete } from "./js_statements_delete.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { object_replace } from "./object_replace.mjs";
export async function function_tail_shared_replace(f_name, shared_name) {
  arguments_assert(arguments, 2);
  ("Swap the copy of a shared function's body that a function ends with for a call to that function, leaving the line that hands the answer back exactly where it stands.");
  ("The mirror at the other end of the function of the swap made at an opening, and the change it writes is smaller than that one rather than larger. An opening swapped for a call has to keep the name the copy gave what it made, because everything below goes on reading it. An ending has only one line below it, the line handing that name back, and the call is written under that same name - so the last line is not touched at all and goes on saying what it always said.");
  ("It asks every question again rather than being told the answer. The reading that lists what can be collapsed hands back names and nothing else, and by the time a name is acted on the file behind it may have been rewritten by somebody else working in the same folder.");
  ("One question is asked here that the listing does not ask: whether anything stands written in among the lines being replaced. Prose is not work, so a reading of what a function does steps over it and would report the run as ready; the swap takes the lines it was told about and would leave the paragraph behind, still written down and now describing lines that had gone. So this may refuse a function the listing offered, and never the other way about.");
  ("It canonicalizes afterwards and does not commit. The line it writes names a function this file has never imported, so until the pass has been over it the file reads a name nothing binds, and a commit taken in that gap records a file that does not load.");
  let parsed_shared = await function_parse_declaration(shared_name);
  let shared_declaration = property_get(parsed_shared, "declaration");
  let shared =
    js_function_declaration_shared_run_read_or_null(shared_declaration);
  let unusable_is = null_is(shared);
  if (unusable_is) {
    let unusable = {
      ok: false,
      reason:
        "the shared function is not a run of work ending in the handing back of one name that run made",
    };
    return unusable;
  }
  let parsed_other = await function_parse_declaration(f_name);
  let declaration_other = property_get(parsed_other, "declaration");
  let verdict = js_function_declaration_tail_shared_verdict_or_null(
    declaration_other,
    shared,
  );
  let unrelated_is = null_is(verdict);
  if (unrelated_is) {
    let unrelated = {
      ok: false,
      reason: "it does not end with a copy of the shared function's body",
    };
    return unrelated;
  }
  let taken_is = property_get(verdict, "collapsible");
  let refused_is = not(taken_is);
  if (refused_is) {
    let reason = property_get(verdict, "reason");
    let refused = {
      ok: false,
      reason: reason,
    };
    return refused;
  }
  let size = property_get(shared, "size");
  let span = add(size, 1);
  let unbroken_is = js_function_declaration_tail_unbroken_is(
    declaration_other,
    span,
  );
  let broken_is = not(unbroken_is);
  if (broken_is) {
    let broken = {
      ok: false,
      reason:
        "something else is written in among the lines being replaced, and would be left behind describing lines that had gone",
    };
    return broken;
  }
  let local_name = property_get(verdict, "local_name");
  let params = property_get(shared, "params");
  let awaited_is = property_get(shared_declaration, "async");
  let code = js_code_let_call(local_name, shared_name, params, awaited_is);
  function edit(ast) {
    let node = js_function_node_find_named_node(ast, f_name);
    let working =
      js_function_declaration_statements_working_without_arguments_assert(node);
    let ending = list_take_last(working, span);
    let doing_run = list_take(ending, size);
    let first = list_first(doing_run);
    let rest = list_skip(doing_run, 1);
    let more_is = list_empty_not_is(rest);
    if (more_is) {
      js_statements_delete(ast, rest);
    }
    let statement = js_parse_statement(code);
    object_replace(first, statement);
  }
  let done = await function_transform_checked_done(f_name, edit, local_name);
  return done;
}
