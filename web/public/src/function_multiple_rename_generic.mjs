import { function_rename } from "../../../love/public/src/function_rename.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { list_empty_not_is_assert } from "../../../love/public/src/list_empty_not_is_assert.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
export async function function_multiple_rename_generic(filter, name_change) {
  let f_names = await functions_names();
  let filtered = filter(f_names);
  list_empty_not_is_assert(filtered);
  await each_async(filtered, lambda);
  async function lambda(f_name_before) {
    let after = name_change(f_name_before);
    let v = await function_rename(f_name_before, after);
  }
}
