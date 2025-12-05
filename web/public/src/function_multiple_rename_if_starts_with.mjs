import { log } from "../../../love/public/src/log.mjs";
import { string_prefix_change } from "../../../love/public/src/string_prefix_change.mjs";
import { list_empty_not_is_assert } from "../../../love/public/src/list_empty_not_is_assert.mjs";
import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { functions_names } from "./functions_names.mjs";
export async function function_multiple_rename_if_starts_with(
  f_name_prefix_before,
  f_name_prefix_after,
) {
  let f_names = await functions_names();
  let filtered = list_filter_starts_with(f_names, f_name_prefix_before);
  list_empty_not_is_assert(filtered);
  marker("1");
  async function lambda(f_name_before) {
    let together = string_prefix_change(
      f_name_before,
      f_name_prefix_before,
      f_name_prefix_after,
    );
    log(together);
    let v = await function_rename(f_name_before, together);
  }
  await each_async(filtered, lambda);
}
