import { arguments_assert } from "./arguments_assert.mjs";
import { reply_cases } from "./reply_cases.mjs";
import { app_message_reply_choices } from "./app_message_reply_choices.mjs";
import { property_get } from "./property_get.mjs";
import { reply_attempt } from "./reply_attempt.mjs";
import { json_equal } from "./json_equal.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function reply_cases_checked() {
  arguments_assert(arguments, 0);
  ("Every worked case run through the reply rules as they stand, each one carrying what it expected, what it got, and whether those are the same.");
  ("It answers rather than throws, so the same reading serves the gate that must fail on a difference and the screen that must show one. A gate is a reading plus a refusal, and putting the refusal here would mean the screen could only ask by catching a complaint.");
  ("The rule set is built once and handed to every case, because building it is most of the work and it does not depend on the message.");
  ("★ THE BREAKING IS CARRIED THROUGH RATHER THAN FOLDED INTO NOT-MATCHING. A case whose rules throw part way through is a defect, and a case nobody has written a rule for yet is not; told apart here, the difference survives all the way to whoever reads it.");
  let cases = await reply_cases();
  let start = app_message_reply_choices();
  async function lambda(one) {
    let message = property_get(one, "message");
    let attempt = await reply_attempt(message, start);
    let answered = property_get(attempt, "answered");
    let outputs = property_get(attempt, "outputs");
    let broke = property_get(attempt, "broke");
    let answered_wanted = property_get(one, "answered");
    let outputs_wanted = property_get(one, "outputs");
    let same_answered = json_equal(answered, answered_wanted);
    let same_outputs = json_equal(outputs, outputs_wanted);
    let ok = same_answered && same_outputs;
    let checked = {
      from: property_get(one, "from"),
      message,
      ok,
      broke,
      answered,
      answered_wanted,
      outputs,
      outputs_wanted,
    };
    return checked;
  }
  let all = await list_map_async(cases, lambda);
  return all;
}
