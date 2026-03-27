import { json_from } from "../../../love/public/src/json_from.mjs";
import { openai_responses_cache } from "../../../love/public/src/openai_responses_cache.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
export async function app_replace_rule_sets_why_generate_single_openai(
  rule_set,
) {
  let json = json_to(rule_set);
  log(app_replace_rule_sets_why_generate_single_openai.name, {
    json,
  });
  let r = await openai_responses_cache(
    'You will receive the JSON of the replacement rules of a grammar. Describe what the replacement rules demonstrate, and why. Answer must be 1 or at most 2 sentences. Answer using JSON: { "result": "description" }',
    json,
  );
  log(app_replace_rule_sets_why_generate_single_openai.name, {
    r,
  });
  let parsed = json_from(r);
  return parsed;
}
