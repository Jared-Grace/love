import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_import } from "./function_import.mjs";
import { app_message_private_records_replied } from "./app_message_private_records_replied.mjs";
import { reply_case_key } from "./reply_case_key.mjs";
import { reply_attempt } from "./reply_attempt.mjs";
export async function reply_unanswered_read_as_far(f_name) {
  arguments_assert(arguments, 1);
  ("How far into each different waiting message a drafted rule set can read, as a count of letters. f_name is a function that hands back the whole rule set.");
  ("★ IT TELLS WHERE A RULE STOPS WITHOUT SAYING WHAT IS THERE. Whether a draft answers a message is one bit, and when the answer is no, the next question is which part stopped it. The words cannot be looked at here, so this asks the rules about every opening of the message in turn and reports only the length of the longest one they could read to its end.");
  let f = await function_import(f_name);
  let start = f();
  let records = await app_message_private_records_replied();
  let seen = new Set();
  let rows = [];
  for (let record of records) {
    if (record.reply.answered) {
      continue;
    }
    let key = reply_case_key(record.message);
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    let letters = record.message.length;
    let read = 0;
    for (let size = letters; greater_than(size, 0); size--) {
      let message2 = record.message.slice(0, size);
      let attempt = await reply_attempt(message2, start);
      if (attempt.answered) {
        read = size;
        break;
      }
    }
    rows.push({
      key,
      letters,
      read,
    });
  }
  return rows;
}
