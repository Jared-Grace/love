import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_exists_unalias } from "../../../love/public/src/function_exists_unalias.mjs";
import { assert_json } from "../../../love/public/src/assert_json.mjs";
export async function function_exists_assert(f_name) {
  let v = await function_exists_unalias(f_name);
  let exists = object_property_get(v, "exists");
  assert_json(exists, {
    f_name,
  });
}
