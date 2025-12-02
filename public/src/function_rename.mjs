import { object_property_exists_if_async } from "../../../love/public/src/object_property_exists_if_async.mjs";
import { object_property_get_or } from "../../../love/public/src/object_property_get_or.mjs";
import { data_identifiers_fn_names_get } from "../../../love/public/src/data_identifiers_fn_names_get.mjs";
import { function_move } from "../../../love/public/src/function_move.mjs";
import { function_rename_identifiers } from "../../../love/public/src/function_rename_identifiers.mjs";
import { function_alias_rename } from "../../../love/public/src/function_alias_rename.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_rename(f_name_before, f_name_after) {
  let i = await data_identifiers_fn_names_get();
  let f_names = object_property_get_or(null, i, f_name_before);
  return f_names;
  await object_property_exists_if_async(
    obj,
    property,
    async function lambda(value) {},
  );
  await function_move(f_name_before, f_name_after);
  let v = await function_alias_rename(f_name_before, f_name_after);
  await function_rename_identifiers(f_name_before, f_name_after);
  marker("1");
  return;
}
