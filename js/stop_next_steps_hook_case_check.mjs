import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { stop_next_steps_hook_check } from "./stop_next_steps_hook_check.mjs";
export async function stop_next_steps_hook_case_check(c) {
  "One case of the stop-hook corpus: lay the made-up conversation down, put it to the real hook, and report the verdict it gave beside the one the case declares.";
  arguments_assert(arguments, 1);
  let label = property_get(c, "label");
  let entries = property_get(c, "entries");
  let expected = property_get(c, "decision");
  let result = await stop_next_steps_hook_check(entries);
  let actual = property_get(result, "decision");
  let r = {
    label,
    expected,
    actual,
    note: "",
    pass: equal(actual, expected),
  };
  return r;
}
