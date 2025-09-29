import { object_properties_delete } from "../../../love/public/src/object_properties_delete.mjs";
import { data_path } from "../../../love/public/src/data_path.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { file_js_parse } from "../../../love/public/src/file_js_parse.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { data_save } from "../../../love/public/src/data_save.mjs";
import { data_file_update_inner } from "../../../love/public/src/data_file_update_inner.mjs";
import { data_all } from "../../../love/public/src/data_all.mjs";
import { functions_paths } from "../../../love/public/src/functions_paths.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function data_files_update() {
  marker("1");
  let d_path = data_path();
  var d = await data_all(d_path);
  let { data } = d;
  let f_paths = await functions_paths();
  let parseds = await list_map_unordered_async(f_paths, file_js_parse);
  let properties = ["identifiers", "functions"];
  object_properties_delete(data, properties);
  async function lambda(parsed) {
    await data_file_update_inner(parsed, d);
  }
  await each_async(parseds, lambda);
  await data_save(d);
}
