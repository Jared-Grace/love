import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { reply_attempts_remembered_folder } from "./reply_attempts_remembered_folder.mjs";
import { path_join } from "./path_join.mjs";
import { reply_case_key } from "./reply_case_key.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { http_json_memoized_failures } from "./http_json_memoized_failures.mjs";
import { reply_attempt } from "./reply_attempt.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function reply_attempt_remembered(message, rules) {
  arguments_assert(arguments, 2);
  ("What the reply rules make of one message, handed back from the answers already kept when this same code has read this same message before, and worked out and kept otherwise.");
  ("★ AN ANSWER IS KEPT ONLY WHEN NOTHING WAS MISSING WHILE IT WAS WORKED OUT. The rules fetch Bible text over the network, and a fetch that fails leaves its verse out without saying so. Kept, that short answer would stand in for the whole one until the code next changed. So the count of failed fetches is read on both sides of the work, and an answer is kept only when it did not move. An answer from rules that broke is not kept either: it is shown, and worked out again next time.");
  ("The code is the whole key, so an answer is never handed back after the rules change. What lies outside the code - the Bible text itself, fetched by address - is not in the key; an answer kept before that text was changed keeps the old words until the rules' code next changes.");
  ("Keeping is not allowed to stop the answer being given: a read or a write that fails here only means the work is done again.");
  let code_hash = property_get(rules, "code_hash");
  let folder = reply_attempts_remembered_folder(code_hash);
  let path = path_join([folder, reply_case_key(message) + ".json"]);
  async function kept_read() {
    let present = await file_exists(path);
    if (not(present)) {
      return null;
    }
    let kept = await file_read_json(path);
    return kept;
  }
  let kept = await catch_null_async(kept_read);
  if (not_equal(kept, null)) {
    return kept;
  }
  let failures_before = http_json_memoized_failures();
  let start = property_get(rules, "start");
  let attempt = await reply_attempt(message, start);
  let failures_after = http_json_memoized_failures();
  let whole =
    equal(failures_before, failures_after) &&
    not(property_get(attempt, "broke"));
  if (whole) {
    async function keep() {
      await file_overwrite_json(path, attempt);
    }
    await catch_null_async(keep);
  }
  return attempt;
}
