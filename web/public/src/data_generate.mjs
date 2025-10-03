import { each } from "../../../love/public/src/each.mjs";
import { data_file_update_inner } from "../../../love/public/src/data_file_update_inner.mjs";
import { file_js_parse } from "../../../love/public/src/file_js_parse.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { functions_paths } from "../../../love/public/src/functions_paths.mjs";
export async function data_generate(data) {
  let f_paths = await functions_paths();
  let parseds = await list_map_unordered_async(f_paths, file_js_parse);
  async function lambda(parsed) {
    await data_file_update_inner(parsed, data);
  }
  each(parseds, lambda);
}
