import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { permission_file_hook_check } from "./permission_file_hook_check.mjs";
export async function permission_file_hook_live_case_check(c) {
  "One case of the live file-hook corpus: put the case's tool and path to the real hook and report the verdict it gave beside the one the case declares.";
  arguments_assert(arguments, 1);
  let label = property_get(c, "label");
  let tool_name = property_get(c, "tool_name");
  let file_path = property_get(c, "file_path");
  let expected = property_get(c, "decision");
  let result = await permission_file_hook_check(tool_name, file_path);
  let actual = property_get(result, "decision");
  let r = {
    label,
    expected,
    actual,
    note: tool_name + " " + file_path,
    pass: equal(actual, expected),
  };
  return r;
}
