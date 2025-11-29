import { each_async } from "../../../love/public/src/each_async.mjs";
import { function_param_delete } from "../../../love/public/src/function_param_delete.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_multiple_param_delete(param_name) {
  marker("1");
  await each_async(list, async function lambda(item) {});
  let v = await function_param_delete(param_name);
  return v;
}
