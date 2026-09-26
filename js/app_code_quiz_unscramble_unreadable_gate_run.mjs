import { app_code_quiz_unscramble_unreadable_accepted } from "./app_code_quiz_unscramble_unreadable_accepted.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function app_code_quiz_unscramble_unreadable_gate_run() {
  "Gate: no unscramble in the course accepts an answer that is not a line of code at all. Throws so the dispatcher seam exits nonzero.";
  "How many lines and orderings were looked at travels out with the verdict, because nothing unreadable is also what a course with no lines would say.";
  let rounds = 3;
  let swept = app_code_quiz_unscramble_unreadable_accepted(rounds);
  let walked = property_get(swept, "walked");
  let orderings = property_get(swept, "orderings");
  let accepted = property_get(swept, "found");
  let hint =
    "these lessons accept an answer the language cannot read - look at which road put it in the pool, and what kind of tile it moved";
  list_empty_is_assert_json(accepted, {
    hint,
  });
  let r = {
    walked,
    orderings,
    unreadable_accepted: 0,
  };
  return r;
}
