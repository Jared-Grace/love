import { list_index_last } from "../../../love/public/src/list_index_last.mjs";
import { list_swap_at } from "../../../love/public/src/list_swap_at.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_rename_parts_end_swap(
  f_name_before,
  f_name_after,
) {
  marker("1");
  let parts = function_name_to_parts(f_name_before);
  let index_last = list_index_last(list2);
  list_swap_at(list, ai, bi);
  let v = await function_rename(f_name_before, f_name_after);
  return v;
}
