import { app_replace } from "../../../love/public/src/app_replace.mjs";
import { playwright_test_app_dev } from "../../../love/public/src/playwright_test_app_dev.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_run_args_none } from "../../../love/public/src/function_run_args_none.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
export async function app_replace_tests_run_e2e_number(fn_name) {
  let result = await function_run_args_none(fn_name);
  let name = property_get(result, "name");
  async function lambda2() {}
  await playwright_test_app_dev(app_replace, lambda2);
  return name;
}
