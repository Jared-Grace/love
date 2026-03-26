import { app_replace_rule_set } from "../../../love/public/src/app_replace_rule_set.mjs";
import { openai_responses_cache } from "../../../love/public/src/openai_responses_cache.mjs";
export async function app_replace_rule_sets_why_generate() {
  await app_replace_rule_sets(context);
  let r = await openai_responses_cache(system, user);
}
