import { property_text_includes } from "./property_text_includes.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { memory_hook_check } from "./memory_hook_check.mjs";
export async function memory_hook_case_check(c) {
  "One case of the memory-path corpus: run the payload past the real hook and report the decision it actually produced alongside the one the corpus expects.";
  "The reason is only inspected when the corpus asks for it, because an abstaining hook returns no reason at all - reading one would fail on the very outcome it is checking.";
  let tool = property_get(c, "tool");
  let path = property_get(c, "path");
  let expected = property_get(c, "decision");
  let reason_includes = property_get(c, "reason_includes");
  let result = await memory_hook_check(tool, path);
  let actual = property_get(result, "decision");
  let note = "";
  if (not_equal(reason_includes, "") && equal(actual, expected)) {
    let b = property_text_includes(result, "reason", reason_includes);
    if (not(b)) {
      note = "reason does not name " + reason_includes;
    }
  }
  let label = tool + " " + path;
  let r = {
    label,
    expected,
    actual,
    note,
    pass: equal(actual, expected) && equal(note, ""),
  };
  return r;
}
