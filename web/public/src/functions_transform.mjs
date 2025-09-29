import { list_wait } from "../../../love/public/src/list_wait.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function functions_transform(lambda) {
  async function lambda2(f_name) {
    let output = await function_transform(f_name, lambda);
    return output;
  }
  let mapped = list_map(await functions_names(), lambda2);
  let v = await list_wait(mapped);
  return v;
}
