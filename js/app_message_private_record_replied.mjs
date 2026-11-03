import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { reply_attempt } from "./reply_attempt.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
export async function app_message_private_record_replied(record, start) {
  arguments_assert(arguments, 2);
  ("One message record carrying what the reply rules would say back to it. The rule set is handed in because building it is most of the work and it is the same for every message.");
  let message = property_get(record, "message");
  let attempt = await reply_attempt(message, start);
  let carried = {
    reply: attempt,
  };
  object_merge_set(carried, record);
  return carried;
}
