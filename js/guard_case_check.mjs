import { guard_check } from "./guard_check.mjs";
import { property_get } from "./property_get.mjs";
import { guard_case_reason_note } from "./guard_case_reason_note.mjs";

// One case of the guard corpus: run the command past the real hook and report
// the verdict it actually produced alongside the one the corpus expects.
export async function guard_case_check(c) {
  let command = property_get(c, "command");
  let expected = property_get(c, "decision");
  let result = await guard_check(command);
  let actual = property_get(result, "decision");
  let note = guard_case_reason_note(c, result);
  return { command, expected, actual, note, pass: actual === expected && note === "" };
}
