import { arguments_assert } from "./arguments_assert.mjs";
import { app_message_private_records_replied } from "./app_message_private_records_replied.mjs";
import { app_message_records_first_per_key } from "./app_message_records_first_per_key.mjs";
export async function app_message_reply_records_by_key() {
  arguments_assert(arguments, 0);
  ("Every message on this machine's disk, each one filed under the short word that stands for it, so a written-down case can find the message it was drawn from.");
  ("★ THE CASES AND THE MESSAGES CAN ONLY MEET ON THIS MACHINE. A case is public and carries a rewritten message and the key; the real message is private and never leaves the folder it sits in. The key is what lets the two be laid side by side here without either of them having to hold the other.");
  let records = await app_message_private_records_replied();
  let by_key = app_message_records_first_per_key(records);
  return by_key;
}
