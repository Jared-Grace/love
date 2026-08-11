import { js_binding_names_unbindable } from "./js_binding_names_unbindable.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_lift_candidates } from "./functions_lift_candidates.mjs";
import { property_get } from "./property_get.mjs";
import { function_nested_lift_name_or_null } from "./function_nested_lift_name_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { function_exists } from "./function_exists.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_nested_lift } from "./function_nested_lift.mjs";
import { not } from "./not.mjs";
export async function functions_nested_lift_pass() {
  arguments_assert(arguments, 0);
  ("One walk down the work list, moving out the piece it names inside each function that has one, each under a name worked out from the two names it has, and each committed under its own command before the next one starts.");
  ("The list names only the biggest piece inside each function, on purpose, because moving that one changes what the second biggest is. So one walk cannot finish the job even when nothing goes wrong, and the walk is a separate name from the run around it for exactly that reason: what repeats is the walk.");
  ("Nothing is caught. Every move that has already run is already committed, so a move that cannot be made stops the walk with everything before it kept and its own reason said out loud - which is what should happen, because a shape the move cannot handle is a finding rather than a row to step over.");
  ("The two things that can be seen coming are stepped over rather than thrown, because neither is a fault: a piece whose name is spelled in another way, and a piece whose new name is already spoken for. Both are handed back with the reason, because each one names a file that wants a person to read it.");
  let candidates = await functions_lift_candidates();
  let lifted = [];
  let skipped = [];
  for (let row of candidates) {
    let f_name = property_get(row, "name");
    let nested = property_get(row, "nested");
    let f_name_new = function_nested_lift_name_or_null(f_name, nested);
    let named_is = null_not_is(f_name_new);
    if (not(named_is)) {
      list_add(skipped, {
        name: f_name,
        nested,
        why: "the piece inside is not named the way this repo names things, so what it should be called once it stands on its own is for somebody reading it to choose",
      });
      continue;
    }
    let closed = property_get(row, "closed");
    let unbindable = js_binding_names_unbindable();
    let blocked = list_intersect(closed, unbindable);
    let blocked_any = list_empty_not_is(blocked);
    if (blocked_any) {
      list_add(skipped, {
        name: f_name,
        nested,
        blocked,
        why: "the piece inside reads a word the language will not let a function bind, so moving it out would have to hand that word in through a parameter list, which is the one place the word is refused",
      });
      continue;
    }
    let search = await function_exists(f_name_new);
    let taken = property_get(search, "exists");
    if (taken) {
      list_add(skipped, {
        name: f_name,
        nested,
        f_name_new,
        why: "a function already answers to the name this one would take, and whether the two are the same work is a question for somebody reading both",
      });
      continue;
    }
    await function_call_commit(function_nested_lift, [
      f_name,
      nested,
      f_name_new,
    ]);
    list_add(lifted, {
      name: f_name,
      nested,
      f_name_new,
    });
  }
  let r = {
    lifted,
    skipped,
  };
  return r;
}
