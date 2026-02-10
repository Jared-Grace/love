import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { list_empty_not_is_assert } from "../../../love/public/src/list_empty_not_is_assert.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
export async function functions_rename_generic(filter, name_change) {
  let f_names = await functions_names();
  let filtered = list_filter(f_names, filter);
  list_empty_not_is_assert(filtered);
  await each_async(filtered, lambda);
  async function lambda(f_name_before) {
    let f_name_after = name_change(f_name_before);
    if (equal(f_name_before, f_name_after)) {
      return;
    }
    let v = await function_rename(f_name_before, f_name_after);
  }
}
