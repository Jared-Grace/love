import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_message_reply_records_by_key } from "./app_message_reply_records_by_key.mjs";
import { reply_cases_path } from "./reply_cases_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { reply_case_key } from "./reply_case_key.mjs";
export async function reply_cases_rewrites_words_kept() {
  arguments_assert(arguments, 0);
  ("Says of every saved test rewritten from a real message which words of the real message the test still holds, spelled out.");
  ("★ EVERY WORD IN THE ANSWER IS ALSO IN THE PUBLIC TEST, BECAUSE BEING IN THE TEST IS THE CONDITION FOR BEING LISTED, so this prints nothing only the private message holds.");
  ("★ IT EXISTS BECAUSE ASKING WHICH TEST WORDS ARE MADE UP CANNOT SEE INSIDE A WELDED WORD. A test word running a town and a country together is absent from the real message as a whole even when the town alone is present, so that list can call a real detail made up. Asking from each real word towards the test has no such blind spot.");
  let by_key = await app_message_reply_records_by_key();
  let path_cases = reply_cases_path();
  let cases = await file_read_json(path_cases);
  let rewrites = [];
  for (let one of cases) {
    let key_own = reply_case_key(one.message);
    if (equal(key_own, one.from)) {
      continue;
    }
    let real = by_key[one.from];
    let squashed = one.message
      .toLowerCase()
      .replace(/['’]/g, "")
      .replace(/[^\p{L}\p{N}]+/gu, "");
    let cleaned = real.message.toLowerCase().replace(/['’]/g, "");
    let parts = cleaned.split(/[^\p{L}\p{N}]+/u);
    function kept(part) {
      let r = greater_than(part.length, 0) && squashed.includes(part);
      return r;
    }
    function dropped(part) {
      let r2 = greater_than(part.length, 0) && not(squashed.includes(part));
      return r2;
    }
    let v = parts.filter(kept);
    let v2 = parts.filter(dropped);
    rewrites.push({
      test: "reply_case_" + key_own,
      kept: [...new Set(v)],
      dropped_count: new Set(v2).size,
    });
  }
  return rewrites;
}
