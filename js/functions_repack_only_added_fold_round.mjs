import { arguments_assert } from "./arguments_assert.mjs";
import { functions_repack_only_added } from "./functions_repack_only_added.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { functions_expand_all_delete } from "./functions_expand_all_delete.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { not } from "./not.mjs";
export async function functions_repack_only_added_fold_round(refused) {
  arguments_assert(arguments, 1);
  ("One pass over the functions that only take a record apart and put it back together and were not there when the ratchet was set: each one's lines are put back where they were called from and the function itself goes away, and each goes into the log under its own name as it lands.");
  ("The names already known to refuse are handed in and left alone, so that a walk of these rounds cannot circle forever on the same one. Everything else is asked again from the repo at the start of every round, because folding one changes the bodies around it and can turn a caller into one of these itself.");
  ("A name that will not fold is not a fault to stop on - it is a body somebody has to read - so it is caught, named, and stepped over, and the rest of the round goes on.");
  let added = await functions_repack_only_added();
  let left = list_without_multiple(added, refused);
  let folded = [];
  let refusing = [];
  for (let f_name of left) {
    async function fold_run() {
      await function_call_commit(functions_expand_all_delete, [f_name]);
      return f_name;
    }
    let outcome = await catch_null_async(fold_run);
    let done_is = null_not_is(outcome);
    if (done_is) {
      folded.push(f_name);
    }
    if (not(done_is)) {
      refusing.push(f_name);
    }
  }
  let r = {
    folded,
    refusing,
  };
  return r;
}
