import { arguments_assert } from "./arguments_assert.mjs";
import { js_name_lambda_is } from "./js_name_lambda_is.mjs";
import { function_part_name_or_null } from "./function_part_name_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { js_binding_names_unbindable } from "./js_binding_names_unbindable.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { function_exists } from "./function_exists.mjs";
export async function function_nested_lift_skip_or_null(f_name, nested, row) {
  "$plain f_name";
  "$plain nested";
  "Why a piece written inside another function is being stepped over rather than moved out, or nothing at all when there is no reason to step over it.";
  "All four reasons are stepped over rather than thrown, because none of them is a fault - each one names a file that wants a person to read it, and a walk that stopped at the first would leave the rest of the pieces unmoved for a reason that had nothing to do with them.";
  "They are asked in this order because each one rests on the one before it. Whether a name is already spoken for cannot be asked until there is a name to ask about, and there is no name until the piece has one of its own and it is spelled the way this repo spells them.";
  arguments_assert(arguments, 3);
  let handed_out_is = js_name_lambda_is(nested);
  if (handed_out_is) {
    let unnamed = {
      nested,
      why: "this piece was never given a name by anybody - a pass named it, and carried out under that name joined to its holder's it would stand in the repo as a name no search for what it does could ever reach. Would you like to name it for what it does first?",
    };
    return unnamed;
  }
  let f_name_new = function_part_name_or_null(f_name, nested);
  let named_is = null_not_is(f_name_new);
  if (not(named_is)) {
    let unspelled = {
      nested,
      why: "the piece inside is not named the way this repo names things, so what it should be called once it stands on its own is for somebody reading it to choose",
    };
    return unspelled;
  }
  let closed = property_get(row, "closed");
  let unbindable = js_binding_names_unbindable();
  let blocked = list_intersect(closed, unbindable);
  let blocked_any = list_empty_not_is(blocked);
  if (blocked_any) {
    let refused = {
      nested,
      blocked,
      why: "the piece inside reads a word the language will not let a function bind, so moving it out would have to hand that word in through a parameter list, which is the one place the word is refused",
    };
    return refused;
  }
  let search = await function_exists(f_name_new);
  let taken = property_get(search, "exists");
  if (taken) {
    let spoken_for = {
      nested,
      f_name_new,
      why: "a function already answers to the name this one would take, and whether the two are the same work is a question for somebody reading both",
    };
    return spoken_for;
  }
  return null;
}
