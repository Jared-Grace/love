import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { permission_grant_names } from "./permission_grant_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
export function permission_settings_allow_rename_report(
  f_name_before,
  f_name_after,
) {
  "Says so when a function holding a standing approval has just been renamed, because the generated rules file still spells the old name and the command has quietly gone back to asking.";
  "A rule is matched as plain text. The list the rules are generated from follows a rename, since the name is spelled there as a reference; the generated file follows nothing, so until it is written out again the approval names a word nothing answers to. Measured on the rename that prompted this: four rules missing and four unaccounted for, and the gate that says so speaks only when somebody runs it.";
  "It reports rather than repairs, and that is the design rather than a shortcut. Renaming is itself auto-approved, so a rename that wrote the allow list would be an auto-approved command editing the file that decides what is auto-approved - the one shape this whole system exists to refuse. Writing the file from here was tried and the grants gate refused it outright, taking the standing approvals off rename and prefix-rename with it. So the writing stays behind a command the human approves; what changes is that nobody has to notice the breakage first.";
  let names = permission_grant_names();
  let granted = list_includes(names, f_name_before);
  if (not(granted)) {
    return;
  }
  let told =
    "the standing approval for " +
    f_name_before +
    " still spells the old name, so " +
    f_name_after +
    " will ask before it runs until the rules are written out again";
  console.log(told);
  console.log(
    text_combine_multiple([
      "  to repair   node scripts/ai.mjs ",
      fn_name("permission_settings_allow_write"),
    ]),
  );
}
