import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function functions_transform_list(lambda$ast, list) {
  async function lambda2(f_name) {
    let output = await function_transform(f_name, lambda$ast);
    return output;
  }
  let waited = await list_map_unordered_async(list, lambda2);
  return waited;
}
