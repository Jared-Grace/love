import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function functions_transform(lambda) {
  const list = await functions_names();
  async function lambda2(f_name) {
    let output = await function_transform(f_name, lambda);
    return output;
  }
  let waited = await list_map_unordered_async(list, lambda2);
  return waited;
}
