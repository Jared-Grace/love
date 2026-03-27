import { app_replace_rule_sets_why_generate } from "../../../love/public/src/app_replace_rule_sets_why_generate.mjs";
import { app_replace_deploy } from "../../../love/public/src/app_replace_deploy.mjs";
export async function app_replace_rule_sets_why_generate_deploy() {
  await app_replace_rule_sets_why_generate();
  let r = await app_replace_deploy();
  return r;
}
