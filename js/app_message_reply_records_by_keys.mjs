import { arguments_assert } from "./arguments_assert.mjs";
import { app_message_private_records } from "./app_message_private_records.mjs";
import { app_message_records_first_per_key } from "./app_message_records_first_per_key.mjs";
import { app_shared_message_reply_choices } from "./app_shared_message_reply_choices.mjs";
import { list_unique } from "./list_unique.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { not } from "./not.mjs";
import { app_message_private_record_replied } from "./app_message_private_record_replied.mjs";
import { property_set } from "./property_set.mjs";
export async function app_message_reply_records_by_keys(keys) {
  arguments_assert(arguments, 1);
  ("The messages on this machine's disk that the given keys name, each carrying what the reply rules would say back to it, filed under its key. A key naming no message on this machine is simply left out, which is how a case with nothing behind it reads.");
  ("★ ONLY THE NAMED MESSAGES ARE READ BY THE RULES, because reading one is what takes the time and a screen showing some of them has no use for the replies to the rest. Measured 2026-11-03, replying to all 30 was the largest part of the reply review page's load.");
  let records = await app_message_private_records();
  let first = app_message_records_first_per_key(records);
  let start = app_shared_message_reply_choices();
  let by_key = {};
  for (let key of list_unique(keys)) {
    let record = property_get_or_null(first, key);
    if (not(record)) {
      continue;
    }
    let replied = await app_message_private_record_replied(record, start);
    property_set(by_key, key, replied);
  }
  return by_key;
}
