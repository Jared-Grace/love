import { arguments_assert } from "./arguments_assert.mjs";
import { reply_proposals_cases_wrong } from "./reply_proposals_cases_wrong.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function reply_proposals_cases_wrong_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every waiting change to the reply rules answers its own worked messages the way it says it does. Throws so the dispatcher seam exits nonzero.");
  ("A wrong worked message is approved like a right one - the screen shows the claimed answer, never the real one - so the first place it would otherwise show is a real person's reply.");
  let wrong = await reply_proposals_cases_wrong();
  list_empty_is_assert_json(wrong, {
    wrong,
    hint: "a waiting change claims these answers and the rules with the change in would give others - rewrite the change or its worked messages until they agree",
  });
  let r = {
    wrong: 0,
  };
  return r;
}
