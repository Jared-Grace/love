import { json_from } from "../../../love/public/src/json_from.mjs";
import { openai_responses_cache } from "../../../love/public/src/openai_responses_cache.mjs";
import { app_replace_rule_sets_why_generate_single } from "../../../love/public/src/app_replace_rule_sets_why_generate_single.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
export async function app_replace_rule_sets_why_generate_single_openai(
  rule_set,
) {
  let json = json_to(rule_set);
  log(app_replace_rule_sets_why_generate_single.name, {
    json,
  });
  let r = await openai_responses_cache(
    'You will receive the JSON of the replacement rules of a grammar. Please provide a sentence or two describing what the replacement rules demonstrate, and why. Answer using JSON: { "result": "description" }',
    json,
  );
  log(app_replace_rule_sets_why_generate_single.name, {
    r,
  });
  let parsed = json_from(r);
  return parsed;
}
