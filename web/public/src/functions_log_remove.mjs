import { function_transform } from "./function_transform.mjs";
import { marker } from "./marker.mjs";
import { list_wait } from "./list_wait.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_map } from "./list_map.mjs";
import { js_log_remove } from "./js_log_remove.mjs";
export async function functions_log_remove() {
  marker("1");
  let lambda = js_log_remove;
  async function lambda2(f_name) {
    let output = await function_transform(f_name, lambda);
  }
  let mapped = list_map(await functions_names(), lambda2);
  await list_wait(mapped);
}
