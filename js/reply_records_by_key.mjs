import { arguments_assert } from "./arguments_assert.mjs";
import { app_message_private_records_replied } from "./app_message_private_records_replied.mjs";
import { property_get } from "./property_get.mjs";
import { reply_case_key } from "./reply_case_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
export async function reply_records_by_key() {
  arguments_assert(arguments, 0);
  ("Every message on this machine's disk, each one filed under the short word that stands for it, so a written-down case can find the message it was drawn from.");
  ("★ THE CASES AND THE MESSAGES CAN ONLY MEET ON THIS MACHINE. A case is public and carries a rewritten message and the key; the real message is private and never leaves the folder it sits in. The key is what lets the two be laid side by side here without either of them having to hold the other.");
  ("★ THE FIRST MESSAGE WEARING A KEY IS THE ONE KEPT, NOT THE LAST. The same words get sent by several people and get sent twice by one, so a key really does stand for a handful of messages rather than one; filed the ordinary way each new arrival would quietly replace the one before it, and the case would end up shown against whichever copy happened to be read last. Any one of them answers the question being asked - what do the rules do with these words - so the first is taken and the rest are passed over.");
  let records = await app_message_private_records_replied();
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
