import { permission_grant_names_settings_write } from "./permission_grant_names_settings_write.mjs";
import { permission_grant_names } from "./permission_grant_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_remove } from "./list_remove.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
export async function permission_grant_remove_multiple(names_comma) {
  "take back the standing approval this whole set of functions held, so that running any of them asks again";
  "do NOT grant - it edits the file that decides what runs unasked and has to be seen every time, exactly as the single-name half says of itself";
  "the twin the granting half already had. Taking three rules back was three runs of the single one, and a repeated invocation is the specification of the command that was missing: it also renders the settings file once instead of once per name, and reads the granted names once, which is what stopped the adder's loop from overwriting itself.";
  "a name that holds no rule is passed over and reported rather than refused, so running this twice is the same as running it once, and one unheld name in a batch does not stop the rest";
  let asked = text_split_comma(names_comma);
  let names = permission_grant_names();
  let removed = [];
  let unheld = [];
  for (let unaliased of asked) {
    let held = list_includes(names, unaliased);
    if (held) {
      list_remove(names, unaliased);
      list_add(removed, unaliased);
      continue;
    }
    list_add(unheld, unaliased);
  }
  let allow = await permission_grant_names_settings_write(names);
  let report = {
    removed,
    unheld,
    names: names.length,
    allow,
  };
  return report;
}
