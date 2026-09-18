import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_calls_walk_unwaited } from "./functions_calls_walk_unwaited.mjs";
import { property_get } from "./property_get.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function functions_calls_walk_unwaited_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: no job that has to be waited for is handed to a walk that has no way of waiting for it.");
  ("★ AGAINST ZERO, NOT AGAINST A RECORD OF WHAT THE REPO ALREADY CARRIED. The repo held exactly one of these and it is gone, so there is nothing to carry forward - and a baseline would be the wrong shape here anyway, because the whole nature of this fault is that the code goes on reporting success. A record of ones already allowed is a record of places that say they are fine, and no one would ever come back to them.");
  ("The count of walkers is checked before the verdict is, because an empty set of walkers makes every call in the repo innocent and the answer comes out green either way.");
  let found = await functions_calls_walk_unwaited();
  let walkers = property_get(found, "walkers");
  let reading_is = greater_than(walkers, 0);
  assert_json(reading_is, {
    found,
    hint: "no walker was found anywhere in the repo, which cannot be true - the reading itself has stopped working, so a green verdict from it means nothing",
  });
  let offenders = property_get(found, "offenders");
  list_empty_is_assert_json(offenders, {
    offenders,
    hint: "these hand a job that has to be waited for to a walk that calls it and carries straight on - the walk receives a promise, nobody waits for it, and a failure inside the job arrives later as a rejection outside every catch. walk with the waiting twin instead, or gather the jobs and wait for them all",
  });
  return found;
}
