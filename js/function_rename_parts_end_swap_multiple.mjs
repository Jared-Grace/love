import { each_async } from "./each_async.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { function_rename_parts_end_swap } from "./function_rename_parts_end_swap.mjs";
export async function function_rename_parts_end_swap_multiple(f_name_befores) {
  let split = text_split_comma(f_name_befores);
  async function lambda(f_name_before) {
    await function_rename_parts_end_swap(f_name_before);
  }
  await each_async(split, lambda);
}
