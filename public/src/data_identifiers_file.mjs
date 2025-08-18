import { log } from "./log.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { each } from "./each.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { data_transform } from "./data_transform.mjs";
import { marker } from "./marker.mjs";
export async function data_identifiers_file(parsed) {
  log("here");
  let { f_path, ast, code } = parsed;
  let i_names = js_identifiers_names(ast);
  let f_name = function_path_to_name(f_path);
  let property_name = "identifiers";
  function lambda(previous) {
    function lambda2(i_name) {
      let list = object_property_initialize(previous, i_name, []);
      list_add_if_not_includes(list, f_name);
    }
    each(i_names, lambda2);
    log("message");
    log(message);
    return previous;
  }
  let v = await data_transform(property_name, {}, lambda);
  return v;
}
