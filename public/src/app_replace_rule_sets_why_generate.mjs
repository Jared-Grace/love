import { openai_responses_cache } from "../../../love/public/src/openai_responses_cache.mjs";
export async function app_replace_rule_sets_why_generate() {
  let r = await openai_responses_cache(system, user);
}
