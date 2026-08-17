import { arguments_assert } from "./arguments_assert.mjs";
import { js_name_lambda_is } from "./js_name_lambda_is.mjs";
import { function_part_name_or_null } from "./function_part_name_or_null.mjs";
import { function_exists } from "./function_exists.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export async function function_span_cut_skip_or_null(f_name, address_to) {
  "$plain f_name";
  "$plain address_to";
  arguments_assert(arguments, 2);
  ("Why a run of lines is being stepped over rather than cut out, or nothing at all when there is no reason to step over it.");
  ("The twin of the one beside it, for the other shape of cut, and the same three of its four reasons. A run has no name of its own to be asked about, so it borrows the name at the end of it - which is why the reading about a word the language will not let a function bind is missing here and only there: that one is asked of what a piece reaches out for, and what a run reaches out for is worked out by the cut itself rather than carried on the row.");
  ("Every one of them is stepped over rather than thrown, because none is a fault. Each names a run somebody could name well in a moment, and a walk that stopped at the first would leave every later run uncut for a reason that had nothing to do with it.");
  ("They are asked in this order because each rests on the one before. Whether a name is already spoken for cannot be asked until there is a name to ask about, and there is none until the word at the end of the run is one this repo can spell a name from.");
  let handed_out_is = js_name_lambda_is(address_to);
  if (handed_out_is) {
    let unnamed = {
      address_to,
      why: "the run ends on a word a pass handed out rather than one anybody chose, so a function carrying that word in its name would stand in the repo where no search for what it does could reach it. Would you like to name that line for what it holds first?",
    };
    return unnamed;
  }
  let f_name_new = function_part_name_or_null(f_name, address_to);
  let named_is = null_not_is(f_name_new);
  if (not(named_is)) {
    let unspelled = {
      address_to,
      why: "the word the run ends on is not spelled the way this repo spells names, so what the run should be called once it stands on its own is for somebody reading it to choose",
    };
    return unspelled;
  }
  let search = await function_exists(f_name_new);
  let taken = property_get(search, "exists");
  if (taken) {
    let spoken_for = {
      address_to,
      f_name_new,
      why: "a function already answers to the name this run would take, and whether the two are the same work is a question for somebody reading both",
    };
    return spoken_for;
  }
  return null;
}
