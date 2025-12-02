import { object_property_exists_if_async } from "../../../love/public/src/object_property_exists_if_async.mjs";
import { data_identifiers_fn_names_get } from "../../../love/public/src/data_identifiers_fn_names_get.mjs";
import { function_move } from "../../../love/public/src/function_move.mjs";
import { function_rename_identifiers } from "../../../love/public/src/function_rename_identifiers.mjs";
import { function_alias_rename } from "../../../love/public/src/function_alias_rename.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { error } from "./error.mjs";
import { error_json } from "./error_json.mjs";
export async function function_rename(f_name_before, f_name_after) {
  let i = await data_identifiers_fn_names_get();
  async function lambda(value) {
    error_json({
      message:
        "You are trying to rename: " +
        f_name_before +
        ". However that is referenced by " +
        value,
      f_name_before,
      value,
    });
  }
  await object_property_exists_if_async(i, f_name_before, lambda);
  error("else");
  await function_move(f_name_before, f_name_after);
  let v = await function_alias_rename(f_name_before, f_name_after);
  await function_rename_identifiers(f_name_before, f_name_after);
  marker("1");
  return;
}
