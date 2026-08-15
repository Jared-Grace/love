import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { not } from "./not.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_exists } from "./function_exists.mjs";
import { function_lift_wrapper_candidates } from "./function_lift_wrapper_candidates.mjs";
import { function_nested_lift_name_or_null } from "./function_nested_lift_name_or_null.mjs";
import { function_nested_lift_wrapper } from "./function_nested_lift_wrapper.mjs";
import { js_binding_names_unbindable } from "./js_binding_names_unbindable.mjs";
import { js_name_lambda_is } from "./js_name_lambda_is.mjs";
export async function function_nested_lift_wrapper_pass(f_name) {
  arguments_assert(arguments, 1);
  ("One walk through the named function, moving out the body of every piece written inside it that can be moved, each under a name worked out from the two names it already has, and each committed under its own command before the next one starts.");
  ("A long function here is nearly always long because of what is written inside it rather than because of what is written down its middle, and the pieces inside come out one at a time under the same rule. Running that rule by hand once per piece leaves nothing behind and files the whole batch under one message that names none of them, so the walk is the command and the pieces are its work.");
  ("Which function to walk is still somebody's choice, and deliberately so. A walk of the whole repo would rewrite files other people have open, and the pieces worth naming well are the ones in the file the person walking it has just read.");
  ("The list is asked again before each move rather than read once at the start, because a piece written inside another piece leaves with the one that holds it, and a walk working from a list made before the first move would then ask for something that is no longer there.");
  ("What is stepped over rather than thrown is stepped over because none of it is a fault: a piece that was never named by anybody, a piece whose name is spelled in another way, and a piece whose new name is already spoken for. Each is handed back with its reason, because each one names a file that wants a person to read it.");
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
    let handed_out_is = js_name_lambda_is(nested);
    if (handed_out_is) {
      list_add(skipped, {
        nested,
        why: "this piece was never given a name by anybody - a pass named it, and carried out under that name joined to its holder's it would stand in the repo as a name no search for what it does could ever reach. Would you like to name it for what it does first?",
      });
      continue;
    }
    let f_name_new = function_nested_lift_name_or_null(f_name, nested);
    let named_is = null_not_is(f_name_new);
    if (not(named_is)) {
      list_add(skipped, {
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
        nested,
        f_name_new,
        why: "a function already answers to the name this one would take, and whether the two are the same work is a question for somebody reading both",
      });
      continue;
    }
    await function_call_commit(function_nested_lift_wrapper, [
      f_name,
      nested,
      f_name_new,
    ]);
    list_add(lifted, {
      nested,
      f_name_new,
    });
  }
  let r = {
    f_name,
    lifted,
    skipped,
  };
  return r;
}
