import { js_fn_name_strings_rename } from "./js_fn_name_strings_rename.mjs";
import { functions_transform_list } from "./functions_transform_list.mjs";
import { property_exists_if_async } from "./property_exists_if_async.mjs";
import { data_identifiers_fn_names_get } from "./data_identifiers_fn_names_get.mjs";
export async function function_rename_fn_names_check(
  f_name_before,
  f_name_after,
) {
  "Follows a rename into the places the old name was written out as text rather than called, which a rename of identifiers alone would leave behind.";
  let i = await data_identifiers_fn_names_get();
  async function lambda(value) {
    function lambda3(ast) {
      js_fn_name_strings_rename(ast, f_name_before, f_name_after);
    }
    await functions_transform_list(value, lambda3);
  }
  await property_exists_if_async(i, f_name_before, lambda);
}
