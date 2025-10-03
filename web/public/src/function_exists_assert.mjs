import { function_exists } from "../../../love/public/src/function_exists.mjs";
import { assert_json } from "./assert_json.mjs";
export async function function_exists_assert(f_name) {
  let { exists } = await function_exists(f_name);
  assert_json(exists, {
    f_name,
  });
}
