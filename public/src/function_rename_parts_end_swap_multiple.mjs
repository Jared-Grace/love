import { function_rename_parts_end_swap } from "../../../love/public/src/function_rename_parts_end_swap.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_rename_parts_end_swap_multiple(f_name_before) {
  marker("1");
  let v = await function_rename_parts_end_swap(f_name_before);
  return v;
}
