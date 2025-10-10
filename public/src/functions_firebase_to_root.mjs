import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { file_copy_overwrite } from "../../../love/public/src/file_copy_overwrite.mjs";
import { function_name_to_base } from "../../../love/public/src/function_name_to_base.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { list_join_slash_forward } from "../../../love/public/src/list_join_slash_forward.mjs";
import { folder_js } from "../../../love/public/src/folder_js.mjs";
import { list_slice } from "../../../love/public/src/list_slice.mjs";
import { string_split_slash_forward } from "../../../love/public/src/string_split_slash_forward.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { function_name_to_path_search } from "../../../love/public/src/function_name_to_path_search.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function functions_firebase_to_root() {
  marker("1");
  let f_names = await functions_names();
  async function lambda(f_name) {
    let { f_path } = await function_name_to_path_search(f_name);
    let split = string_split_slash_forward(f_path);
    let sliced = list_slice(split, 0, 2);
    let js = folder_js();
    let f_name_ext = function_name_to_base(f_name);
    list_add_multiple(sliced, [js, f_name_ext]);
    let joined = list_join_slash_forward(sliced);
    log(joined);
    let result = await file_copy_overwrite(joined, f_path);
  }
  await each_async(f_names, lambda);
  let waited = await list_map_unordered_async(
    list,
    async function lambda2(item) {},
  );
}
