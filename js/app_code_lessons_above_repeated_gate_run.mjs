import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_above_repeated } from "./app_code_lessons_above_repeated.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
export function app_code_lessons_above_repeated_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: a step lesson never repeats the whole telling of the lesson after it without saying so, and never says so about a lesson that is not the one after it.");
  ("The human's goal, 2026-10-22: a step lesson and its regular lesson do not needlessly repeat their telling. Eight step-first pairs did, and were patched that day; this keeps the ninth from being written the old way.");
  ("IT RATCHETS AGAINST NOTHING. Nothing was found once the eight were patched, so a shrink-only record would hold nothing. Its control, the same walk with every mark ignored, found exactly those eight.");
  let found = app_code_lessons_above_repeated();
  let walked = property_get(found, "walked");
  let offenders = property_get(found, "offenders");
  let result = list_empty_is_assert_walked_generic(
    walked,
    offenders,
    "these step lessons repeat the telling of the lesson after them without saying so, or say so about the wrong lesson",
  );
  return result;
}
