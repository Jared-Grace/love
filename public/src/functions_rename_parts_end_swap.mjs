import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { function_rename } from "../../../love/public/src/function_rename.mjs";
import { function_name_parts_swap_end } from "../../../love/public/src/function_name_parts_swap_end.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function functions_rename_parts_end_swap(f_name_befores_comma) {
  let f_name_befores = text_split_comma(f_name_befores_comma);
  async function lambda(f_name_before) {
    let f_name_after = function_name_parts_swap_end(f_name_before);
    await function_rename(f_name_before, f_name_after);
  }
  await each_async(f_name_befores, lambda);
}
