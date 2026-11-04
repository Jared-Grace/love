import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_message_private_records_replied } from "./app_message_private_records_replied.mjs";
import { reply_cases } from "./reply_cases.mjs";
import { reply_case_key } from "./reply_case_key.mjs";
export async function reply_unanswered_cases() {
  arguments_assert(arguments, 0);
  ("The real messages still waiting for a reply, one row per different wording: how many people sent it, how long it is, and whether a written-down test already stands for it.");
  ("★ IT SAYS HOW MANY AND HOW LONG, NEVER THE WORDS. The words live outside every repository, so a row carries only the short key standing for them. That is enough to tell whether the next message worth a rule is one already rewritten as a test or one nobody has looked at, which the shapes beside this cannot say: a message run together with no spaces has a shape of a few dots whatever it says.");
  let records = await app_message_private_records_replied();
  let cases = await reply_cases();
  let rows = new Map();
  for (let record of records) {
    if (record.reply.answered) {
      continue;
    }
    let key = reply_case_key(record.message);
    let row = rows.get(key);
    if (row) {
      row.count = row.count + 1;
      continue;
    }
    function lambda(one) {
      let eq = equal(one.from, key);
      return eq;
    }
    let tested = cases.some(lambda);
    rows.set(key, {
      key,
      count: 1,
      letters: record.message.length,
      tested,
    });
  }
  let r = [...rows.values()];
  return r;
}
