import { each_object } from "../../../love/public/src/each_object.mjs";
import { global_import_set } from "../../../love/public/src/global_import_set.mjs";
import { object_values_map_async } from "../../../love/public/src/object_values_map_async.mjs";
import { function_dependencies_externals_to_urls } from "../../../love/public/src/function_dependencies_externals_to_urls.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_dependencies_code_export } from "../../../love/public/src/function_dependencies_code_export.mjs";
export async function app_a_function_import(f_name) {
  let v2 = await function_dependencies_code_export(f_name);
  let externals = property_get(v2, "externals");
  let get = property_get(v2, "get");
  let v3 = await get();
  let global = property_get(v3, "global");
  let imports = function_dependencies_externals_to_urls(externals);
  async function lambda6(url) {
    let v4 = await import(url);
    return v4;
  }
  let modules = await object_values_map_async(imports, lambda6);
  function lambda4(m, name) {
    global_import_set(name, m, global);
  }
  each_object(modules, lambda4);
  let fn = property_get(v3, "fn");
  return fn;
}
