import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_functionize_generic } from "./function_functionize_generic.mjs";
export async function function_functionize_rest_returning(
  f_name,
  name_from,
  f_name_new,
) {
  arguments_assert(arguments, 3);
  ("Pull the run of work from the first line mentioning a name through the last line of the named function out into a function of its own, carrying its returns with it, and leave behind a line that calls it and hands its answer back.");
  ("The twin of the plain rest cutter, for the one shape it refuses: a function that ends in a run of decisions, each answering and returning. The plain cutter is right to refuse a return anywhere else - moved into a called function it would return from there and let the caller carry quietly on - but where the run closes the function there is no carrying on, and returning the call gives back exactly what the function gave back before.");
  ("It checks that the line named really stands at the top level of the function's body, so a run closing an inner block cannot be cut this way by mistake.");
  ("The name is handed over twice below because the machinery that finds the ends finds one line per name and wants two. Both come back as the same line, and the cutter behind this takes the beginning from it and ignores the rest.");
  let select_fn_name = fn_name("js_statement_find_name_body");
  let apply_fn_name = fn_name("js_selects_functionize_rest_returning");
  let output = await function_functionize_generic(
    f_name,
    name_from,
    name_from,
    f_name_new,
    select_fn_name,
    apply_fn_name,
  );
  return output;
}
