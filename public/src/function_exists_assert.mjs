import { function_exists_unalias } from "../../../love/public/src/function_exists_unalias.mjs";
import { assert_json } from "../../../love/public/src/assert_json.mjs";
export async function function_exists_assert(f_name) {
  let { exists } = await function_exists_unalias(f_name);
  assert_json(exists, {
    f_name,
  });
}
