import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { functions_arguments_assert_mismatches } from "./functions_arguments_assert_mismatches.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_arguments_assert_count_repair } from "./function_arguments_assert_count_repair.mjs";
export async function functions_arguments_assert_count_repair() {
  arguments_assert(arguments, 0);
  ("Makes the argument check say the right number in exactly the functions where it says the wrong one.");
  ("It finds its own set rather than being handed one, so it cannot be run against a list that has gone stale, and what it repairs is always what the check is failing on right now.");
  ("Only the functions counting themselves with a bare number are repaired. The other kind names a test per argument, and which test a newly arrived argument should have to pass is a judgement about what that argument means - there is no right answer to reach for, so those are handed back for a person and left exactly as they were.");
  ("Asking the same question again afterwards is the only honest way to say it worked, since a repair that changed nothing looks identical to one that succeeded.");
  ("Each function is committed the moment it is repaired rather than all of them at the end, because everybody here shares one copy and a run lasting minutes ends with somebody else's sweep having taken the files first.");
  await ai_git_noted();
  let found = await functions_arguments_assert_mismatches();
  let offenders = property_get(found, "offenders");
  let repaired = [];
  let declined = [];
  for (let offender of offenders) {
    let f_name = property_get(offender, "f_name");
    let counted_is = property_get(offender, "counted_is");
    if (not(counted_is)) {
      list_add(declined, offender);
      continue;
    }
    let args = [f_name];
    await function_call_commit(function_arguments_assert_count_repair, args);
    list_add(repaired, f_name);
  }
  let left = await functions_arguments_assert_mismatches();
  let remaining = property_get(left, "offenders");
  let r = {
    repaired,
    declined,
    remaining,
  };
  return r;
}
