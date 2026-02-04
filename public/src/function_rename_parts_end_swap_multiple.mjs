import { each_async } from "../../../love/public/src/each_async.mjs";
import { string_split_comma } from "../../../love/public/src/string_split_comma.mjs";
import { function_rename_parts_end_swap } from "../../../love/public/src/function_rename_parts_end_swap.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_rename_parts_end_swap_multiple(f_name_befores) {
  marker("1");
  let split = string_split_comma(f_name_befores);
  async function lambda(item) {}
  await each_async(list, lambda);
  let v = await function_rename_parts_end_swap(f_name_before);
  return v;
}
