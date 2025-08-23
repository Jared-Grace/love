import { function_transform } from "./function_transform.mjs";
import { each_async } from "./each_async.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { data_identifiers_get } from "./data_identifiers_get.mjs";
import { function_alias_rename } from "./function_alias_rename.mjs";
import { function_delete } from "./function_delete.mjs";
import { function_copy } from "./function_copy.mjs";
import { marker } from "./marker.mjs";
export async function function_rename(f_name_before, f_name_after) {
  await function_copy(f_name_before, f_name_after);
  await function_delete(f_name_before);
  let v = await function_alias_rename(f_name_before, f_name_after);
  let identifiers = await data_identifiers_get();
  let f_names = object_property_get(identifiers, f_name_before);
  async function lambda(item) {
    async function lambda2(ast) {}
    let output = await function_transform(f_name, lambda2);
  }
  await each_async(list, lambda);
  marker("1");
}
