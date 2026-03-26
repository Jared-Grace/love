import { exit } from "../../../love/public/src/exit.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { openai_responses_cache } from "../../../love/public/src/openai_responses_cache.mjs";
export async function app_replace_rule_sets_why_generate() {
  let rule_sets = app_replace_rule_sets();
  async function lambda(item) {
  let r = await openai_responses_cache(system, user);
    exit();
  }
  await each_async(rule_sets, lambda);
}
