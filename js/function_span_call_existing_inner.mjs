import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_span_call_existing_generic } from "./function_span_call_existing_generic.mjs";
export async function function_span_call_existing_inner(
  f_name,
  address_from,
  address_to,
  f_name_call,
) {
  "$plain f_name";
  "$plain address_from";
  "$plain address_to";
  "$plain f_name_call";
  arguments_assert(arguments, 4);
  ("Points a run of lines folded inside a loop or a branch at a function that already writes those lines out, leaving the run as a call to it, and puts everything back untouched if the two are not the same work - the two ends taken where the names are actually written, however deep in.");
  ("The twin of the fold that climbs to the top of the body, and it is the one most duplicates need. A run duplicating a named function is usually a few lines inside a loop over the things being read, and its climbing twin addresses the whole loop instead - so the piece that comes out is the loop and never matches, and the answer is always no. Measured: the first three duplications this repo tried to fold were all inside a loop.");
  ("Both ends must stand in the same block, which for this one is the ordinary case rather than a hurdle: the lines worth folding out of a loop are the loop's own contents, side by side.");
  let select_fn_name = fn_name("js_statement_find_name_inner");
  let output = await function_span_call_existing_generic(
    f_name,
    address_from,
    address_to,
    f_name_call,
    select_fn_name,
  );
  return output;
}
