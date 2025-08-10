import { function_delete_if_exists } from "./function_delete_if_exists.mjs";
import { file_exists } from "./file_exists.mjs";
import { function_delete } from "./function_delete.mjs";
import { function_param_new } from "./function_param_new.mjs";
import { function_wrap } from "./function_wrap.mjs";
export async function sandbox() {
  await function_delete_if_exists(n);
  const n = "function_params_new";
  await function_wrap(function_param_new.name, n);
}
