import { arguments_assert } from "./arguments_assert.mjs";
import { js_calls_named_literal_argument } from "./js_calls_named_literal_argument.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
import { js_call_callee_set } from "./js_call_callee_set.mjs";
import { list_size } from "./list_size.mjs";
export async function js_calls_named_literal_argument_callee_set(
  ast,
  f_name_before,
  literal,
  f_name_after,
) {
  "$plain literal";
  arguments_assert(arguments, 4);
  ("Points every call in this file that hands one helper a particular written-out word at the helper that already knows that word, and drops the word from the call.");
  ("A helper that takes a thing and a helper that is about one particular thing are the same work with the answer moved. Moving a caller across is therefore two changes that only make sense together: the word comes out of the line, and the line points somewhere else. Doing either one alone leaves a call that is wrong.");
  ("The word comes out first, so that the check underneath sees a call and a function that agree about how many things they take. That check is the guarantee here, and it can only do its work if it is asked after the change rather than before it.");
  ("The calls are all found before any of them is changed. Changing what is being walked over while the walk is still going is how a walk comes to miss the thing beside the one it just changed.");
  let calls = js_calls_named_literal_argument(ast, f_name_before, literal);
  for (let call of calls) {
    let args = js_call_arguments_get(call);
    list_remove_at(args, 0);
    let selects = [call];
    await js_call_callee_set(ast, selects, f_name_after);
  }
  let moved = list_size(calls);
  return moved;
}
