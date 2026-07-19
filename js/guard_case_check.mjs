import { guard_check } from "./guard_check.mjs";
import { property_get } from "./property_get.mjs";

// One case of the guard corpus: run the command past the real hook and report
// the verdict it actually produced alongside the one the corpus expects.
export async function guard_case_check(c) {
  let command = property_get(c, "command");
  let expected = property_get(c, "decision");
  let result = await guard_check(command);
  let actual = property_get(result, "decision");
  return { command, expected, actual, pass: actual === expected };
}
