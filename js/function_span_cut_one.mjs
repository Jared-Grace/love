import { arguments_assert } from "./arguments_assert.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_part_name_or_null } from "./function_part_name_or_null.mjs";
import { function_span_cut_or_undo } from "./function_span_cut_or_undo.mjs";
import { function_span_cut_skip_or_null } from "./function_span_cut_skip_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function function_span_cut_one(f_name, address_from, address_to) {
  "$plain f_name";
  "$plain address_from";
  "$plain address_to";
  arguments_assert(arguments, 3);
  ("One run of lines out of the named function, guarded and named and committed under its own command - or, where a reason says not to take it, that reason and nothing done.");
  ("Every reason there is to step over a run is asked before anything is written, and one more is only answerable afterwards, so what comes back is one of three things: a reason not to have cut, a cut made, or a cut made and put straight back. Two walks want exactly that, and each of them wants it for a different set of runs - so it stands here on its own rather than inside either.");
  ("The name is worked out here rather than handed in, because it is worked out from the word the run ends on and that word is already the thing being guarded. A caller choosing the name would be choosing it before the readings that say whether the word can carry one.");
  ("Nothing is caught. A cut that cannot be made stops whoever asked for it with everything before it already committed, which is what should happen: a run the cut cannot take is a finding rather than a row to walk past.");
  let skip = await function_span_cut_skip_or_null(
    f_name,
    address_from,
    address_to,
  );
  let stepped_over_is = null_not_is(skip);
  if (stepped_over_is) {
    return skip;
  }
  let f_name_new = function_part_name_or_null(f_name, address_to);
  let outcome = await function_call_commit(function_span_cut_or_undo, [
    f_name,
    address_from,
    address_to,
    f_name_new,
  ]);
  return outcome;
}
