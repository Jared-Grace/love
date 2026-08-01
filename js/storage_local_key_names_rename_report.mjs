import { arguments_assert } from "./arguments_assert.mjs";
import { storage_local_key_names } from "./storage_local_key_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { not } from "./not.mjs";
export async function storage_local_key_names_rename_report(
  f_name_before,
  f_name_after,
) {
  "Says so when the function just renamed is one whose name people's browsers have written down, because the settings saved under the old name are now unreachable.";
  "A local storage key here is the owning function's own name with a word after it. So this is the one rename that is not behaviour-preserving, and the way it fails is silent: every reference in the repo follows the new name, the file loads, every caller compiles, and the loss is on disks nobody in this repo can reach. A gate says the same thing, but only when somebody runs it, and renaming commits itself - so the sentence has to arrive at the moment the rename does.";
  "It reports rather than refuses. Renaming away from a published name is sometimes the right thing and the record has a command that blesses it; what nobody can afford is doing it without knowing. So the rename stands and the reader is told what it cost.";
  arguments_assert(arguments, 2);
  let names = await storage_local_key_names();
  let published = list_includes(names, f_name_before);
  if (not(published)) {
    return;
  }
  let told = text_combine_multiple([
    "settings in people's browsers are filed under ",
    f_name_before,
    ", so nothing can reach them now that it answers to ",
    f_name_after,
  ]);
  console.log(told);
  let f_name = fn_name("function_rename");
  let combined = text_combine_multiple([
    "  to undo    node scripts/ai.mjs ",
    f_name,
    " ",
    f_name_after,
    " ",
    f_name_before,
  ]);
  console.log(combined);
  let f_name2 = fn_name("storage_local_key_names_write");
  let combined2 = text_combine_multiple([
    "  if meant   node scripts/ai.mjs ",
    f_name2,
  ]);
  console.log(combined2);
}
