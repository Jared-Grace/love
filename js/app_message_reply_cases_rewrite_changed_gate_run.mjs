import { arguments_assert } from "./arguments_assert.mjs";
import { app_message_reply_cases_rewrite_changed } from "./app_message_reply_cases_rewrite_changed.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function app_message_reply_cases_rewrite_changed_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every test rewritten from a real message gets the same answer as that real message. Throws so the dispatcher seam exits nonzero.");
  ("★ A TEST THAT ANSWERS DIFFERENTLY STANDS FOR NOTHING. It can pass while the person who wrote the real message goes unanswered, and nothing else would say so.");
  ("★ WHAT IT THROWS HOLDS NO WORD OF A REAL MESSAGE, because what it asks only ever tells the rewritten test's public words and counts about the real one.");
  let changed = await app_message_reply_cases_rewrite_changed();
  list_empty_is_assert_json(changed, {
    changed,
    hint: "rewrite these tests until each gets the answer its real message gets - if that answer is no reply, the test belongs on the no reply yet list",
  });
  let r = {
    changed: 0,
  };
  return r;
}
