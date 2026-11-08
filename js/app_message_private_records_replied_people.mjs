import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_message_private_records_replied } from "./app_message_private_records_replied.mjs";
import { messages_real_quoted_allowed } from "./messages_real_quoted_allowed.mjs";
export async function app_message_private_records_replied_people() {
  arguments_assert(arguments, 0);
  ("Every message on this machine's disk with what the reply rules would say back, leaving out the ones this repo sent to itself as a test - so a count of messages still waiting counts only people.");
  ("★ THE GOAL IS EVERY MESSAGE ANSWERED, so 'waiting' must mean a person is waiting. On 2026-11-08 the one message counted as waiting was the verses app's own end-to-end test, 'please ignore', from 2026-07-21.");
  let records = await app_message_private_records_replied();
  let own = messages_real_quoted_allowed();
  function lambda(record) {
    let b = own.includes(record.message);
    let n = not(b);
    return n;
  }
  let people = records.filter(lambda);
  return people;
}
