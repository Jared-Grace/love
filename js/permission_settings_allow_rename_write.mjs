import { permission_grant_names } from "./permission_grant_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_map } from "./list_map.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { permission_settings_allow_write_from } from "./permission_settings_allow_write_from.mjs";
export async function permission_settings_allow_rename_write(
  f_name_before,
  f_name_after,
) {
  "After a function that held a standing approval was renamed, write the allow rules out again under its new name - and do nothing at all when the renamed function held none.";
  "A rule is matched as plain text, so renaming the function it names leaves the rule pointing at a word nothing answers to. The list the rules are generated from does follow the rename, because the name is spelled there as a reference; the generated file does not follow anything, and until it is written out again the command silently goes back to asking. Measured on the rename that prompted this: four rules missing and four unaccounted for, and the gate that says so only speaks when somebody runs it.";
  "This adds no approval and removes none. The set of functions the human has approved is the same set before and after; only the words the rules spell change, which is why it is safe to do without asking, where adding a grant is not.";
  "The list is taken as this process already holds it and the new name put in place of the old, rather than read back from the file the rename has just rewritten. A module the loader has handed over once is not handed over again, so reading it back would render the file from the names as they were before.";
  let names = permission_grant_names();
  let granted = list_includes(names, f_name_before);
  if (not(granted)) {
    let untouched = {
      renamed: false,
    };
    return untouched;
  }
  function to_after(name) {
    let same = equal(name, f_name_before);
    if (same) {
      return f_name_after;
    }
    return name;
  }
  let names_after = list_map(names, to_after);
  let written = await permission_settings_allow_write_from(names_after);
  let allow = property_get(written, "allow");
  let report = {
    renamed: true,
    allow,
  };
  return report;
}
