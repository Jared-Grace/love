import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function functions_transform(lambda) {
  async function lambda2(f_name) {
    let output = await function_transform(f_name, lambda);
    return output;
  }
  let waited = await list_map_unordered_async(await functions_names(), lambda2);
  return waited;
}
