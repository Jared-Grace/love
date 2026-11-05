import { math_min } from "./math_min.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_import } from "./function_import.mjs";
import { app_message_private_records_replied } from "./app_message_private_records_replied.mjs";
import { reply_case_key } from "./reply_case_key.mjs";
import { reply_attempt } from "./reply_attempt.mjs";
export async function reply_unanswered_stretches(f_name) {
  arguments_assert(arguments, 1);
  ("Which stretches of each different waiting message a drafted rule set can read, as word positions. f_name is a function that hands back the whole rule set.");
  ("★ THE ANSWER HOLDS ONLY NUMBERS, BECAUSE THE WORDS ARE PRIVATE. Reading how far from the start stops at the first unknown part, so it cannot say whether the parts after it are known. This asks from every word, and keeps for each the longest run the rules read to its end.");
  ("★ A RUN IS TRIED UP TO FIFTY WORDS, BECAUSE A BIBLE VERSE ONLY READS WHOLE. A shorter limit reports a verse the rules know as a gap. So a stretch that reaches fifty may go on further, and the next stretch starts where it stopped.");
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
    let words = record.message.split(/\s+/).filter(Boolean);
    let stretches = [];
    let from = 0;
    while (less_than(from, words.length)) {
      let found = 0;
      let b = subtract(words.length, from);
      let longest = math_min(50, b);
      for (let size = longest; greater_than(size, 0); size--) {
        let piece = words.slice(from, from + size).join(" ");
        let attempt = await reply_attempt(piece, start);
        if (attempt.answered) {
          found = size;
          break;
        }
      }
      if (greater_than(found, 0)) {
        stretches.push([from, from + found]);
        from += found;
      } else {
        from += 1;
      }
    }
    rows.push({
      key,
      words: words.length,
      stretches,
    });
  }
  return rows;
}
