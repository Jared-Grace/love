import { each_async } from "../../../love/public/src/each_async.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { function_rename_parts_delete } from "../../../love/public/src/function_rename_parts_delete.mjs";
export async function functions_rename_parts_delete(f_names_comma, deleted) {
  let split = text_split_comma(f_names_comma);
  async function lambda(item) {}
  await each_async(list, lambda);
  let r = await function_rename_parts_delete(f_name_old, deleted);
  return r;
}
