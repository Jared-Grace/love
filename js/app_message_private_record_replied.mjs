import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { reply_attempt_remembered } from "./reply_attempt_remembered.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
export async function app_message_private_record_replied(record, rules) {
  arguments_assert(arguments, 2);
  ("One message record carrying what the reply rules would say back to it. The rule set is handed in because building it is most of the work and it is the same for every message. It comes with the word for the code it was built by, so an answer that code already worked out for this message is handed back rather than worked out again.");
  let message = property_get(record, "message");
  let attempt = await reply_attempt_remembered(message, rules);
  let carried = {
    reply: attempt,
  };
  object_merge_set(carried, record);
  return carried;
}
