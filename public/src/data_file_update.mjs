import { object_property_get } from "./object_property_get.mjs";
import { data_save } from "./data_save.mjs";
import { data_all } from "./data_all.mjs";
import { data_transform } from "./data_transform.mjs";
import { each } from "./each.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
import { marker } from "./marker.mjs";
export async function data_file_update(f_path) {
  let f_name = function_path_to_name(f_path);
  var d = await data_all();
  let { data } = d;
  let parsed = await file_js_parse(f_path);
  let { ast } = parsed;
  let i_names = js_identifiers_names(ast);
  let identifiers = object_property_initialize(data, "identifiers", {});
  function lambda2(i_name) {
    let list = object_property_initialize(identifiers, i_name, []);
    list_add_if_not_includes(list, f_name);
  }
  each(i_names, lambda2);
  let functions = object_property_initialize(data, "functions", {});
  await data_save(d);
  marker("1");
}
