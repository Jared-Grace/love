import { function_param_new } from "./function_param_new.mjs";
import { function_wrap } from "./function_wrap.mjs";
export async function sandbox() {
  await function_wrap(function_param_new.name, "function_params_new");
}
