import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { function_rename_parts_delete } from "../../../love/public/src/function_rename_parts_delete.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function functions_rename_parts_delete(f_names_comma, deleted) {
  let f_names = text_split_comma(f_names_comma);
  async function lambda(f_name) {
    let r = await function_rename_parts_delete(f_name, deleted);
    return r;
  }
  await list_map_async(f_names, lambda);
  return r;
}
