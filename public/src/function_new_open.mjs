import { function_new } from "../../../love/public/src/function_new.mjs";
import { function_open } from "../../../love/public/src/function_open.mjs";
export async function function_new_open(f_name) {
  await function_new(f_name);
  await function_open(f_name);
}
