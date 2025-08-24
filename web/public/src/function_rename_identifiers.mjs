import {each_async} from "./each_async.mjs";
import {function_transform} from "./function_transform.mjs";
import {js_imports_paths_fix} from "./js_imports_paths_fix.mjs";
import {js_identifier_replace} from "./js_identifier_replace.mjs";
import {list_remove} from "./list_remove.mjs";
import {object_property_get} from "./object_property_get.mjs";
import {data_identifiers_get} from "./data_identifiers_get.mjs";
export async function function_rename_identifiers(f_name_before, f_name_after) {
  let identifiers = await data_identifiers_get();
  let f_names = object_property_get(identifiers, f_name_before);
  list_remove(f_names, f_name_before);
  async function lambda(f_name) {
    async function lambda2(ast) {
      js_identifier_replace(ast, f_name_before, f_name_after);
      js_imports_paths_fix(ast);
    }
    let output = await function_transform(f_name, lambda2);
  }
  await each_async(f_names, lambda);
}
