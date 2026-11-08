import { less_than } from "./less_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_import } from "./function_import.mjs";
import { reply_attempt } from "./reply_attempt.mjs";
import { app_message_private_records_replied_people } from "./app_message_private_records_replied_people.mjs";
import { reply_case_key } from "./reply_case_key.mjs";
import { reply_message_words } from "./reply_message_words.mjs";
export async function reply_unanswered_read_after(f_name, lead, control) {
  arguments_assert(arguments, 3);
  ("After the words of lead in each different waiting message, whether each of the next five words is read when it alone follows lead. f_name hands back the whole rule set; lead is words joined by commas; control is a word expected to be read, asked first so that a row of noes can be trusted.");
  ("★ THE ANSWER HOLDS ONLY YES, NO AND HOW LONG, BECAUSE THE WORDS ARE PRIVATE. When a stretch is unread, this says which word in it stopped the rules without printing the word.");
  let f = await function_import(f_name);
  let start = f();
  let lead_words = lead.split(",");
  let spoken = lead_words.join(" ");
  let control_attempt = await reply_attempt(`${spoken} ${control}`, start);
  let records = await app_message_private_records_replied_people();
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
    let words = reply_message_words(record.message);
    function cleaned_is_lead(unused, i) {
      for (let j = 0; less_than(j, lead_words.length); j++) {
        let word = words[i + j] ?? "";
        let left = word.toLowerCase().replace(/[^a-z]/g, "");
        if (not_equal(left, lead_words[j])) {
          return false;
        }
      }
      return true;
    }
    let at = words.findIndex(cleaned_is_lead);
    if (less_than(at, 0)) {
      rows.push({
        key,
        at,
        next: [],
      });
      continue;
    }
    let from = at + lead_words.length;
    let next = [];
    for (let word of words.slice(from, from + 5)) {
      let attempt = await reply_attempt(`${spoken} ${word}`, start);
      next.push({
        letters: word.length,
        read: attempt.answered,
      });
    }
    rows.push({
      key,
      at,
      next,
    });
  }
  let r = {
    control_read: control_attempt.answered,
    rows,
  };
  return r;
}
