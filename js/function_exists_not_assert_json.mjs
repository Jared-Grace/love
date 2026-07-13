import { function_exists_not } from "./function_exists_not.mjs";
import { assert_json } from "./assert_json.mjs";
export async function function_exists_not_assert_json(f_name, json) {
  let n = await function_exists_not(f_name);
  assert_json(n, {
    f_name,
    json,
  });
}
