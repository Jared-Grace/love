import { each_async } from "../../../love/public/src/each_async.mjs";
import { app_replace_rule_set_verify_all } from "../../../love/public/src/app_replace_rule_set_verify_all.mjs";
export async function app_replace_tests_run() {
  let rule_sets = app_replace_rule_set_verify_all();
  async function lambda(item) {}
  await each_async(list, lambda);
}
