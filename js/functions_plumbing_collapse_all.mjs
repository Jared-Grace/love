import { not } from "./not.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_plumbing_collapse } from "./function_plumbing_collapse.mjs";
import { functions_work_oversize_names } from "./functions_work_oversize_names.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_size } from "./list_size.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_plumbing_collapse_all() {
  arguments_assert(arguments, 0);
  ("Walks every function standing over the ceiling, taking out of each one the lines that only carry a value from one name to another, and asks the list once more at the end.");
  ("The list is the whole point of doing this repo-wide. What put most of these functions over the ceiling is not work but carrying - a piece moved out of a body and later put back leaves the parcel it packed, the unpacking on the other side, and a second name for each unpacked thing, and none of that counts as anything except length. A body cut down this way is not merely shorter; it is shorter in exactly the part that a reader gains nothing from reading.");
  ("It runs before the cut rather than after. The cut names each piece it takes from the last word of the run it ends on, and a run ending on a carried name gets a name with a digit in it, which the cut refuses - so the carrying has to go first or the cut has nothing it is willing to take.");
  ("Each function is committed as it lands, under its own name and its own one argument, because these are as many separate changes as there are functions and a single commit at the end would claim to be one command that nobody could run again. Whatever was already waiting is committed first, so the first function cannot file somebody else's work under its name.");
  ("A function that cannot be read at all is passed over rather than allowed to end the sweep, because one unreadable file should not cost the answer about all the others.");
  ("It asks the list once more at the end. What that leaves is the functions still standing over the ceiling with nothing in them that was only being carried, which is real work and the cut's business rather than this one's.");
  await ai_git_noted();
  let named = await functions_work_oversize_names();
  let collapsed = [];
  let unsound = [];
  for (let f_name of named) {
    async function lambda() {
      let one = await function_call_commit(function_plumbing_collapse, [
        f_name,
      ]);
      return one;
    }
    let one = await catch_null_async(lambda);
    let missing = null_is(one);
    if (missing) {
      continue;
    }
    let ok = property_get(one, "ok");
    if (not(ok)) {
      list_add(unsound, f_name);
    }
    let moved = property_get(one, "collapsed");
    let empty_is = list_empty_is(moved);
    if (empty_is) {
      continue;
    }
    list_add(collapsed, {
      f_name,
      moved,
    });
  }
  let left = await functions_work_oversize_names();
  let remaining = list_size(left);
  let r = {
    collapsed,
    unsound,
    remaining,
  };
  return r;
}
