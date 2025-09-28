import { object_property_delete } from "./object_property_delete.mjs";
import { each } from "./each.mjs";
import { data_path } from "./data_path.mjs";
import { marker } from "./marker.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { data_save } from "./data_save.mjs";
import { data_file_update_inner } from "./data_file_update_inner.mjs";
import { data_all } from "./data_all.mjs";
import { functions_paths } from "./functions_paths.mjs";
import { each_async } from "./each_async.mjs";
export async function data_files_update() {
  marker("1");
  let d_path = data_path();
  var d = await data_all(d_path);
  let data = d;
  let f_paths = functions_paths();
  let parseds = await list_map_unordered_async(f_paths, file_js_parse);
  let properties = ["identifiers", "functions"];
  function lambda2(p) {
    object_property_delete(object, p);
  }
  each(properties, lambda2);
  async function lambda(parsed) {
    await data_file_update_inner(parsed, d);
  }
  await each_async(parseds, lambda);
  await data_save(d);
}
