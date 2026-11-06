import { arguments_assert } from "./arguments_assert.mjs";
import { reply_rules_code_hash } from "./reply_rules_code_hash.mjs";
import { reply_attempts_remembered_others_delete } from "./reply_attempts_remembered_others_delete.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { app_shared_message_reply_choices } from "./app_shared_message_reply_choices.mjs";
export async function reply_rules_remembered() {
  arguments_assert(arguments, 0);
  ("The reply rules, ready to read many messages, together with the word for the code they were built by - so each answer can be looked for among the ones already kept before it is worked out again.");
  ("Answers kept for older versions of the code are taken away here, once for a whole batch of messages rather than once for each. Failing to take them away costs only disk, so it is not allowed to stop the reading.");
  let code_hash = await reply_rules_code_hash();
  async function others_delete() {
    await reply_attempts_remembered_others_delete(code_hash);
  }
  await catch_null_async(others_delete);
  let start = app_shared_message_reply_choices();
  let rules = {
    code_hash,
    start,
  };
  return rules;
}
