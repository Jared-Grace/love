import { log } from "../../../love/public/src/log.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { data_file_update_inner } from "../../../love/public/src/data_file_update_inner.mjs";
import { file_js_parse } from "../../../love/public/src/file_js_parse.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { functions_paths } from "../../../love/public/src/functions_paths.mjs";
import { performance_end } from "../../../love/public/src/performance_end.mjs";
import { performance_next } from "../../../love/public/src/performance_next.mjs";
import { performance_start } from "../../../love/public/src/performance_start.mjs";
export async function data_generate(data) {
  const p = performance_start(1);
  let f_paths = await functions_paths();
  performance_next(p, 2);
  let parseds = await list_map_unordered_async(f_paths, file_js_parse);
  async function lambda(parsed) {
    await data_file_update_inner(parsed, data);
  }
  each(parseds, lambda);
  let r = performance_end(p, 3);
  return;
  log(r);
}
