import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_span_call_existing_generic } from "./function_span_call_existing_generic.mjs";
export async function function_span_call_existing(
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
  ("Points a run of lines standing at the top of one function's body at a function that already writes those lines out, leaving the run as a call to it, and puts everything back untouched if the two are not the same work.");
  ("The repo could already cut a run out into a new function and could already retire one whole function in favour of another, and neither of those is this. A run of lines duplicating a function that exists is the commonest way a duplicate is born - somebody wrote the lines rather than finding the name - and until now the only way back was to cut the run out under a new name and then retire that name, which leaves the scratch name standing as an alias forever. The refusal the cutter prints asks this very question and cannot act on it.");
  ("All of the folding is held one name down, and the only thing said here is which reader finds the two ends - the line at the top of the body rather than the nearest one. That is the single word this and its twin ever disagree about, and a run folded inside a loop is the twin's.");
  let select_fn_name = fn_name("js_statement_find_name_body");
  let output = await function_span_call_existing_generic(
    f_name,
    address_from,
    address_to,
    f_name_call,
    select_fn_name,
  );
  return output;
}
