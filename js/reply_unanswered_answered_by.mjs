import { arguments_assert } from "./arguments_assert.mjs";
import { function_import } from "./function_import.mjs";
import { app_message_private_records_replied_people } from "./app_message_private_records_replied_people.mjs";
import { reply_attempt } from "./reply_attempt.mjs";
import { reply_case_key } from "./reply_case_key.mjs";
export async function reply_unanswered_answered_by(f_name) {
  arguments_assert(arguments, 1);
  ("Whether a drafted rule set would answer the real messages still waiting for a reply, asked before anybody is shown the draft. f_name is a function that hands back the whole rule set.");
  ("★ A DRAFT IS WORTH SHOWING ONLY IF IT REACHES THE MESSAGE IT WAS WRITTEN FOR. A test is a rewriting of a real message, so a draft that answers the test can still miss the message itself, on a name or a town the rewriting changed. This asks the message itself, and says how many lines would go back and never what they say or what the message says.");
  let f = await function_import(f_name);
  let start = f();
  let records = await app_message_private_records_replied_people();
  let rows = [];
  for (let record of records) {
    if (record.reply.answered) {
      continue;
    }
    let attempt = await reply_attempt(record.message, start);
    rows.push({
      key: reply_case_key(record.message),
      answered: attempt.answered,
      broke: attempt.broke,
      lines: attempt.outputs.length,
    });
  }
  return rows;
}
