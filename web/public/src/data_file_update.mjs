import { object_property_delete } from "./object_property_delete.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { list_remove_all } from "./list_remove_all.mjs";
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
import { list_difference } from "./list_difference.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_remove } from "./list_remove.mjs";
export async function data_file_update(f_path) {
  let f_name = function_path_to_name(f_path);
  var d = await data_all();
  let { data } = d;
  let parsed = await file_js_parse(f_path);
  let { ast } = parsed;
  let f_identifiers_new = js_identifiers_names(ast);
  const property_name = "identifiers";
  let identifiers = object_property_initialize(data, property_name, {});
  function lambda2(i_name) {
    let list = object_property_initialize(identifiers, i_name, []);
    list_add_if_not_includes(list, f_name);
  }
  each(f_identifiers_new, lambda2);
  let functions = object_property_initialize(data, "functions", {});
  let f_this = object_property_initialize(functions, f_name, {});
  let f_identifiers_old = object_property_initialize(f_this, property_name, []);
  let removals = list_difference(f_identifiers_old, f_identifiers_new);
  function lambda(item) {
    let list = object_property_initialize(identifiers, item, []);
    list_remove_all(list, f_name);
    let e = list_empty_is(list);
    if (e) {
      object_property_delete(identifiers, item);
    }
  }
  let x = null;
  each(removals, lambda);
  object_property_set(f_this, property_name, f_identifiers_new);
  await data_save(d);
  marker("1");
}
