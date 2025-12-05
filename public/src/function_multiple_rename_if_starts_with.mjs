import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { functions_names } from "./functions_names.mjs";
export async function function_multiple_rename_if_starts_with(
  f_name_prefix,
  f_name_after,
) {
  let f_names = await functions_names();
  let filtered = list_filter_starts_with(list2, prefix);
  marker("1");
  async function lambda(item) {}
  await each_async(list, lambda);
  let v = await function_rename(f_name_before, f_name_after);
  return v;
}
