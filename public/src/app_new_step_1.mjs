import { function_new } from "../../../love/public/src/function_new.mjs";
import { app_name_prefixed } from "../../../love/public/src/app_name_prefixed.mjs";
export async function app_new_step_1(name) {
  let a_name = app_name_prefixed(name);
  await function_new(a_name);
}
