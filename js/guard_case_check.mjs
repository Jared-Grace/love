import { equal } from "./equal.mjs";
import { guard_check } from "./guard_check.mjs";
import { property_get } from "./property_get.mjs";
import { guard_case_reason_note } from "./guard_case_reason_note.mjs";
("One case of the guard corpus: run the command past the real hook and report");
("the verdict it actually produced alongside the one the corpus expects.");
export async function guard_case_check(c) {
  let command = property_get(c, "command");
  let expected = property_get(c, "decision");
  let result = await guard_check(command);
  let actual = property_get(result, "decision");
  let note = guard_case_reason_note(c, result);
  ("The command is padded out to a fixed width so a run of these lines reads as");
  ("three columns; every corpus hands its case's one-line reading over under the");
  ("same name, which is what lets one frame print all of them.");
  let label = command.padEnd(44);
  let r = {
    label,
    expected,
    actual,
    note,
    pass: equal(actual, expected) && equal(note, ""),
  };
  return r;
}
