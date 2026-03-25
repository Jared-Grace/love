import { app_replace_tests_run_e2e_normal_fn } from "../../../love/public/src/app_replace_tests_run_e2e_normal_fn.mjs";
import { app_replace_tests_run_e2e_browser } from "../../../love/public/src/app_replace_tests_run_e2e_browser.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_run_args_none } from "../../../love/public/src/function_run_args_none.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
export async function app_replace_tests_run_e2e_single(fn_name) {
  let rs = await function_run_args_none(fn_name);
  let name = property_get(rs, "name");
  await app_replace_tests_run_e2e_browser(
    rs,
    goal,
    app_replace_tests_run_e2e_normal_fn,
  );
  return name;
}
