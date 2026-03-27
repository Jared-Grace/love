import { app_replace_rule_sets_run } from "../../../love/public/src/app_replace_rule_sets_run.mjs";
import { app_replace_rule_set_verify } from "../../../love/public/src/app_replace_rule_set_verify.mjs";
import { each } from "./each.mjs";
export async function app_replace_rule_set_verify_all() {
  let rule_sets = await app_replace_rule_sets_run();
  each(rule_sets, app_replace_rule_set_verify);
}
