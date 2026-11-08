import { arguments_assert } from "./arguments_assert.mjs";
import { property_set } from "./property_set.mjs";
import { functions_rename_map } from "./functions_rename_map.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_single } from "./list_single.mjs";
export async function function_rename(f_name_before, f_name_after) {
  "Renames one function and everything that names it, and hands back the old name resolved through its alias.";
  "A single rename is the batch rename with one entry, so every check and every sweep lives in one place and the two cannot drift apart. The batch reads each shared thing once, which for one name costs the same as reading it here.";
  arguments_assert(arguments, 2);
  let renames = {};
  property_set(renames, f_name_before, f_name_after);
  let renamed = await functions_rename_map(renames);
  let befores = object_property_names(renamed);
  let before = list_single(befores);
  return before;
}
