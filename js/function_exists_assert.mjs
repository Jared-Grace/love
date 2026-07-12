import { property_get } from "./property_get.mjs";
import { function_unalias_exists } from "./function_unalias_exists.mjs";
import { assert_json } from "./assert_json.mjs";
export async function function_exists_assert(f_name) {
  let v = await function_unalias_exists(f_name);
  let exists = property_get(v, "exists");
  assert_json(exists, {
    f_name,
  });
}
