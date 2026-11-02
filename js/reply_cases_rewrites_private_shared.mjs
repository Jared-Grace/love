import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_message_private_records } from "./app_message_private_records.mjs";
import { reply_cases_path } from "./reply_cases_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { reply_names_common } from "./reply_names_common.mjs";
import { reply_case_key } from "./reply_case_key.mjs";
export async function reply_cases_rewrites_private_shared() {
  arguments_assert(arguments, 0);
  ("Says of every saved test rewritten from a real message how much of that real message it still holds, as counts and never as words, so a rewrite that kept somebody's details can be found without printing them.");
  ("★ THE ANSWER HOLDS NO WORD OF ANY MESSAGE, AND THAT IS WHAT LETS IT BE READ AT ALL. The question is about private text and the answer lands in a terminal and a transcript, so only test names and counts ever leave this function.");
  ("★ IT ASKS FROM THE REAL MESSAGE TOWARDS THE REWRITE, INSIDE THE REWRITE WITH ITS SPACES TAKEN OUT. Messages here often run words together, so splitting both into words and comparing the lists would miss a kept name welded to its neighbour and report it clean. The cost is a short name found inside a longer word, which reads as kept when it was not: this errs towards looking.");
  ("★ RARE IS MEASURED IN PEOPLE, NOT IN OCCURRENCES. A word only one or two senders ever wrote is what can point at somebody, however often they wrote it, and no list of towns can be relied on to hold every town.");
  ("★ THE TESTS THAT ARE THEIR REAL MESSAGE WORD FOR WORD ARE THE CONTROL. Each must hold all of its own words, so a broken comparison reporting zero everywhere shows up as a failed control and cannot pass for a clean result.");
  let records = await app_message_private_records();
  let path_cases = reply_cases_path();
  let cases = await file_read_json(path_cases);
  function lower_each(word) {
    let r = word.toLowerCase();
    return r;
  }
  let v = reply_names_common().map(lower_each);
  let names_known = new Set(v);
  function message_tokens(said) {
    let cleaned = said.toLowerCase().replace(/['’]/g, "");
    let parts = cleaned.split(/[^\p{L}\p{N}]+/u);
    function long_enough(part) {
      let ge = greater_than_equal(part.length, 3);
      return ge;
    }
    let v2 = parts.filter(long_enough);
    let r2 = [...new Set(v2)];
    return r2;
  }
  let people_by_token = new Map();
  let record_by_key = new Map();
  for (let record of records) {
    let key_record = reply_case_key(record.message);
    let b = record_by_key.has(key_record);
    if (not(b)) {
      record_by_key.set(key_record, record);
    }
    for (let token of message_tokens(record.message)) {
      let b2 = people_by_token.has(token);
      if (not(b2)) {
        people_by_token.set(token, new Set());
      }
      people_by_token.get(token).add(record.who);
    }
  }
  function kept_in(real, rewrite) {
    let squashed = rewrite.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, "");
    let tokens_real = message_tokens(real);
    function kept(token) {
      let r3 = squashed.includes(token);
      return r3;
    }
    let tokens_kept = tokens_real.filter(kept);
    function rare(token) {
      let le = less_than_equal(people_by_token.get(token).size, 2);
      return le;
    }
    function digits_only(token) {
      let r4 = /^\p{N}+$/u.test(token);
      return r4;
    }
    function name_known(token) {
      let r5 = names_known.has(token);
      return r5;
    }
    let r6 = {
      words_real: tokens_real.length,
      kept: tokens_kept.length,
      kept_rare: tokens_kept.filter(rare).length,
      kept_numbers: tokens_kept.filter(digits_only).length,
      kept_names: tokens_kept.filter(name_known).length,
    };
    return r6;
  }
  let rewrites = [];
  let control_checked = 0;
  let control_failed = 0;
  let missing = 0;
  for (let one of cases) {
    let key_own = reply_case_key(one.message);
    let found = record_by_key.get(one.from);
    if (not(found)) {
      missing++;
      rewrites.push({
        test: "reply_case_" + key_own,
        found: false,
      });
      continue;
    }
    let counts = kept_in(found.message, one.message);
    if (equal(key_own, one.from)) {
      control_checked++;
      if (not_equal(counts.kept, counts.words_real)) {
        control_failed++;
      }
      continue;
    }
    rewrites.push({
      test: "reply_case_" + key_own,
      found: true,
      ...counts,
    });
  }
  let r7 = {
    messages: records.length,
    cases: cases.length,
    control_checked,
    control_failed,
    missing,
    rewrites,
  };
  return r7;
}
