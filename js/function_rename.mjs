import { arguments_assert } from "./arguments_assert.mjs";
import { equal_not_assert_json } from "./equal_not_assert_json.mjs";
import { function_rename_check } from "./function_rename_check.mjs";
import { folders_function_named_rename_check } from "./folders_function_named_rename_check.mjs";
import { function_rename_inner } from "./function_rename_inner.mjs";
import { permission_settings_allow_rename_report } from "./permission_settings_allow_rename_report.mjs";
import { memory_fn_references_rename_report } from "./memory_fn_references_rename_report.mjs";
import { storage_local_key_owner_renamed_record } from "./storage_local_key_owner_renamed_record.mjs";
import { folders_function_named_rename } from "./folders_function_named_rename.mjs";
export async function function_rename(f_name_before, f_name_after) {
  arguments_assert(arguments, 2);
  equal_not_assert_json(f_name_before, f_name_after, {
    hint: "the new name should differ from the old name — is this actually a rename?",
  });
  await function_rename_check(f_name_after);
  ("a store on this disk is named after the function that owns it, so a name already holding one is as taken as a name already bound - asked before anything moves, because code renamed away from its own data is worse than a rename left undone");
  await folders_function_named_rename_check(f_name_after);
  f_name_before = await function_rename_inner(f_name_before, f_name_after);
  ("a standing approval names the function as plain text, so the generated rules file stops matching when the function it names moves. renaming is itself auto-approved, so this says so rather than writing the file - an auto-approved command that edits the allow list is the one shape the permission system refuses, and it refused this");
  permission_settings_allow_rename_report(f_name_before, f_name_after);
  ("aliases already follow a rename; memory notes are the other named referrer, so marked pointers follow too and bare mentions are reported for a human to weigh");
  await memory_fn_references_rename_report(f_name_before, f_name_after);
  ("a browser storage key is the owning function's own name, so settings people saved are filed under the old name. The rename is recorded, and the browser carries those settings across to the new name the first time it reads them");
  await storage_local_key_owner_renamed_record(f_name_before, f_name_after);
  ("a store on this disk is reachable, so it is moved rather than reported - the sentence a browser key gets is only a sentence because nothing here can reach that disk");
  await folders_function_named_rename(f_name_before, f_name_after);
  return f_name_before;
}
