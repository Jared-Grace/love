import { permission_settings_allow_rename_write } from "./permission_settings_allow_rename_write.mjs";
import { memory_fn_references_rename_report } from "./memory_fn_references_rename_report.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_rename_inner } from "./function_rename_inner.mjs";
import { function_rename_check } from "./function_rename_check.mjs";
import { equal_not_assert_json } from "./equal_not_assert_json.mjs";
export async function function_rename(f_name_before, f_name_after) {
  arguments_assert(arguments, 2);
  equal_not_assert_json(f_name_before, f_name_after, {
    hint: "the new name should differ from the old name — is this actually a rename?",
  });
  await function_rename_check(f_name_after);
  f_name_before = await function_rename_inner(f_name_before, f_name_after);
  ("a standing approval names the function as plain text, so the generated rules file has to be written out again when the function it names moves - it follows nothing on its own, and until it is rewritten the command quietly goes back to asking");
  await permission_settings_allow_rename_write(f_name_before, f_name_after);
  ("aliases already follow a rename; memory notes are the other named referrer, so marked pointers follow too and bare mentions are reported for a human to weigh");
  await memory_fn_references_rename_report(f_name_before, f_name_after);
  return f_name_before;
}
