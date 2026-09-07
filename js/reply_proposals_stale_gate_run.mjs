import { arguments_assert } from "./arguments_assert.mjs";
import { reply_proposals_stale } from "./reply_proposals_stale.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function reply_proposals_stale_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: a written-down change to the reply rules still describes the code it would change. Throws so the dispatcher seam exits nonzero.");
  ("A stale proposal fails silently in the worst possible way - it is read and approved, and what gets approved is a comparison against a function that has since been rewritten by somebody else. The approval is then for a change nobody can make.");
  let stale = await reply_proposals_stale();
  list_empty_is_assert_json(stale, {
    stale,
    hint: "a proposal says these lines are in the code as it stands and they are not - read the function as it is now, work the change out again against it, and write the proposal again from that",
  });
  let r = {
    stale: 0,
  };
  return r;
}
