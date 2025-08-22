import { function_transform } from "./function_transform.mjs";
import { marker } from "./marker.mjs";
import { list_wait } from "./list_wait.mjs";
import { function_format } from "./function_format.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_map } from "./list_map.mjs";
export async function functions_log_remove() {
  marker("1");
  let output = await function_transform(f_name, async function lambda(ast) {});
  let mapped = list_map(await functions_names(), function_format);
  await list_wait(mapped);
}
