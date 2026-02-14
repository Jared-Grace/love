import { js_identifier_rename_imports_fix } from "../../../love/public/src/js_identifier_rename_imports_fix.mjs";
import { property_exists_if_async } from "../../../love/public/src/property_exists_if_async.mjs";
import { list_remove_if_exists } from "../../../love/public/src/list_remove_if_exists.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { data_identifiers_get } from "../../../love/public/src/data_identifiers_get.mjs";
export async function function_rename_identifiers(f_name_before, f_name_after) {
  let identifiers = await data_identifiers_get();
  await property_exists_if_async(identifiers, f_name_before, on_exist);
  async function on_exist(f_names) {
    list_remove_if_exists(f_names, f_name_before);
    async function lambda(f_name) {
      async function lambda2(ast) {
        await js_identifier_rename_imports_fix(
          ast,
          f_name_before,
          f_name_after,
        );
      }
      let output = await function_transform(f_name, lambda2);
    }
    await each_async(f_names, lambda);
  }
}
