import { function_list_generate } from "./function_list_generate.mjs";
import { function_open } from "./function_open.mjs";
export async function function_list_generate_open(f_generate, list) {
  let f_name = await function_list_generate(f_generate, list);
  await function_open(f_name);
}
