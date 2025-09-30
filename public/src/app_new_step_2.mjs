import { function_new } from "../../../love/public/src/function_new.mjs";
import { app_name_main } from "../../../love/public/src/app_name_main.mjs";
export async function app_new_step_2(name) {
  let combined = app_name_main(name);
  await function_new(combined);
}
