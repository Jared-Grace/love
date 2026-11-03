import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { json_equal } from "./json_equal.mjs";
export function app_reply_rules_rewrite_changed_is(one) {
  arguments_assert(arguments, 1);
  ("Whether a written-down test and the real message it stands for get different answers from the rules. A test standing for no real message has nothing to compare, so the answer is no.");
  let real = property_get(one, "real");
  if (not(real)) {
    return false;
  }
  let left = property_get(one, "answered");
  let right = property_get(real, "answered");
  let same_answered = json_equal(left, right);
  let left2 = property_get(one, "outputs");
  let right2 = property_get(real, "outputs");
  let same_outputs = json_equal(left2, right2);
  let same = same_answered && same_outputs;
  let n = not(same);
  return n;
}
