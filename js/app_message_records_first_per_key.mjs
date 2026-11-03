import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { reply_case_key } from "./reply_case_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
export function app_message_records_first_per_key(records) {
  arguments_assert(arguments, 1);
  ("Message records, each filed under the short word that stands for its words, so a written-down case can find the message it was drawn from.");
  ("★ THE FIRST MESSAGE WEARING A KEY IS THE ONE KEPT, NOT THE LAST. The same words get sent by several people and get sent twice by one, so a key really does stand for a handful of messages rather than one; filed the ordinary way each new arrival would quietly replace the one before it, and the case would end up shown against whichever copy happened to be read last. Any one of them answers the question being asked - what do the rules do with these words - so the first is taken and the rest are passed over.");
  let by_key = {};
  for (let record of records) {
    let message = property_get(record, "message");
    let key = reply_case_key(message);
    let already = property_get_or_null(by_key, key);
    if (already) {
      continue;
    }
    property_set(by_key, key, record);
  }
  return by_key;
}
