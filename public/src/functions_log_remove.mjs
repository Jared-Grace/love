import { function_transform } from "./function_transform.mjs";
import { marker } from "./marker.mjs";
import { list_wait } from "./list_wait.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_map } from "./list_map.mjs";
export async function functions_log_remove() {
  marker("1");
  async function lambda(ast) {}
  let output = await function_transform(f_name, lambda);
  async function lambda(name) {}
  let mapped = list_map(await functions_names(), lambda);
  await list_wait(mapped);
}
