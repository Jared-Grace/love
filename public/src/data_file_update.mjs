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
  let parsed = await file_js_parse(f_path);
  let { ast, code } = parsed;
  let i_names = js_identifiers_names(ast);
  let property_name = "identifiers";
  function lambda(previous) {
    function lambda2(i_name) {
      let list = object_property_initialize(previous, i_name, []);
      list_add_if_not_includes(list, f_name);
    }
    each(i_names, lambda2);
    return previous;
  }
  let v = await data_transform(property_name, {}, lambda);
  marker("1");
}
