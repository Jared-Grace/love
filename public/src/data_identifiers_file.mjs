import { object_property_initialize } from "./object_property_initialize.mjs";
import { each } from "./each.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { data_transform } from "./data_transform.mjs";
import { marker } from "./marker.mjs";
export async function data_identifiers_file(parsed) {
  let { f_path, ast, code } = parsed;
  let property_name = "identifiers";
  function lambda(previous) {
    let names = js_identifiers_names(ast);
    function lambda2(name) {
      let result = object_property_initialize(object, property_name2, value);
    }
    each(names, lambda2);
  }
  let v = await data_transform(property_name, {}, lambda);
  return v;
}
