import { object_property_get_or } from "../../../love/public/src/object_property_get_or.mjs";
import { object_property_exists_not } from "../../../love/public/src/object_property_exists_not.mjs";
import { list_remove_if_exists } from "../../../love/public/src/list_remove_if_exists.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { js_imports_paths_fix } from "../../../love/public/src/js_imports_paths_fix.mjs";
import { js_identifier_replace } from "../../../love/public/src/js_identifier_replace.mjs";
import { data_identifiers_get } from "../../../love/public/src/data_identifiers_get.mjs";
export async function function_rename_identifiers(f_name_before, f_name_after) {
  let identifiers = await data_identifiers_get();
  let n = object_property_exists_not(identifiers, f_name_before);
  if (n) {
    return;
  }
  let f_names = object_property_get_or(identifiers, f_name_before);
  list_remove_if_exists(f_names, f_name_before);
  async function lambda(f_name) {
    async function lambda2(ast) {
      js_identifier_replace(ast, f_name_before, f_name_after);
      await js_imports_paths_fix(ast);
    }
    let output = await function_transform(f_name, lambda2);
  }
  await each_async(f_names, lambda);
}
