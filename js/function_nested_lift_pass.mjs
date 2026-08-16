import { function_nested_lift_skip_or_null } from "./function_nested_lift_skip_or_null.mjs";
import { function_nested_lift_or_wrapper } from "./function_nested_lift_or_wrapper.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { not } from "./not.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_lift_wrapper_candidates } from "./function_lift_wrapper_candidates.mjs";
import { function_nested_lift_name_or_null } from "./function_nested_lift_name_or_null.mjs";
export async function function_nested_lift_pass(f_name) {
  arguments_assert(arguments, 1);
  ("One walk through the named function, moving out the body of every piece written inside it that can be moved, each under a name worked out from the two names it already has, and each committed under its own command before the next one starts.");
  ("A long function here is nearly always long because of what is written inside it rather than because of what is written down its middle, and the pieces inside come out one at a time under the same rule. Running that rule by hand once per piece leaves nothing behind and files the whole batch under one message that names none of them, so the walk is the command and the pieces are its work.");
  ("Which function to walk is still somebody's choice, and deliberately so. A walk of the whole repo would rewrite files other people have open, and the pieces worth naming well are the ones in the file the person walking it has just read.");
  ("The list is asked again before each move rather than read once at the start, because a piece written inside another piece leaves with the one that holds it, and a walk working from a list made before the first move would then ask for something that is no longer there.");
  ("What is stepped over rather than thrown is stepped over because none of it is a fault: a piece that was never named by anybody, a piece whose name is spelled in another way, and a piece whose new name is already spoken for. Each is handed back with its reason, because each one names a file that wants a person to read it.");
  ("Two moves can make each cut, and the narrower one is taken wherever it will go. It takes the name away with the body and rewrites every call, so nothing is left behind; the wider one leaves the name standing on a line that calls the moved body, which is the only way to move a piece that is handed on as a value rather than called.");
  ("Which one is not a preference, it is the difference between a walk that finishes and one that does not. A name left standing is still a name the pieces beside it reach out for, so each of them still has to be handed it, and the walk hands out one more parameter per cut instead of one fewer. Taking the name away frees every sibling that reached for it at once, which is exactly what the order these are walked in was built to exploit - leaves first, so that the big one they serve comes out with nothing left to be handed. Measured on ",
    fn_name("integer_factorization_to_sat"),
    ": walked with the wider move alone, eleven pieces came out and the eleven lines left behind hand each other five functions by name.");
  await ai_git_noted();
  let ranked = await function_lift_wrapper_candidates(f_name);
  let names = list_map_property(ranked, "name");
  let lifted = [];
  let skipped = [];
  for (let nested of names) {
    let rows = await function_lift_wrapper_candidates(f_name);
    let row = list_find_property_or_null(rows, "name", nested);
    let there_is = null_not_is(row);
    if (not(there_is)) {
      continue;
    }
    let skip = await function_nested_lift_skip_or_null(f_name, nested, row);
    let stepped_over_is = null_not_is(skip);
    if (stepped_over_is) {
      list_add(skipped, skip);
      continue;
    }
    let f_name_new = function_nested_lift_name_or_null(f_name, nested);
    let lift = await function_nested_lift_or_wrapper(f_name, nested);
    await function_call_commit(lift, [f_name, nested, f_name_new]);
    let by = lift.name;
    list_add(lifted, {
      nested,
      f_name_new,
      by,
    });
  }
  let r = {
    f_name,
    lifted,
    skipped,
  };
  return r;
}
