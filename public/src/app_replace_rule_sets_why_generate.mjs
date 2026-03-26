import { app_replace_start_end_get } from "../../../love/public/src/app_replace_start_end_get.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { app_replace_rules_parse_left_right_only } from "../../../love/public/src/app_replace_rules_parse_left_right_only.mjs";
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
    let value2 = property_change(
      rule_set,
      "rules",
      app_replace_rules_parse_left_right_only,
    );
    function lambda3(goals) {
      let mapped2 = list_map(goals, app_replace_start_end_get);
      return mapped2;
    }
    let value3 = property_change(o, "goals", lambda3);
    let mapped = list_map(list, lambda2);
    let json = json_to(rule_set);
    log(app_replace_rule_sets_why_generate.name, {
      json,
    });
    exit();
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
