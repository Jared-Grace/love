import { data_file_update_inner_curried_right } from "../../../love/public/src/data_file_update_inner_curried_right.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { file_js_parse } from "../../../love/public/src/file_js_parse.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { functions_paths } from "../../../love/public/src/functions_paths.mjs";
export async function data_generate(data) {
  let f_paths = await functions_paths();
  let parseds = await list_map_unordered_async(f_paths, file_js_parse);
  let lambda = data_file_update_inner_curried_right(data);
  each(parseds, lambda);
  return;
}
