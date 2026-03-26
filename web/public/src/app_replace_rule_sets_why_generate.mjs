import { app_replace_rules_parse } from "../../../love/public/src/app_replace_rules_parse.mjs";
import { property_change } from "../../../love/public/src/property_change.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { exit } from "../../../love/public/src/exit.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { openai_responses_cache } from "../../../love/public/src/openai_responses_cache.mjs";
export async function app_replace_rule_sets_why_generate() {
  let rule_sets = app_replace_rule_sets();
  async function lambda(rule_set) {
    let value2 = property_change(rule_set, "rules", app_replace_rules_parse);
    log(app_replace_rule_sets_why_generate.name, {
      value2,
    });
    exit();
    let json = json_to(rule_set);
    let r = await openai_responses_cache(
      "You will receive the JSON of an unrestricted grammar (although it could be more restrictive like a context-free grammar). Please provide a sentence or two describing what the grammar demonstrates, and why.",
      json,
    );
    log(app_replace_rule_sets_why_generate.name, {
      r,
    });
    exit();
  }
  await each_async(rule_sets, lambda);
}
