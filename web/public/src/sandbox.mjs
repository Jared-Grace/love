import { function_delete } from "./function_delete.mjs";
import { function_param_new } from "./function_param_new.mjs";
import { function_wrap } from "./function_wrap.mjs";
export async function sandbox() {
  const n = "function_params_new";
  await function_wrap(function_param_new.name, n);
  await function_delete(n);
}
