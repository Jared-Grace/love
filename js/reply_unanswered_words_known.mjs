import { arguments_assert } from "./arguments_assert.mjs";
import { file_read } from "./file_read.mjs";
import { reply_names_common } from "./reply_names_common.mjs";
import { reply_cities_names_all } from "./reply_cities_names_all.mjs";
import { reply_countries_names } from "./reply_countries_names.mjs";
import { app_message_private_records_replied_people } from "./app_message_private_records_replied_people.mjs";
import { reply_case_key } from "./reply_case_key.mjs";
import { reply_message_words } from "./reply_message_words.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
export async function reply_unanswered_words_known() {
  arguments_assert(arguments, 0);
  ("Each different waiting message with every word put to a question mark unless it is an ordinary dictionary word, so its shape can be read without its private details. Lines of ten words, each starting with the position of its first word.");
  ("★ A NAME OR A PLACE COMES OUT EVEN WHEN IT IS ALSO A DICTIONARY WORD, SO GRACE AND MARK BECOME QUESTION MARKS AND THE WORD LOVE CAN TOO. Losing a real word costs a guess; keeping a real name costs somebody's privacy. Numbers come out as well, since no number is in the dictionary.");
  ("The dictionary is the machine's own word list, lowercase entries only, because that list spells a proper noun with a capital and so a lowercase entry is an ordinary word.");
  let text = await file_read("/usr/share/dict/american-english");
  let lines = text.split("\n");
  function lambda(line) {
    let r = /^[a-z']+$/.test(line);
    return r;
  }
  let plain = lines.filter(lambda);
  let known = new Set(plain);
  let removed = new Set([
    ...reply_names_common(),
    ...reply_cities_names_all(),
    ...reply_countries_names(),
  ]);
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
    function lambda2(word) {
      let cleaned = word.toLowerCase().replace(/^[^a-z']+|[^a-z']+$/g, "");
      let bare = cleaned.replace(/'s$/, "");
      if (known.has(cleaned) && not(removed.has(bare))) {
        return cleaned;
      }
      let r2 = "?";
      return r2;
    }
    let shown = words.map(lambda2);
    let chunks = [];
    for (let i = 0; less_than(i, shown.length); i += 10) {
      chunks.push(i + ": " + shown.slice(i, i + 10).join(" "));
    }
    rows.push({
      key,
      chunks,
    });
  }
  return rows;
}
