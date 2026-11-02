import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_message_reply_records_by_key } from "./app_message_reply_records_by_key.mjs";
import { reply_cases_path } from "./reply_cases_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { reply_case_key } from "./reply_case_key.mjs";
export async function reply_cases_rewrites_words_invented() {
  arguments_assert(arguments, 0);
  ("Says of every saved test rewritten from a real message which of the test's own words the real message does not hold, which is to say what the rewrite made up.");
  ("★ EVERY WORD IN THE ANSWER IS A WORD OF A PUBLIC TEST AND NONE IS A WORD ONLY THE PRIVATE MESSAGE HOLDS. Asked the other way round, for the real words the test dropped, this would print exactly the details the rewrite was there to hide. Asked this way it says the same thing about what was swapped, and is safe to read aloud.");
  ("The real message is searched with its spaces taken out, because messages here run words together and a word welded to its neighbour is still a word it holds.");
  let by_key = await app_message_reply_records_by_key();
  let path_cases = reply_cases_path();
  let cases = await file_read_json(path_cases);
  function squashed_of(said) {
    let r = said
      .toLowerCase()
      .replace(/['’]/g, "")
      .replace(/[^\p{L}\p{N}]+/gu, "");
    return r;
  }
  let rewrites = [];
  for (let one of cases) {
    let key_own = reply_case_key(one.message);
    if (equal(key_own, one.from)) {
      continue;
    }
    let real = by_key[one.from];
    let real_squashed = squashed_of(real.message);
    let cleaned = one.message.toLowerCase().replace(/['’]/g, "");
    let parts = cleaned.split(/[^\p{L}\p{N}]+/u);
    function invented(part) {
      let r2 =
        greater_than(part.length, 0) && not(real_squashed.includes(part));
      return r2;
    }
    let v = parts.filter(invented);
    rewrites.push({
      test: "reply_case_" + key_own,
      invented: [...new Set(v)],
    });
  }
  return rewrites;
}
