import { arguments_assert } from "./arguments_assert.mjs";
import { app_message_private_records_replied } from "./app_message_private_records_replied.mjs";
import { reply_case_key } from "./reply_case_key.mjs";
import { reply_message_words } from "./reply_message_words.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
export async function reply_unanswered_word_positions(asked) {
  arguments_assert(arguments, 1);
  ("Where the words asked about sit in each different waiting message, as word positions. asked is the words, joined by commas.");
  ("★ THE ANSWER HOLDS ONLY THE WORDS ASKED AND NUMBERS, BECAUSE THE REST IS PRIVATE. When a drafted rule reads nothing at a place, this says whether the words it expected are there at all, without printing what is.");
  let words_asked = asked.split(",");
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
    let words = reply_message_words(record.message);
    function lambda(w) {
      let r = w.toLowerCase().replace(/[^a-z0-9']/g, "");
      return r;
    }
    let cleaned = words.map(lambda);
    let positions = {};
    for (let word of words_asked) {
      let found = [];
      for (let i = 0; less_than(i, cleaned.length); i++) {
        if (equal(cleaned[i], word)) {
          found.push(i);
        }
      }
      positions[word] = found;
    }
    rows.push({
      key,
      words: words.length,
      positions,
    });
  }
  return rows;
}
