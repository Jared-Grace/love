import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { file_copy_overwrite } from "../../../love/public/src/file_copy_overwrite.mjs";
import { function_name_to_base } from "../../../love/public/src/function_name_to_base.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { list_join_slash_forward } from "../../../love/public/src/list_join_slash_forward.mjs";
import { folder_js } from "../../../love/public/src/folder_js.mjs";
import { list_slice } from "../../../love/public/src/list_slice.mjs";
import { text_split_slash_forward } from "../../../love/public/src/text_split_slash_forward.mjs";
import { function_name_to_path_search } from "../../../love/public/src/function_name_to_path_search.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
export async function functions_firebase_to_root() {
  let f_names = await functions_names();
  async function lambda(f_name) {
    let v = await function_name_to_path_search(f_name);
    let f_path = property_get(v, "f_path");
    let split = text_split_slash_forward(f_path);
    let sliced = list_slice(split, 0, 2);
    let js = folder_js();
    let f_name_ext = function_name_to_base(f_name);
    list_add_multiple(sliced, [js, f_name_ext]);
    let joined = list_join_slash_forward(sliced);
    let result = await file_copy_overwrite(f_path, joined);
  }
  await list_map_unordered_async(f_names, lambda);
}
